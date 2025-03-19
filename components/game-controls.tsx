"use client"

import { Button } from "@/components/ui/button"
import { CornerDownRight, AlertTriangle, MessageCircle, Palette } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function GameControls() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [showColorPicker, setShowColorPicker] = useState(false)

  const colors = [
    { name: "red", class: "bg-red-500" },
    { name: "blue", class: "bg-blue-500" },
    { name: "green", class: "bg-green-500" },
    { name: "yellow", class: "bg-yellow-500" },
  ]

  return (
    <div className="bg-black/50 p-3 flex justify-between items-center">
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <MessageCircle className="h-4 w-4 mr-1" />
          Chat
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <Palette className="h-4 w-4 mr-1" />
          Color
        </Button>
      </div>

      <div className="flex space-x-2">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <AlertTriangle className="h-4 w-4 mr-1" />
          UNO!
        </Button>

        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <CornerDownRight className="h-4 w-4 mr-1" />
          Pass
        </Button>
      </div>

      {showColorPicker && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 p-3 rounded-lg flex space-x-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={cn(
                "w-10 h-10 rounded-full border-2",
                color.class,
                selectedColor === color.name ? "border-white" : "border-transparent",
              )}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

