import React, { useState, useEffect } from 'react';

function FPS() {
  const [fps, setFps] = useState(0);
  let frameCount = 0;
  let lastUpdateTime = Date.now();
  const fpsInterval = 500; // Calculate FPS every 1 second

  useEffect(() => {
    const loop = () => {
      const now = Date.now();
      const elapsed = now - lastUpdateTime;

      if (elapsed > fpsInterval) {
        setFps((frameCount / elapsed) * 1000);
        frameCount = 0;
        lastUpdateTime = now;
      }

      frameCount++;
      requestAnimationFrame(loop);
    };

    loop();

    // Cleanup function
    return () => cancelAnimationFrame(loop);
  }, []);

  return <div>FPS: {Math.round(fps)}</div>;
}

export default FPS;