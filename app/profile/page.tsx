"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Settings, Trophy, Bell, Volume2, VolumeX } from "lucide-react"

export default function ProfilePage() {
  const [username, setUsername] = useState("Player123")
  const [email, setEmail] = useState("player@example.com")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  // Mock stats data
  const stats = {
    gamesPlayed: 157,
    wins: 82,
    winRate: "52%",
    bestStreak: 8,
    cardsPlayed: 1243,
    specialsPlayed: 342,
  }

  // Mock achievements data
  const achievements = [
    { id: 1, name: "First Win", description: "Win your first game", completed: true },
    { id: 2, name: "Winning Streak", description: "Win 5 games in a row", completed: true },
    { id: 3, name: "Card Master", description: "Play 1000 cards", completed: true },
    { id: 4, name: "Wild One", description: "Play 50 wild cards", completed: true },
    { id: 5, name: "Uno Legend", description: "Win 100 games", completed: false, progress: 82 },
    { id: 6, name: "Reverse Psychology", description: "Play 100 reverse cards", completed: false, progress: 67 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={username} />
                  <AvatarFallback>{username.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <CardTitle>{username}</CardTitle>
                <CardDescription>{email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{stats.gamesPlayed}</p>
                  <p className="text-sm text-muted-foreground">Games</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.wins}</p>
                  <p className="text-sm text-muted-foreground">Wins</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.winRate}</p>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.bestStreak}</p>
                  <p className="text-sm text-muted-foreground">Best Streak</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Badge className="w-full justify-center py-1">Level 12</Badge>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs text-center text-muted-foreground">650/1000 XP to Level 13</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="achievements">
                <Trophy className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar</Label>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt={username} />
                        <AvatarFallback>{username.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Track your progress and unlock rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            achievement.completed ? "bg-primary/20" : "bg-muted"
                          }`}
                        >
                          <Trophy
                            className={`h-6 w-6 ${achievement.completed ? "text-primary" : "text-muted-foreground"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{achievement.name}</h4>
                            {achievement.completed ? (
                              <Badge variant="outline" className="text-green-500 border-green-500">
                                Completed
                              </Badge>
                            ) : (
                              <span className="text-sm text-muted-foreground">{achievement.progress}/100</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          {!achievement.completed && achievement.progress && (
                            <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                              <div
                                className="bg-primary h-1.5 rounded-full"
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Game Settings</CardTitle>
                  <CardDescription>Customize your gaming experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sound">
                        <div className="flex items-center">
                          {soundEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
                          Sound Effects
                        </div>
                      </Label>
                      <p className="text-sm text-muted-foreground">Enable game sounds and music</p>
                    </div>
                    <Switch id="sound" checked={soundEnabled} onCheckedChange={setSoundEnabled} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2" />
                          Notifications
                        </div>
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive game invites and updates</p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={notificationsEnabled}
                      onCheckedChange={setNotificationsEnabled}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium">Privacy</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="online-status">Show Online Status</Label>
                        <Switch id="online-status" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="friend-requests">Allow Friend Requests</Label>
                        <Switch id="friend-requests" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="game-invites">Allow Game Invites</Label>
                        <Switch id="game-invites" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

