"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Edit, Trash2 } from "lucide-react"

export function AutopaySettings() {
  const [isAutopayEnabled, setIsAutopayEnabled] = useState(true)
  const [minBalance, setMinBalance] = useState("200")
  const [topupAmount, setTopupAmount] = useState("800")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Автоплатеж</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label>Автоматическое пополнение</Label>
            <p className="text-sm text-muted-foreground">
              Автоматически пополнять баланс при достижении минимальной суммы
            </p>
          </div>
          <Switch checked={isAutopayEnabled} onCheckedChange={setIsAutopayEnabled} />
        </div>

        {isAutopayEnabled && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="min-balance">Минимальный баланс</Label>
                <Input
                  id="min-balance"
                  type="number"
                  value={minBalance}
                  onChange={(e) => setMinBalance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="topup-amount">Сумма пополнения</Label>
                <Input
                  id="topup-amount"
                  type="number"
                  value={topupAmount}
                  onChange={(e) => setTopupAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Привязанные карты</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-4 w-4" />
                    <div>
                      <p className="font-medium">**** **** **** 1234</p>
                      <p className="text-sm text-muted-foreground">Visa • Истекает 12/26</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Основная
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Добавить карту
              </Button>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Как работает автоплатеж:</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Когда баланс станет меньше {minBalance} ₽, автоматически спишется {topupAmount} ₽ с привязанной карты.
              </p>
            </div>
          </>
        )}

        <Button className="w-full">Сохранить настройки</Button>
      </CardContent>
    </Card>
  )
}
