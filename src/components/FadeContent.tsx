import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  initialOpacity?: number;
  threshold?: number;
  delay?: number;
  className?: string;
}

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  initialOpacity = 0,
  threshold = 0.1,
  delay = 0,
  className = "",
}: FadeContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        filter: blur ? (isVisible ? "blur(0px)" : "blur(10px)") : "none",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: "opacity, filter, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
