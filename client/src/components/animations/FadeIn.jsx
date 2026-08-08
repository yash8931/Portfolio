import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function FadeIn({
  children,
  delay = 0,
  duration,
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        ...fadeInVariants,
        visible: {
          ...fadeInVariants.visible,
          transition: {
            duration: duration ?? 0.6,
            delay,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;