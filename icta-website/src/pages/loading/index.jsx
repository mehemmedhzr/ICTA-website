import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: [0, 1, 0], // görünür və sonra yenidən yox olur
    y: [20, 0, 20],
    transition: {
      delay: i * 0.4,
      duration: 3,           // hər sətirin ümumi müddəti
      ease: "easeInOut",
      repeat: Infinity,      // sonsuz təkrar
      repeatDelay: 1,        // tam dövr bitəndən sonra 2 saniyə dayanma
    },
  }),
};

const LoadingPage = () => {
  const lines = [
    "INFORMASIYA",
    "KOMMUNIKASIYA",
    "TEXNOLOGIYALARI AGENTLİYİ",
  ];

  return (
    <div className="bg-[#2D8CFF] fixed inset-0 flex gap-3 justify-center items-center">
      <div>
        <img src={"/svg/loadinglogo.svg"} alt="" className="size-20" />
      </div>
      <div className="bg-white w-0.5 h-20"></div>
      <div className="font-medium text-white">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
