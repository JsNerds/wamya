import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  useEffect(() => {
    
    window.scrollTo(500, 500);
    window.scroll({behavior : 'smooth'})
    
  }, []);

  return null;
}