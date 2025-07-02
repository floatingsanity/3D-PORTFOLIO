"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const DEFAULT_GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className = "", config = DEFAULT_GLOBE_CONFIG }) {
  const canvasRef = useRef(null);
  const pointerStart = useRef(null);
  const movement = useRef(0);
  const width = useRef(0);
  let phi = 0;

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const setCursor = (state) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = state ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerStart.current !== null) {
      const delta = clientX - pointerStart.current;
      movement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let resizeTimeout;

    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (canvasRef.current) {
          width.current = canvasRef.current.offsetWidth;
        }
      }, 100);
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width.current * 2,
      height: width.current * 2,
      onRender: (state) => {
        if (!pointerStart.current) phi += 0.0015; // slower idle rotation
        state.phi = phi + rs.get();
        state.width = width.current * 2;
        state.height = width.current * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        onPointerDown={(e) => {
          pointerStart.current = e.clientX;
          setCursor(true);
        }}
        onPointerUp={() => {
          pointerStart.current = null;
          setCursor(false);
        }}
        onPointerOut={() => {
          pointerStart.current = null;
          setCursor(false);
        }}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}