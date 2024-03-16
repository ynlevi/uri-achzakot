"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function ParallaxImage({
  children,
  className,
  effectStartAt,
  yStartAt,
  yEndAt,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [effectStartAt ? effectStartAt : 0, 1],
    [yStartAt ? yStartAt : 0, yEndAt]
  );
  return (
    <motion.div className={className} style={{ y }} ref={ref}>
      {children}
    </motion.div>
  );
}
