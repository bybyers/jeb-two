"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";

export default function Template({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
