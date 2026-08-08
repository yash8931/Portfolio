import { motion } from "framer-motion";

function Floating({
  children,
  duration = 4,
  distance = 10,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Floating;