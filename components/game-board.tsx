"use client"

import { useState } from "react"
import { UnoCard } from "@/components/uno-card"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import { PlayerHand } from "@/components/player-hand"
import { PlayerAvatar } from "@/components/player-avatar"
import { GameControls } from "@/components/game-controls"

// Mock data for demonstration
const mockPlayers = [
  { id: 1, name: "You", cards: 7, isCurrentTurn: true, avatar: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Player 2", cards: 4, isCurrentTurn: false, avatar: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Player 3", cards: 12, isCurrentTurn: false, avatar: "/placeholder.svg?height=50&width=50" },
  { id: 4, name: "Player 4", cards: 2, isCurrentTurn: false, avatar: "/placeholder.svg?height=50&width=50" },
]

const mockHand = [
  { color: "red" as const, value: "7" as const },
  { color: "blue" as const, value: "4" as const },
  { color: "green" as const, value: "skip" as const },
  { color: "yellow" as const, value: "reverse" as const },
  { color: "red" as const, value: "draw2" as const },
  { color: "black" as const, value: "wild" as const },
  { color: "black" as const, value: "wilddraw4" as const },
]

export function GameBoard() {
  const [isMicOn, setIsMicOn] = useState(false)
  const [isVolumeOn, setIsVolumeOn] = useState(true)
  const [currentCard, setCurrentCard] = useState({ color: "green" as const, value: "7" as const })

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-xl shadow-xl overflow-hidden">
      {/* Game info bar */}
      <div className="absolute top-0 left-0 right-0 bg-black/30 text-white p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-white" onClick={() => setIsMicOn(!isMicOn)}>
            {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-white" onClick={() => setIsVolumeOn(!isVolumeOn)}>
            {isVolumeOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        </div>
        <div className="text-sm font-medium">Room: #12345</div>
      </div>

      {/* Other players */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <PlayerAvatar player={mockPlayers[2]} position="top" />
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <PlayerAvatar player={mockPlayers[1]} position="left" />
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <PlayerAvatar player={mockPlayers[3]} position="right" />
      </div>

      {/* Center game area */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-8">
        {/* Draw pile */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-28 bg-blue-600 rounded-xl border-2 border-blue-300 shadow-lg transform rotate-3"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-28 bg-blue-600 rounded-xl border-2 border-blue-300 shadow-lg transform -rotate-3"></div>
          </div>
          <div className="relative w-20 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl border-2 border-blue-300 shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <div className="text-blue-700 font-bold text-xl">UNO</div>
            </div>
          </div>
        </div>

        {/* Current card */}
        <UnoCard color={currentCard.color} value={currentCard.value} />
      </div>

      {/* Player's hand */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <PlayerHand cards={mockHand} onPlayCard={(card) => setCurrentCard(card)} />
      </div>

      {/* Game controls */}
      <div className="absolute bottom-0 left-0 right-0">
        <GameControls />
      </div>
    </div>
  )
}

