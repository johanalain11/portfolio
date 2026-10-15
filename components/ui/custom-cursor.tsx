"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursor1Ref = useRef<HTMLDivElement | null>(null);
  const cursor2Ref = useRef<HTMLDivElement | null>(null);
  const cursor2PositionRef = useRef<{ x: number; y: number } | null>(null);
  const [isBig, setIsBig] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    let targetPosition = { x: 0, y: 0 };
    let animationFrame: number | null = null;

    const animateSecondCursor = () => {
      const cursor = cursor2Ref.current;
      const position = cursor2PositionRef.current;

      if (!cursor || !position) {
        animationFrame = null;
        return;
      }

      const deltaX = targetPosition.x - position.x;
      const deltaY = targetPosition.y - position.y;
      position.x += deltaX * 0.2;
      position.y += deltaY * 0.2;

      if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
        position.x = targetPosition.x;
        position.y = targetPosition.y;
        animationFrame = null;
      } else {
        animationFrame = window.requestAnimationFrame(animateSecondCursor);
      }

      cursor.style.left = `${position.x}px`;
      cursor.style.top = `${position.y}px`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetPosition = { x: event.clientX, y: event.clientY };
      setIsVisible(true);

      if (cursor1Ref.current) {
        cursor1Ref.current.style.left = `${event.clientX}px`;
        cursor1Ref.current.style.top = `${event.clientY}px`;
      }

      if (!cursor2PositionRef.current) {
        cursor2PositionRef.current = { ...targetPosition };
        if (cursor2Ref.current) {
          cursor2Ref.current.style.left = `${event.clientX}px`;
          cursor2Ref.current.style.top = `${event.clientY}px`;
        }
      } else if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(animateSecondCursor);
      }
    };

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof Element
        ? target.closest('a, button, [role="button"], input, textarea, select, label')
        : null;

    const handlePointerOver = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && isInteractiveTarget(event.target)) {
        setIsBig(true);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const target = isInteractiveTarget(event.target);
      const relatedTarget = isInteractiveTarget(event.relatedTarget);

      if (target && target !== relatedTarget) {
        setIsBig(false);
      }
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setIsBig(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.body.classList.remove("custom-cursor-active");
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const cursorClasses = `custom-cursor ${isVisible ? "custom-cursor--visible" : ""}`;

  return (
    <>
      <div
        ref={cursor1Ref}
        className={`${cursorClasses} custom-cursor--dot ${isBig ? "custom-cursor--big" : ""}`}
      />
      <div
        ref={cursor2Ref}
        className={`${cursorClasses} custom-cursor--ring ${isBig ? "custom-cursor--big" : ""}`}
      />
    </>
  );
}
