import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  as?: React.ElementType;
}

const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  (props, ref) => {
    const { src, alt, ...rest } = props;
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const target =
        (ref as React.RefObject<HTMLImageElement>)?.current || imgRef.current;
      if (!target) return;
      let observer: IntersectionObserver;
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(target);
      } else {
        setIsVisible(true);
      }
      return () => observer && observer.disconnect();
    }, [ref]);

    return (
      <img
        ref={ref || imgRef}
        src={isVisible ? src : undefined}
        data-src={src}
        alt={alt}
        loading="lazy"
        {...rest}
      />
    );
  }
);

export default LazyImage;
