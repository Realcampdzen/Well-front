"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Wifi } from "lucide-react"

interface TariffCardProps {
  name: string
  price: number
  speed: string
  description: string
  features: string[]
  isPopular?: boolean
  isCurrent?: boolean
  onSelect: () => void
}

export function TariffCard({
  name,
  price,
  speed,
  description,
  features,
  isPopular = false,
  isCurrent = false,
  onSelect,
}: TariffCardProps) {
  return (
    <Card
      className={`relative ${isPopular ? "border-primary shadow-lg" : ""} ${isCurrent ? "bg-primary/5 border-primary" : ""}`}
    >
      {isPopular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">Популярный</Badge>
      )}
      {isCurrent && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500">Текущий тариф</Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">{price} ₽</div>
          <div className="text-sm text-muted-foreground">в месяц</div>
        </div>
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <Wifi className="h-5 w-5" />
          {speed}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button className="w-full" variant={isCurrent ? "outline" : "default"} onClick={onSelect} disabled={isCurrent}>
          {isCurrent ? "Активный тариф" : "Выбрать тариф"}
        </Button>
      </CardContent>
    </Card>
  )
}
