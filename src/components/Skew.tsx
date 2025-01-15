import { motion } from "framer-motion";
import { useState } from "react";


const Skew = () => {
    const [isSkewed, setIsSkewed] = useState(true);

  return (
    <motion.div 
    onClick={() => setIsSkewed(!isSkewed)}
    className="bg-yellow-500 w-40 h-20"
    animate={{skewX: isSkewed ? 20 : 0}}
    transition={{duration: 0.5}}
    />

    
  )
}

export default Skew