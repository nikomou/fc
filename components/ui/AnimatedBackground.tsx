"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

type ColorTheme = "blue" | "pink" | "yellow" | "green";

interface AnimatedBackgroundProps {
  theme?: ColorTheme;
}

const colorThemes: Record<ColorTheme, { gradients: string[][]; bg: string; accent: string }> = {
  blue: {
    bg: "#151515",
    accent: "#27547d",
    gradients: [
      ["#181a1d", "#1b1f24"],
      ["#1d242d", "#1f2935"],
      ["#212e3d", "#233346"],
      ["#24384f", "#253e58"],
      ["#264361", "#27496a"],
      ["#274e73", "#27547d"],
      ["#27547d", "#27547d"],
    ],
  },
  pink: {
    bg: "#151515",
    accent: "#7d2754",
    gradients: [
      ["#1d181a", "#241b1f"],
      ["#2d1d24", "#351f29"],
      ["#3d212e", "#462333"],
      ["#4f2438", "#58253e"],
      ["#612643", "#6a2749"],
      ["#73274e", "#7d2754"],
      ["#7d2754", "#7d2754"],
    ],
  },
  yellow: {
    bg: "#151515",
    accent: "#7d6e27",
    gradients: [
      ["#1d1c18", "#24221b"],
      ["#2d2a1d", "#35311f"],
      ["#3d3821", "#463e23"],
      ["#4f4624", "#584e25"],
      ["#615626", "#6a5e27"],
      ["#736627", "#7d6e27"],
      ["#7d6e27", "#7d6e27"],
    ],
  },
  green: {
    bg: "#151515",
    accent: "#277d54",
    gradients: [
      ["#181d1a", "#1b241f"],
      ["#1d2d24", "#1f3529"],
      ["#213d2e", "#234633"],
      ["#244f38", "#25583e"],
      ["#266143", "#276a49"],
      ["#27734e", "#277d54"],
      ["#277d54", "#277d54"],
    ],
  },
};

// Path data for the blob shapes
const topRightPaths = [
  "M0 247.5C-28.9 249.5 -57.8 251.4 -76.5 235.4C-95.2 219.3 -103.8 185.3 -121.1 166.7C-138.4 148.1 -164.4 145 -180.4 131.1C-196.5 117.2 -202.6 92.6 -212.1 68.9C-221.6 45.3 -234.6 22.6 -247.5 0L0 0Z",
  "M0 212.1C-24.8 213.8 -49.5 215.5 -65.6 201.8C-81.6 188 -89 158.8 -103.8 142.8C-118.6 126.9 -140.9 124.2 -154.6 112.4C-168.4 100.5 -173.6 79.3 -181.8 59.1C-190 38.8 -201 19.4 -212.1 0L0 0Z",
  "M0 176.8C-20.6 178.2 -41.3 179.6 -54.6 168.1C-68 156.7 -74.1 132.3 -86.5 119C-98.8 105.8 -117.4 103.5 -128.9 93.6C-140.3 83.7 -144.7 66.1 -151.5 49.2C-158.3 32.3 -167.5 16.2 -176.8 0L0 0Z",
  "M0 141.4C-16.5 142.6 -33 143.7 -43.7 134.5C-54.4 125.3 -59.3 105.9 -69.2 95.2C-79.1 84.6 -93.9 82.8 -103.1 74.9C-112.3 67 -115.7 52.9 -121.2 39.4C-126.6 25.9 -134 12.9 -141.4 0L0 0Z",
  "M0 106.1C-12.4 106.9 -24.8 107.8 -32.8 100.9C-40.8 94 -44.5 79.4 -51.9 71.4C-59.3 63.5 -70.4 62.1 -77.3 56.2C-84.2 50.2 -86.8 39.7 -90.9 29.5C-95 19.4 -100.5 9.7 -106.1 0L0 0Z",
  "M0 70.7C-8.3 71.3 -16.5 71.8 -21.9 67.3C-27.2 62.7 -29.7 52.9 -34.6 47.6C-39.5 42.3 -47 41.4 -51.5 37.5C-56.1 33.5 -57.9 26.4 -60.6 19.7C-63.3 12.9 -67 6.5 -70.7 0L0 0Z",
  "M0 35.4C-4.1 35.6 -8.3 35.9 -10.9 33.6C-13.6 31.3 -14.8 26.5 -17.3 23.8C-19.8 21.2 -23.5 20.7 -25.8 18.7C-28.1 16.7 -28.9 13.2 -30.3 9.8C-31.7 6.5 -33.5 3.2 -35.4 0L0 0Z",
];

const bottomLeftPaths = [
  "M0 -247.5C27 -246.7 54.1 -245.8 76.5 -235.4C98.9 -225 116.7 -204.9 137 -188.5C157.2 -172.1 179.7 -159.3 192.5 -139.9C205.3 -120.5 208.4 -94.6 215.9 -70.1C223.4 -45.7 235.5 -22.9 247.5 0L0 0Z",
  "M0 -212.1C23.2 -211.4 46.3 -210.7 65.6 -201.8C84.8 -192.8 100.1 -175.6 117.4 -161.6C134.7 -147.5 154.1 -136.5 165 -119.9C176 -103.3 178.6 -81 185 -60.1C191.5 -39.2 201.8 -19.6 212.1 0L0 0Z",
  "M0 -176.8C19.3 -176.2 38.6 -175.6 54.6 -168.1C70.7 -160.7 83.4 -146.4 97.8 -134.6C112.3 -122.9 128.4 -113.8 137.5 -99.9C146.7 -86.1 148.8 -67.5 154.2 -50.1C159.6 -32.7 168.2 -16.3 176.8 0L0 0Z",
  "M0 -141.4C15.4 -140.9 30.9 -140.5 43.7 -134.5C56.5 -128.5 66.7 -117.1 78.3 -107.7C89.8 -98.3 102.7 -91 110 -79.9C117.3 -68.9 119.1 -54 123.4 -40.1C127.7 -26.1 134.5 -13.1 141.4 0L0 0Z",
  "M0 -106.1C11.6 -105.7 23.2 -105.4 32.8 -100.9C42.4 -96.4 50 -87.8 58.7 -80.8C67.4 -73.7 77 -68.3 82.5 -60C88 -51.6 89.3 -40.5 92.5 -30.1C95.8 -19.6 100.9 -9.8 106.1 0L0 0Z",
  "M0 -70.7C7.7 -70.5 15.4 -70.2 21.9 -67.3C28.3 -64.3 33.4 -58.5 39.1 -53.9C44.9 -49.2 51.4 -45.5 55 -40C58.7 -34.4 59.5 -27 61.7 -20C63.8 -13.1 67.3 -6.5 70.7 0L0 0Z",
  "M0 -35.4C3.9 -35.2 7.7 -35.1 10.9 -33.6C14.1 -32.1 16.7 -29.3 19.6 -26.9C22.5 -24.6 25.7 -22.8 27.5 -20C29.3 -17.2 29.8 -13.5 30.8 -10C31.9 -6.5 33.6 -3.3 35.4 0L0 0Z",
];

// Generate random particles
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.4 + 0.2,
  }));
}

// Generate unique animation parameters for each layer
function generateLayerAnimations(layerCount: number) {
  return Array.from({ length: layerCount }, (_, i) => ({
    driftX: (Math.random() - 0.5) * 30,
    driftY: (Math.random() - 0.5) * 30,
    driftDuration: 12 + Math.random() * 10,
    scalePulse: 0.02 + Math.random() * 0.03,
    scaleDuration: 15 + i * 3 + Math.random() * 5,
    mouseMultiplier: 0.5 + (i / layerCount) * 1.5,
    rotationAmount: (Math.random() - 0.5) * 4,
    rotationDuration: 20 + Math.random() * 15,
  }));
}

const themeOrder: ColorTheme[] = ["blue", "pink", "yellow", "green"];

// Individual blob ring that animates independently
function BlobRing({
  path,
  gradientId,
  layerIndex,
  animation,
  position,
}: {
  path: string;
  gradientId: string;
  layerIndex: number;
  animation: ReturnType<typeof generateLayerAnimations>[0];
  position: "top-right" | "bottom-left";
}) {
  const transformOrigin = position === "top-right" ? "100% 0%" : "0% 100%";

  const controls = useAnimation();

  useEffect(() => {
    const run = async () => {
      await controls.start({
        opacity: 0.85,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 0.7, delay: layerIndex * 0.18, ease: "easeOut" },
      });
      controls.start({
        scale: [1, 1 + animation.scalePulse, 1, 1 - animation.scalePulse * 0.5, 1],
        opacity: [0.85, 1, 0.9, 0.95, 0.85],
        x: [0, animation.driftX, animation.driftX * 0.3, -animation.driftX * 0.5, 0],
        y: [0, animation.driftY * 0.5, animation.driftY, animation.driftY * 0.2, 0],
        rotate: [0, animation.rotationAmount, 0, -animation.rotationAmount * 0.5, 0],
        transition: {
          duration: animation.driftDuration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        },
      });
    };
    run();
  }, []);

  return (
    <motion.path
      d={path}
      fill={`url(#${gradientId})`}
      initial={{ scale: 1.4, opacity: 0, x: 0, y: 0, rotate: 0 }}
      animate={controls}
      style={{
        transformOrigin,
        filter: `drop-shadow(0 0 ${20 + layerIndex * 5}px rgba(0,0,0,0.1))`,
      }}
    />
  );
}

// Single blob layer - colors transition smoothly via CSS
function BlobLayer({
  theme,
  mousePos,
  position,
  layerAnimations,
}: {
  theme: ColorTheme;
  mousePos: { x: number; y: number };
  position: "top-right" | "bottom-left";
  layerAnimations: ReturnType<typeof generateLayerAnimations>;
}) {
  const colors = colorThemes[theme];
  const paths = position === "top-right" ? topRightPaths : bottomLeftPaths;
  const gradientPrefix = position === "top-right" ? "tr" : "bl";

  const positionClasses = position === "top-right"
    ? "absolute -top-10 -right-10 w-[70%] h-[90%]"
    : "absolute -bottom-10 -left-10 w-[70%] h-[90%]";

  const svgClasses = position === "top-right"
    ? "absolute top-0 right-0 w-full h-full"
    : "absolute bottom-0 left-0 w-full h-full";

  const baseMouseX = position === "top-right" ? -mousePos.x * 8 : mousePos.x * 8;
  const baseMouseY = position === "top-right" ? -mousePos.y * 8 : mousePos.y * 8;

  const gTransform = position === "top-right" ? "translate(300, 0)" : "translate(0, 300)";
  const preserveAspect = position === "top-right" ? "xMaxYMin meet" : "xMinYMax meet";

  return (
    <div
      className={positionClasses}
      style={{
        transform: `translate(${baseMouseX}px, ${baseMouseY}px)`,
      }}
    >
      <svg
        className={svgClasses}
        viewBox="0 0 300 300"
        preserveAspectRatio={preserveAspect}
      >
        <defs>
          {colors.gradients.map((gradient, i) => (
            <linearGradient
              key={`grad-${gradientPrefix}-${i}`}
              id={`grad-${gradientPrefix}-${i}`}
              x1={position === "top-right" ? "50%" : "0%"}
              y1="0%"
              x2={position === "top-right" ? "100%" : "50%"}
              y2="100%"
            >
              <stop
                offset="10%"
                style={{
                  stopColor: position === "top-right" ? gradient[0] : gradient[1],
                  transition: "stop-color 2s ease-in-out",
                }}
              />
              <stop
                offset="90%"
                style={{
                  stopColor: position === "top-right" ? gradient[1] : gradient[0],
                  transition: "stop-color 2s ease-in-out",
                }}
              />
            </linearGradient>
          ))}
        </defs>
        <g transform={gTransform}>
          {paths.map((path, i) => (
            <BlobRing
              key={`${gradientPrefix}-${i}`}
              path={path}
              gradientId={`grad-${gradientPrefix}-${i}`}
              layerIndex={i}
              animation={layerAnimations[i]}
              position={position}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function AnimatedBackground({ theme = "blue" }: AnimatedBackgroundProps) {
  const particles = useMemo(() => generateParticles(20), []);

  const topRightAnimations = useMemo(() => generateLayerAnimations(topRightPaths.length), []);
  const bottomLeftAnimations = useMemo(() => generateLayerAnimations(bottomLeftPaths.length), []);

  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentThemeIndex, setCurrentThemeIndex] = useState(themeOrder.indexOf(theme));

  const currentTheme = themeOrder[currentThemeIndex];
  const colors = colorThemes[currentTheme];

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Cycle through colors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((prev) => (prev + 1) % themeOrder.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#151515" }}
    >
      {/* Floating particles with smooth color transition */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: colors.accent,
            opacity: particle.opacity,
            transform: `translate(${mousePos.x * 20 * (0.5 + particle.size / 10)}px, ${mousePos.y * 20 * (0.5 + particle.size / 10)}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${colors.accent}`,
            transition: "background-color 2s ease-in-out, box-shadow 2s ease-in-out",
          }}
        />
      ))}

      {/* Single blob layer per position - colors transition smoothly */}
      <BlobLayer
        theme={currentTheme}
        mousePos={mousePos}
        position="bottom-left"
        layerAnimations={bottomLeftAnimations}
      />

      <BlobLayer
        theme={currentTheme}
        mousePos={mousePos}
        position="top-right"
        layerAnimations={topRightAnimations}
      />
    </div>
  );
}
