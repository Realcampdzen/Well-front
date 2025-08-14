"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TariffChangeDialogProps {
  isOpen: boolean
  onClose: () => void
  tariffName: string
  currentPrice: number
  newPrice: number
}

export function TariffChangeDialog({ isOpen, onClose, tariffName, currentPrice, newPrice }: TariffChangeDialogProps) {
  const [changeType, setChangeType] = useState("immediate")
  const [selectedDate, setSelectedDate] = useState<Date>()

  const handleConfirm = () => {
    // Handle tariff change logic here
    console.log("Changing tariff:", { tariffName, changeType, selectedDate })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Смена тарифа</DialogTitle>
          <DialogDescription>Вы выбрали тариф "{tariffName}". Выберите когда применить изменения.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span>Текущий тариф:</span>
              <span className="font-semibold">{currentPrice} ₽/мес</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Новый тариф:</span>
              <span className="font-semibold text-primary">{newPrice} ₽/мес</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center">
              <span>Разница:</span>
              <span className={`font-semibold ${newPrice > currentPrice ? "text-red-500" : "text-green-500"}`}>
                {newPrice > currentPrice ? "+" : ""}
                {newPrice - currentPrice} ₽/мес
              </span>
            </div>
          </div>

          <RadioGroup value={changeType} onValueChange={setChangeType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate">Применить немедленно</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="next-period" id="next-period" />
              <Label htmlFor="next-period">Применить с следующего периода</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom-date" id="custom-date" />
              <Label htmlFor="custom-date">Выбрать дату</Label>
            </div>
          </RadioGroup>

          {changeType === "custom-date" && (
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Отмена
          </Button>
          <Button onClick={handleConfirm}>Подтвердить смену</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
