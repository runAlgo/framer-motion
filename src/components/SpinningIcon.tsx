import { motion } from "framer-motion";

const SpinningIcon = () => {
  return (
    <motion.img
      className="h-28 w-20"
      alt="Image"
      src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=400"
      animate={{rotate: 360}}
      transition={{duration: 2, repeat: Infinity, ease: "linear"}}
    >
    </motion.img>
  );
};

export default SpinningIcon;
