import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading fallback component
const LoadingFallback = ({ height = '200px' }) => (
  <div 
    className="flex items-center justify-center bg-gray-100 animate-pulse rounded"
    style={{ height }}
  >
    <div className="text-gray-500">Loading...</div>
  </div>
);

// Higher-order component for dynamic imports with loading states
export const withDynamicImport = (importFunc, options = {}) => {
  const {
    loading: LoadingComponent = LoadingFallback,
    ssr = false,
    suspense = false,
    ...dynamicOptions
  } = options;

  const DynamicComponent = dynamic(importFunc, {
    loading: () => <LoadingComponent />,
    ssr,
    ...dynamicOptions,
  });

  if (suspense) {
    const WrappedComponent = (props) => (
      <Suspense fallback={<LoadingComponent />}>
        <DynamicComponent {...props} />
      </Suspense>
    );
    WrappedComponent.displayName = `WithSuspense(${DynamicComponent.displayName || 'Component'})`;
    return WrappedComponent;
  }

  return DynamicComponent;
};

// Pre-configured dynamic imports for common components
export const DynamicChatBot = withDynamicImport(
  () => import('../Other/ChatBot'),
  { ssr: false }
);

export const DynamicThreeD = withDynamicImport(
  () => import('../Other/threeD'),
  { ssr: false }
);

export const DynamicBlog = withDynamicImport(
  () => import('../Blog/Blog'),
  { suspense: true }
);

export const DynamicAdminDashboard = withDynamicImport(
  () => import('../Admin/AdminDashboard'),
  { ssr: false }
);

export const DynamicCreatePost = withDynamicImport(
  () => import('../Admin/CreatePost'),
  { ssr: false }
);

// Intersection Observer based lazy loading
export const LazyComponent = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = <LoadingFallback />
}) => {
  const [ref, inView] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView ? children : fallback}
    </div>
  );
};

// Hook for intersection observer
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, inView];
};
