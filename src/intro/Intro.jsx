

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1117]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{
              scale: 0,
              rotate: -180,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            className="text-8xl font-bold text-emerald-400"
            style={{
              textShadow: "0 0 30px rgba(16,185,129,.6)",
            }}
          >
            {"</>"}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}