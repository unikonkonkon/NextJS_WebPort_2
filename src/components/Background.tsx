'use client';

import { useEffect, useState, memo, useMemo } from 'react';

interface Star {
  top: number;
  left: number;
  right: number;
  delay: number;
}

function Background() {
  const [stars, setStars] = useState<Star[]>([]);

  // Memoize star generation to prevent recalculation
  const generateStars = useMemo(() => {
    const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array(4).fill(0).map(() => ({
      top: generateRandom(0, -800),
      left: generateRandom(0, 300),
      right: generateRandom(0, 1100),
      delay: generateRandom(3, 0.8),
    }));
  }, []);

  useEffect(() => {
    // Generate stars only on the client side
    setStars(generateStars);
  }, [generateStars]);

  const ShootingStar = memo(({ delay, top, left, right }: Star) => (
    <div
      className="shooting-star hidden sm:block"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        animationDelay: `${delay}s`,
      }}
    />
  ));

  ShootingStar.displayName = 'ShootingStar';

  return (
    <div className="background">
      <div className="heading" />
      {stars.map((star, i) => (
        <ShootingStar key={i} {...star} />
      ))}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Background); 