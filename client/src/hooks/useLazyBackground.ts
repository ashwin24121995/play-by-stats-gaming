import { useEffect, useRef, useState } from 'react';

/**
 * useLazyBackground Hook
 * Implements lazy loading for background images using Intersection Observer API
 * Defers image loading until the element is about to enter the viewport
 * 
 * Usage:
 * const { ref, backgroundImage } = useLazyBackground('/images/hero.webp');
 * <div ref={ref} style={{ backgroundImage }} />
 */
export function useLazyBackground(imageSrc: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create Intersection Observer with rootMargin to start loading before visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Image is about to enter viewport, start loading
            const img = new Image();
            img.onload = () => {
              setBackgroundImage(`url(${imageSrc})`);
              setIsLoaded(true);
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${imageSrc}`);
              setIsLoaded(true);
            };
            img.src = imageSrc;
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before element enters viewport
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [imageSrc, isLoaded]);

  return { ref, backgroundImage, isLoaded };
}
