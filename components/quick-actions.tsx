import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, HeadphonesIcon, Settings } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Быстрые действия</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/dashboard/payments">
            <Button className="h-auto flex-col gap-2 p-4 bg-transparent w-full" variant="outline">
              <CreditCard className="h-6 w-6" />
              <span className="text-sm">Пополнить баланс</span>
            </Button>
          </Link>
          <Link href="/dashboard/tariffs">
            <Button className="h-auto flex-col gap-2 p-4 bg-transparent w-full" variant="outline">
              <Smartphone className="h-6 w-6" />
              <span className="text-sm">Сменить тариф</span>
            </Button>
          </Link>
          <Link href="/dashboard/support">
            <Button className="h-auto flex-col gap-2 p-4 bg-transparent w-full" variant="outline">
              <HeadphonesIcon className="h-6 w-6" />
              <span className="text-sm">Техподдержка</span>
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button className="h-auto flex-col gap-2 p-4 bg-transparent w-full" variant="outline">
              <Settings className="h-6 w-6" />
              <span className="text-sm">Настройки</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
