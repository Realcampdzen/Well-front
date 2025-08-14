import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Скорость загрузки",
    basic: "50 Мбит/с",
    standard: "100 Мбит/с",
    premium: "200 Мбит/с",
    ultimate: "500 Мбит/с",
  },
  {
    feature: "Скорость отдачи",
    basic: "25 Мбит/с",
    standard: "50 Мбит/с",
    premium: "100 Мбит/с",
    ultimate: "250 Мбит/с",
  },
  {
    feature: "Безлимитный трафик",
    basic: true,
    standard: true,
    premium: true,
    ultimate: true,
  },
  {
    feature: "Статический IP",
    basic: false,
    standard: false,
    premium: true,
    ultimate: true,
  },
  {
    feature: "Приоритетная поддержка",
    basic: false,
    standard: false,
    premium: false,
    ultimate: true,
  },
  {
    feature: "Wi-Fi роутер в аренду",
    basic: "200 ₽/мес",
    standard: "150 ₽/мес",
    premium: "100 ₽/мес",
    ultimate: "Бесплатно",
  },
]

export function TariffComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Сравнение тарифов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4">Характеристика</th>
                <th className="text-center py-2 px-4">Базовый</th>
                <th className="text-center py-2 px-4">Стандарт</th>
                <th className="text-center py-2 px-4">Премиум</th>
                <th className="text-center py-2 px-4">Максимум</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 font-medium">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.basic === "boolean" ? (
                      row.basic ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      )
                    ) : (
                      row.basic
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.standard === "boolean" ? (
                      row.standard ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      )
                    ) : (
                      row.standard
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.premium === "boolean" ? (
                      row.premium ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      )
                    ) : (
                      row.premium
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.ultimate === "boolean" ? (
                      row.ultimate ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      )
                    ) : (
                      row.ultimate
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
