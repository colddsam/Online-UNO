"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Player {
  id: number
  name: string
  cards: number
  isCurrentTurn: boolean
  avatar: string
}

interface PlayerAvatarProps {
  player: Player
  position: "top" | "left" | "right"
}

export function PlayerAvatar({ player, position }: PlayerAvatarProps) {
  const positionClasses = {
    top: "flex-col items-center",
    left: "flex-row items-center",
    right: "flex-row-reverse items-center",
  }

  const cardPositionClasses = {
    top: "mt-2 flex-row",
    left: "ml-2",
    right: "mr-2",
  }

  return (
    <div className={cn("flex", positionClasses[position])}>
      <motion.div
        className={cn("relative rounded-full p-1", player.isCurrentTurn ? "bg-yellow-400" : "bg-gray-700")}
        animate={player.isCurrentTurn ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <Image src={player.avatar || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
        </div>
      </motion.div>

      <div className={cn("flex", cardPositionClasses[position])}>
        <div className="text-center">
          <p className="text-white text-sm font-medium">{player.name}</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-4 h-6 bg-blue-600 rounded-sm"></div>
            <p className="text-white text-xs">×{player.cards}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

