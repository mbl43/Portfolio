import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120;

export default function ScrollyCanvas({ heroRef }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Parallel image preload
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;

    const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
      return new Promise((resolve) => {
        const img = new Image();
        const padded = i.toString().padStart(3, '0');
        img.src = `/public/sequence/frame_${padded}_delay-0.067s.webp`;
        const done = () => {
          if (cancelled) return;
          loadedCount++;
          setImagesLoaded(loadedCount);
          resolve(img);
        };
        img.onload = done;
        img.onerror = done;
        imagesRef.current[i] = img;
      });
    });

    Promise.all(promises);
    return () => {
      cancelled = true;
    };
  }, []);

  const drawImage = (index) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (parent) {
      if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    }

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    if (imagesLoaded > 0) drawImage(Math.round(frameIndex.get()));
  }, [imagesLoaded, frameIndex]);

  useEffect(() => {
    const handleResize = () => drawImage(Math.round(frameIndex.get()));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    requestAnimationFrame(() => drawImage(Math.round(latest)));
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      {imagesLoaded < FRAME_COUNT && (
        <div className="absolute inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center text-white text-sm font-mono tracking-widest">
          LOADING {Math.floor((imagesLoaded / FRAME_COUNT) * 100)}%
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}