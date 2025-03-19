"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UnoCard } from "@/components/uno-card"

export default function GamePreview() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-3xl h-64 relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 shadow-xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Center pile */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <UnoCard value="7" color="green" />
          </div>

          {/* Player hands preview */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
              >
                <UnoCard value="draw2" color="red" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rotate-180 flex space-x-1">
            <div className="w-10 h-14 bg-white rounded-md shadow-md transform -rotate-6 bg-gradient-to-br from-blue-600 to-blue-700"></div>
            <div className="w-10 h-14 bg-white rounded-md shadow-md bg-gradient-to-br from-blue-600 to-blue-700"></div>
            <div className="w-10 h-14 bg-white rounded-md shadow-md transform rotate-6 bg-gradient-to-br from-blue-600 to-blue-700"></div>
          </div>

          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 rotate-90 flex space-x-1">
            <div className="w-10 h-14 bg-white rounded-md shadow-md transform -rotate-6 bg-gradient-to-br from-blue-600 to-blue-700"></div>
            <div className="w-10 h-14 bg-white rounded-md shadow-md bg-gradient-to-br from-blue-600 to-blue-700"></div>
          </div>

          <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 -rotate-90 flex space-x-1">
            <div className="w-10 h-14 bg-white rounded-md shadow-md transform -rotate-6 bg-gradient-to-br from-blue-600 to-blue-700"></div>
            <div className="w-10 h-14 bg-white rounded-md shadow-md bg-gradient-to-br from-blue-600 to-blue-700"></div>
            <div className="w-10 h-14 bg-white rounded-md shadow-md transform rotate-6 bg-gradient-to-br from-blue-600 to-blue-700"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 text-xs text-white/70">Live preview of gameplay</div>
    </div>
  )
}

