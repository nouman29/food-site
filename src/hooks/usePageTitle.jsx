import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Home | Habibi Restaurant AJK",
  "/menu": "Menu | Habibi Restaurant AJK",
  "/about": "About Us | Habibi Restaurant AJK",
  "/gallery": "Gallery | Habibi Restaurant AJK",
  "/contact": "Contact | Habibi Restaurant AJK",
  "/services": "Services | Habibi Restaurant AJK",
  "/testimonials": "Testimonials | Habibi Restaurant AJK",
};

export default function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Habibi Restaurant AJK";
    document.title = title;
  }, [location.pathname]);
}
