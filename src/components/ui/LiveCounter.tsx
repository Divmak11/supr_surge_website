"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  from: number;
  to: number;
  suffix?: string;
};

const LiveCounter = ({ from, to, suffix }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const node = ref.current;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        node.textContent = value.toFixed(1) + (suffix || "");
      },
    });

    return () => controls.stop();
  }, [from, to, inView, suffix]);

  return <span ref={ref} />;
};

export default LiveCounter; 