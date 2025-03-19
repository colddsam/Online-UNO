import { GameBoard } from "@/components/game-board"
import { GameChat } from "@/components/game-chat"

export default function PlayPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Game Room</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <GameBoard />
        </div>
        <div className="lg:col-span-1">
          <GameChat />
        </div>
      </div>
    </div>
  )
}

