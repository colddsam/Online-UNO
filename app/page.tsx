import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Trophy, Users, Settings } from "lucide-react"
import GamePreview from "@/components/game-preview"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
            UNO Online
          </h1>
          <p className="text-lg mt-4 text-muted-foreground">Play the classic card game with friends in real-time</p>
        </div>

        <GamePreview />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Gamepad2 className="w-12 h-12 mx-auto text-primary" />
              <CardTitle>Play Now</CardTitle>
              <CardDescription>Jump into a game instantly</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link href="/play">
                <Button size="lg" className="w-full">
                  Quick Play
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto text-primary" />
              <CardTitle>Create Room</CardTitle>
              <CardDescription>Host a private game with friends</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link href="/create-room">
                <Button size="lg" variant="outline" className="w-full">
                  Create Room
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Trophy className="w-12 h-12 mx-auto text-primary" />
              <CardTitle>Leaderboards</CardTitle>
              <CardDescription>See the top players worldwide</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link href="/leaderboards">
                <Button size="lg" variant="outline" className="w-full">
                  View Rankings
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <Settings className="w-12 h-12 mx-auto text-primary" />
              <CardTitle>Profile</CardTitle>
              <CardDescription>Customize your avatar and settings</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link href="/profile">
                <Button size="lg" variant="outline" className="w-full">
                  My Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Real-time Multiplayer</h3>
              <p className="text-sm text-muted-foreground">Play with friends instantly</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Voice & Text Chat</h3>
              <p className="text-sm text-muted-foreground">Communicate during gameplay</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Classic UNO Rules</h3>
              <p className="text-sm text-muted-foreground">All the cards you love</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Custom Avatars</h3>
              <p className="text-sm text-muted-foreground">Personalize your profile</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Daily Challenges</h3>
              <p className="text-sm text-muted-foreground">Earn rewards every day</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow">
              <h3 className="font-semibold">Cross-Platform</h3>
              <p className="text-sm text-muted-foreground">Play on any device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

