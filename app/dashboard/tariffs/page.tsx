"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { TariffCard } from "@/components/tariff-card"
import { TariffComparison } from "@/components/tariff-comparison"
import { TariffChangeDialog } from "@/components/tariff-change-dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const tariffs = [
  {
    id: 1,
    name: "Базовый",
    price: 500,
    speed: "50 Мбит/с",
    description: "Идеально для базового использования интернета",
    features: ["Безлимитный трафик", "Стабильное соединение", "Техподдержка 24/7", "Подключение за 1 день"],
    isPopular: false,
    isCurrent: false,
  },
  {
    id: 2,
    name: "Домашний 100",
    price: 800,
    speed: "100 Мбит/с",
    description: "Оптимальный выбор для семьи",
    features: [
      "Безлимитный трафик",
      "Высокая скорость",
      "Стабильное соединение",
      "Техподдержка 24/7",
      "Подключение за 1 день",
    ],
    isPopular: true,
    isCurrent: true,
  },
  {
    id: 3,
    name: "Премиум",
    price: 1200,
    speed: "200 Мбит/с",
    description: "Для требовательных пользователей",
    features: [
      "Безлимитный трафик",
      "Максимальная скорость",
      "Статический IP-адрес",
      "Приоритетная поддержка",
      "Подключение в день обращения",
    ],
    isPopular: false,
    isCurrent: false,
  },
  {
    id: 4,
    name: "Максимум",
    price: 2000,
    speed: "500 Мбит/с",
    description: "Безлимитные возможности",
    features: [
      "Безлимитный трафик",
      "Гигабитная скорость",
      "Статический IP-адрес",
      "VIP поддержка",
      "Бесплатный роутер",
      "Подключение в день обращения",
    ],
    isPopular: false,
    isCurrent: false,
  },
]

export default function TariffsPage() {
  const [selectedTariff, setSelectedTariff] = useState<(typeof tariffs)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const currentTariff = tariffs.find((t) => t.isCurrent)

  const handleTariffSelect = (tariff: (typeof tariffs)[0]) => {
    if (!tariff.isCurrent) {
      setSelectedTariff(tariff)
      setIsDialogOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к дашборду
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Тарифы</h1>
          <p className="text-muted-foreground">Выберите подходящий тариф для ваших потребностей</p>
        </div>

        {/* Tariff cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tariffs.map((tariff) => (
            <TariffCard
              key={tariff.id}
              name={tariff.name}
              price={tariff.price}
              speed={tariff.speed}
              description={tariff.description}
              features={tariff.features}
              isPopular={tariff.isPopular}
              isCurrent={tariff.isCurrent}
              onSelect={() => handleTariffSelect(tariff)}
            />
          ))}
        </div>

        {/* Comparison table */}
        <TariffComparison />

        {/* Change tariff dialog */}
        {selectedTariff && currentTariff && (
          <TariffChangeDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            tariffName={selectedTariff.name}
            currentPrice={currentTariff.price}
            newPrice={selectedTariff.price}
          />
        )}
      </main>
    </div>
  )
}
