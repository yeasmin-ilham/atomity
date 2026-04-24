"use client";

import { motion } from "framer-motion";
import { useApiData } from "../hooks/useApiData";

export default function HoverCard() {
  const { data, loading } = useApiData("https://dummyjson.com/products/1");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute -translate-x-full -translate-y-full -ml-20 -mt-20
                bg-gray-50 rounded-md shadow-2xl p-4  w-30 sm:40 md:w-60 lg:w-70 z-50 backdrop-blur-2xl"
    >
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-gray-500">CPU Usage</p>
          <p className="text-lg font-semibold">{data?.stock}</p>

          <p className="text-sm text-gray-500">Price</p>
          <p className="text-lg font-semibold">${data?.price}</p>

          <p className="text-sm text-green-500 font-bold">
            Savings: ${(data?.price * 0.2).toFixed(2)}
          </p>
        </div>
      )}
    </motion.div>
  );
}