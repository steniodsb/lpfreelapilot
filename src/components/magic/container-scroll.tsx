"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = (): [number, number] =>
    isMobile ? [0.7, 0.9] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[56rem] items-center justify-center p-2 md:h-[74rem] md:p-20"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-32"
        style={{ perspective: "1000px" }}
      >
        <CardHeader translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const CardHeader = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="mx-auto max-w-5xl text-center"
  >
    {titleComponent}
  </motion.div>
);

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000, 0 9px 20px rgba(108,70,200,0.12), 0 37px 37px rgba(108,70,200,0.10), 0 84px 50px rgba(108,70,200,0.06), 0 149px 60px rgba(108,70,200,0.02)",
    }}
    className="mx-auto mt-10 h-[30rem] w-full max-w-5xl rounded-[30px] border border-stroke bg-white p-2 shadow-2xl md:mt-16 md:h-[40rem] md:p-4"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl border border-stroke bg-bg-soft md:rounded-2xl">
      {children}
    </div>
  </motion.div>
);
