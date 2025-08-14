"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Smartphone, Building2 } from "lucide-react"

const quickAmounts = [500, 800, 1000, 1500, 2000]

export function BalanceTopup() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString())
  }

  const handleTopup = () => {
    console.log("Topping up:", { amount, paymentMethod })
    // Handle payment logic here
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Пополнение баланса</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Сумма пополнения</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Введите сумму"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {quickAmounts.map((value) => (
              <Button
                key={value}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAmount(value)}
                className="text-xs"
              >
                {value} ₽
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Способ оплаты</Label>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="card" id="card" />
              <CreditCard className="h-4 w-4" />
              <Label htmlFor="card" className="flex-1 cursor-pointer">
                Банковская карта
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="phone" id="phone" />
              <Smartphone className="h-4 w-4" />
              <Label htmlFor="phone" className="flex-1 cursor-pointer">
                Мобильный платеж
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg">
              <RadioGroupItem value="bank" id="bank" />
              <Building2 className="h-4 w-4" />
              <Label htmlFor="bank" className="flex-1 cursor-pointer">
                Банковский перевод
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button className="w-full" onClick={handleTopup} disabled={!amount}>
          Пополнить на {amount || "0"} ₽
        </Button>

        <div className="text-xs text-muted-foreground">
          <p>• Комиссия за пополнение не взимается</p>
          <p>• Средства поступают на баланс в течение 5 минут</p>
          <p>• Минимальная сумма пополнения: 100 ₽</p>
        </div>
      </CardContent>
    </Card>
  )
}
