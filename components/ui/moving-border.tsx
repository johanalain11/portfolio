"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-fit overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl px-4",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    resizeObserver.observe(svg);

    return () => resizeObserver.disconnect();
  }, []);

  const getRadius = (value: string | undefined, dimension: number) => {
    const parsedValue = Number.parseFloat(value ?? "0");
    const radius = value?.trim().endsWith("%")
      ? (dimension * parsedValue) / 100
      : parsedValue;
    return Math.min(dimension / 2, radius);
  };
  const rxPixels = getRadius(rx, size.width);
  const ryPixels = getRadius(ry, size.height);
  const path =
    size.width > 0 && size.height > 0
      ? [
          `M ${rxPixels} 0`,
          `H ${size.width - rxPixels}`,
          `A ${rxPixels} ${ryPixels} 0 0 1 ${size.width} ${ryPixels}`,
          `V ${size.height - ryPixels}`,
          `A ${rxPixels} ${ryPixels} 0 0 1 ${size.width - rxPixels} ${size.height}`,
          `H ${rxPixels}`,
          `A ${rxPixels} ${ryPixels} 0 0 1 0 ${size.height - ryPixels}`,
          `V ${ryPixels}`,
          `A ${rxPixels} ${ryPixels} 0 0 1 ${rxPixels} 0`,
          "Z",
        ].join(" ")
      : "";

  useAnimationFrame((time) => {
    const pathElement = pathRef.current;
    if (!path || !pathElement || pathElement.getAttribute("d") !== path) return;

    const length = pathElement.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      const point = pathElement.getPointAtLength(
        (time * pxPerMillisecond) % length,
      );
      x.set(point.x);
      y.set(point.y);
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <path
          d={path}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
