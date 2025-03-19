"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

// Mock data for demonstration
const mockMessages = [
  { id: 1, sender: "Player 2", content: "Good luck everyone!", time: "2:30 PM" },
  { id: 2, sender: "Player 3", content: "Thanks, you too!", time: "2:31 PM" },
  { id: 3, sender: "Player 4", content: "I have a great hand 😎", time: "2:32 PM" },
  { id: 4, sender: "System", content: "Player 2 played a Red 7", time: "2:33 PM" },
  { id: 5, sender: "You", content: "I'll win this round for sure", time: "2:34 PM" },
]

export function GameChat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="h-[600px] bg-card rounded-xl shadow-lg flex flex-col">
      <div className="p-3 border-b">
        <h2 className="font-semibold">Game Chat</h2>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-2 ${
                  msg.sender === "System"
                    ? "bg-muted text-muted-foreground text-xs italic"
                    : msg.sender === "You"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                }`}
              >
                {msg.sender !== "You" && msg.sender !== "System" && (
                  <div className="text-xs font-medium mb-1">{msg.sender}</div>
                )}
                <div>{msg.content}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{msg.time}</div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-3 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

