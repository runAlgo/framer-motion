import { motion } from "framer-motion";


const Bounce = () => {
  return (
    <div className="bg-slate-500 flex relative items-center justify-center w-96 h-96 rounded-xl">
    <motion.div
    animate={{y: [0, -100, 0]}}
    className="box absolute"
    transition={{duration: 1, repeat: Infinity, ease: "easeInOut"}}
    ></motion.div>
    </div>
  )
}

export default Bounce