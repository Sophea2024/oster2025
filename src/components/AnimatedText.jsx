import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <motion.h1
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      <span style={{ color: "darkred" }}>Hurra!</span>
      <span style={{ color: "blue" }}> Der</span>
      <span style={{ color: "gold" }}> Osterhase</span>
      <span style={{ color: "green" }}> ist</span>
      <span style={{ color: "purple" }}> da!!!</span>
    </motion.h1>
  );
};

export default AnimatedText;
