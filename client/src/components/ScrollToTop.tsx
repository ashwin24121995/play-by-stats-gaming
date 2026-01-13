import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page when route changes
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
