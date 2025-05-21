// components/Common/AnimatedCounter.jsx
import { useState, useEffect } from "react";

export default function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf;
    const isMoney = typeof end === 'string' && end.includes('M');
    const target = isMoney ? 250 : parseInt(end.toString().replace(/\D/g, ''));
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  const plus = end.toString().includes('+') ? '+' : '';

  if (typeof end === 'string' && end.includes('M')) {
    return <h2>{`$${count}M${plus}`}</h2>;
  }

  return <h2>{prefix}{count}{suffix || plus}</h2>;
}
