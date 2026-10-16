# syntax=docker/dockerfile:1.7

# ---------- Stage 1: install dependencies (cached until lockfile changes) ----------
# Vite 8 needs Node >= 20.19 / 22.12; use Node 24 LTS (matches CI).
# $BUILDPLATFORM = the machine doing the build, so npm/vite always run natively
# (fast) even when producing an arm64 image on an amd64 runner. The output
# (HTML/JS/CSS) is identical for every CPU, so this is safe.
FROM --platform=$BUILDPLATFORM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# ---------- Stage 2 (optional): dev server with HMR ----------
FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# ---------- Stage 3: production build ----------
FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# ---------- Stage 4: tiny, non-root runtime ----------
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
# Image's default CMD runs nginx in the foreground as the non-root "nginx" user.
