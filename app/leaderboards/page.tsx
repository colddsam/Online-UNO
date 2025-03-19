"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award } from "lucide-react"

// Mock data for demonstration
const mockLeaderboards = {
  global: [
    { rank: 1, name: "UnoMaster99", wins: 342, games: 512, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "CardShark", wins: 301, games: 450, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "WildDrawKing", wins: 287, games: 430, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "SkipMaster", wins: 265, games: 410, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 5, name: "ReverseQueen", wins: 254, games: 390, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 6, name: "DrawTwoChamp", wins: 243, games: 380, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 7, name: "UnoLegend", wins: 232, games: 370, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 8, name: "CardWizard", wins: 221, games: 360, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 9, name: "WildCardPro", wins: 210, games: 350, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 10, name: "UnoChampion", wins: 198, games: 340, avatar: "/placeholder.svg?height=40&width=40" },
  ],
  friends: [
    { rank: 1, name: "BestFriend1", wins: 87, games: 120, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "GameBuddy", wins: 65, games: 110, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "UnoFriend", wins: 54, games: 100, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "You", wins: 42, games: 90, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 5, name: "CardPal", wins: 38, games: 80, avatar: "/placeholder.svg?height=40&width=40" },
  ],
  daily: [
    { rank: 1, name: "TodaysChamp", wins: 24, games: 30, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "DailyGrinder", wins: 20, games: 28, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "NoSleep", wins: 18, games: 25, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "AllDayPlayer", wins: 15, games: 22, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 5, name: "You", wins: 12, games: 20, avatar: "/placeholder.svg?height=40&width=40" },
  ],
}

export default function LeaderboardsPage() {
  const [activeTab, setActiveTab] = useState("global")

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />
      default:
        return <span className="text-sm font-medium w-5 text-center">{rank}</span>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboards</h1>

      <Tabs defaultValue="global" onValueChange={setActiveTab} className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
        </TabsList>

        {Object.entries(mockLeaderboards).map(([key, players]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {key === "global" ? "Global Rankings" : key === "friends" ? "Friends Rankings" : "Daily Challenge"}
                </CardTitle>
                <CardDescription>
                  {key === "global"
                    ? "Top players worldwide"
                    : key === "friends"
                      ? "See how you rank among friends"
                      : "Today's top performers"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="grid grid-cols-12 py-2 text-sm font-medium text-muted-foreground">
                    <div className="col-span-1">#</div>
                    <div className="col-span-7">Player</div>
                    <div className="col-span-2 text-right">Wins</div>
                    <div className="col-span-2 text-right">Win %</div>
                  </div>

                  {players.map((player) => (
                    <div
                      key={player.rank}
                      className={`grid grid-cols-12 py-3 items-center ${
                        player.name === "You" ? "bg-muted rounded-md" : ""
                      }`}
                    >
                      <div className="col-span-1 flex justify-center">{getRankIcon(player.rank)}</div>
                      <div className="col-span-7 flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={player.avatar} alt={player.name} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className={player.name === "You" ? "font-semibold" : ""}>{player.name}</span>
                      </div>
                      <div className="col-span-2 text-right font-medium">{player.wins}</div>
                      <div className="col-span-2 text-right text-muted-foreground">
                        {Math.round((player.wins / player.games) * 100)}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

