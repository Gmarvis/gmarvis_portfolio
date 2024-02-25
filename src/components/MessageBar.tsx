import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { motion } from "framer-motion";

type MessageTypes = {
  status: Boolean;
  text: string;
};

const MessageBar = ({ status, text }: MessageTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className={`border ${
        status
          ? "border-green-600 text-green-600"
          : "text-red-600 border-red-600"
      }  p-2 rounded-md`}
    >
      <p className="flex gap-5 items-center">
        {status ? (
          <FaCheckCircle size={30} className="text-green-600" />
        ) : (
          <BiSolidError size={30} className="text-red-600" />
        )}

        <span className="text-xs">{text}</span>
      </p>
    </motion.div>
  );
};

export default MessageBar;
