"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type CardColor = "red" | "blue" | "green" | "yellow" | "black"
type CardValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "skip"
  | "reverse"
  | "draw2"
  | "wild"
  | "wilddraw4"

interface UnoCardProps {
  color: CardColor
  value: CardValue
  isPlayable?: boolean
  onClick?: () => void
  className?: string
}

export function UnoCard({ color, value, isPlayable = false, onClick, className }: UnoCardProps) {
  const colorClasses = {
    red: "bg-gradient-to-br from-red-500 to-red-700 border-red-300",
    blue: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-300",
    green: "bg-gradient-to-br from-green-500 to-green-700 border-green-300",
    yellow: "bg-gradient-to-br from-yellow-500 to-yellow-700 border-yellow-300",
    black: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-500",
  }

  const getSymbol = () => {
    switch (value) {
      case "skip":
        return "⊘"
      case "reverse":
        return "↻"
      case "draw2":
        return "+2"
      case "wild":
        return "★"
      case "wilddraw4":
        return "+4"
      default:
        return value
    }
  }

  return (
    <motion.div
      whileHover={isPlayable ? { y: -10, scale: 1.05 } : {}}
      className={cn(
        "w-20 h-28 rounded-xl border-2 flex items-center justify-center text-white font-bold shadow-lg cursor-default",
        isPlayable && "cursor-pointer",
        colorClasses[color],
        className,
      )}
      onClick={isPlayable ? onClick : undefined}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-1 left-1 text-sm">{getSymbol()}</div>
        <div className="text-3xl font-bold">{getSymbol()}</div>
        <div className="absolute bottom-1 right-1 text-sm transform rotate-180">{getSymbol()}</div>

        {(value === "wild" || value === "wilddraw4") && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <div className="w-full h-1/4 bg-red-500"></div>
              <div className="w-full h-1/4 bg-blue-500"></div>
              <div className="w-full h-1/4 bg-yellow-500"></div>
              <div className="w-full h-1/4 bg-green-500"></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

