"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Copy, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CreateRoomPage() {
  const router = useRouter()
  const [roomName, setRoomName] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [maxPlayers, setMaxPlayers] = useState(4)
  const [gameMode, setGameMode] = useState("classic")
  const [roomCode, setRoomCode] = useState("UNO-1234")
  const [isRoomCreated, setIsRoomCreated] = useState(false)

  const handleCreateRoom = () => {
    // In a real app, this would create a room on the server
    setIsRoomCreated(true)
  }

  const handleStartGame = () => {
    router.push("/play")
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode)
    // Would show a toast in a real app
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create Game Room</h1>

      <div className="max-w-2xl mx-auto">
        {!isRoomCreated ? (
          <Card>
            <CardHeader>
              <CardTitle>Room Settings</CardTitle>
              <CardDescription>Configure your UNO game room</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="room-name">Room Name</Label>
                <Input
                  id="room-name"
                  placeholder="My UNO Room"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="private-room">Private Room</Label>
                  <p className="text-sm text-muted-foreground">Only players with the room code can join</p>
                </div>
                <Switch id="private-room" checked={isPrivate} onCheckedChange={setIsPrivate} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="max-players">Max Players: {maxPlayers}</Label>
                </div>
                <Slider
                  id="max-players"
                  min={2}
                  max={8}
                  step={1}
                  value={[maxPlayers]}
                  onValueChange={(value) => setMaxPlayers(value[0])}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="game-mode">Game Mode</Label>
                <Select value={gameMode} onValueChange={setGameMode}>
                  <SelectTrigger id="game-mode">
                    <SelectValue placeholder="Select a game mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="quick">Quick Play</SelectItem>
                    <SelectItem value="teams">Teams</SelectItem>
                    <SelectItem value="custom">Custom Rules</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCreateRoom} className="w-full">
                Create Room
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Room Created!</CardTitle>
              <CardDescription>Share this code with your friends to join</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <div className="text-xl font-mono">{roomCode}</div>
                <Button variant="ghost" size="icon" onClick={handleCopyCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Players (1/{maxPlayers})</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Waiting for players...</span>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary mr-2"></div>
                    <div>You (Host)</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button onClick={handleStartGame} className="w-full">
                Start Game
              </Button>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

