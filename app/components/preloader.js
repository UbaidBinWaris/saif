"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../styles/color.css";

// Internal Preloader Animation Component
const LoaderAnimation = () => {
  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-[var(--color-bg-primary)] z-[9999]"
    >
      <div className="relative w-24 h-24 rotate-45">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 w-7 h-7 m-[2px] bg-[var(--color-text-primary)]"
            style={{
              animation: `square-animation 10s ease-in-out infinite both`,
              animationDelay: `${-i * (10 / 7)}s`,
            }}
          />
        ))}
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes square-animation {
          0% { left: 0; top: 0; }
          10.5% { left: 0; top: 0; }
          12.5% { left: 32px; top: 0; }
          23% { left: 32px; top: 0; }
          25% { left: 64px; top: 0; }
          35.5% { left: 64px; top: 0; }
          37.5% { left: 64px; top: 32px; }
          48% { left: 64px; top: 32px; }
          50% { left: 32px; top: 32px; }
          60.5% { left: 32px; top: 32px; }
          62.5% { left: 32px; top: 64px; }
          73% { left: 32px; top: 64px; }
          75% { left: 0; top: 64px; }
          85.5% { left: 0; top: 64px; }
          87.5% { left: 0; top: 32px; }
          98% { left: 0; top: 32px; }
          100% { left: 0; top: 0; }
        }
      `}</style>
    </div>
  );
};

// Main Preloader Component with Wrapper Logic
export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Show preloader on route changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Show preloader on initial load
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show preloader for 2.5 seconds on initial load
    
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoaderAnimation />;

  return <>{children}</>;
}
