import { useState } from 'react';

export default function useAnimatedElement(timeout: number) {
  const [animationActive, setAnimationActive] = useState(false);

  const startAnimation = () => {
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, timeout);
  };

  return {
    animationActive,
    startAnimation,
  };
}
