import { motion } from "framer-motion";

const SequenceTransformation = () => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <motion.div
        className="bg-teal-500 h-20 w-20 m-2"
        animate={{x: 100}}
        key={index}
        transition={{duration: 0.5, delay: index * 0.5}}
        />
      ))}
    </div>
  );
};

export default SequenceTransformation;
