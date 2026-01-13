import { ReactNode } from 'react';
import { useLazyBackground } from '@/hooks/useLazyBackground';

interface LazyBackgroundSectionProps {
  imageSrc: string;
  className?: string;
  children: ReactNode;
}

/**
 * LazyBackgroundSection Component
 * Wrapper component that applies lazy-loaded background images
 * Improves initial page load by deferring image loading until needed
 * 
 * Usage:
 * <LazyBackgroundSection
 *   imageSrc="/images/hero.webp"
 *   className="h-screen bg-cover bg-center"
 * >
 *   <div>Content here</div>
 * </LazyBackgroundSection>
 */
export default function LazyBackgroundSection({
  imageSrc,
  className = '',
  children,
}: LazyBackgroundSectionProps) {
  const { ref, backgroundImage, isLoaded } = useLazyBackground(imageSrc);

  return (
    <div
      ref={ref}
      className={`${className} ${isLoaded ? 'bg-cover bg-center' : 'bg-gray-900'}`}
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
}
