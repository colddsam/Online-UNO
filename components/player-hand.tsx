"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { UnoCard } from "@/components/uno-card"

type CardType = {
  color: "red" | "blue" | "green" | "yellow" | "black"
  value: string
}

interface PlayerHandProps {
  cards: CardType[]
  onPlayCard: (card: CardType) => void
}

export function PlayerHand({ cards, onPlayCard }: PlayerHandProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setSelectedCard(index)
    setTimeout(() => {
      onPlayCard(cards[index])
      setSelectedCard(null)
    }, 500)
  }

  return (
    <div className="flex justify-center">
      <motion.div
        className="flex items-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={`${card.color}-${card.value}-${index}`}
            className="transform origin-bottom"
            initial={{ rotate: (index - cards.length / 2 + 0.5) * 5 }}
            animate={{
              rotate: (index - cards.length / 2 + 0.5) * 5,
              y: selectedCard === index ? -50 : 0,
              scale: selectedCard === index ? 1.1 : 1,
            }}
            style={{
              marginLeft: index > 0 ? "-10px" : "0",
              zIndex: selectedCard === index ? 10 : index,
            }}
          >
            <UnoCard
              color={card.color as any}
              value={card.value as any}
              isPlayable={true}
              onClick={() => handleCardClick(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

