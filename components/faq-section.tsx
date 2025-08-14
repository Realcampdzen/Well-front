import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Как проверить скорость интернета?",
    answer:
      "Вы можете проверить скорость интернета с помощью онлайн-сервисов, таких как Speedtest.net или Fast.com. Для получения точных результатов рекомендуется подключиться к роутеру через Ethernet-кабель и закрыть все программы, использующие интернет.",
  },
  {
    question: "Что делать, если пропал интернет?",
    answer:
      "1. Проверьте подключение кабелей к роутеру и компьютеру\n2. Перезагрузите роутер (отключите на 10 секунд)\n3. Проверьте баланс в личном кабинете\n4. Если проблема не решилась, обратитесь в техподдержку по телефону +7 (812) 677-66-20",
  },
  {
    question: "Как сменить тариф?",
    answer:
      "Смену тарифа можно выполнить в личном кабинете в разделе 'Тарифы'. Выберите подходящий тариф и укажите дату применения изменений. Смена тарифа бесплатна, изменения вступают в силу с выбранной даты.",
  },
  {
    question: "Как настроить Wi-Fi роутер?",
    answer:
      "1. Подключите роутер к сети и компьютеру\n2. Откройте браузер и перейдите по адресу 192.168.1.1\n3. Введите логин и пароль (обычно admin/admin)\n4. Настройте подключение к интернету согласно инструкции\n5. При возникновении проблем обратитесь в техподдержку",
  },
  {
    question: "Как пополнить баланс?",
    answer:
      "Пополнить баланс можно в личном кабинете в разделе 'Платежи', через банковскую карту, мобильный платеж или банковский перевод. Также доступна настройка автоплатежа для автоматического пополнения баланса.",
  },
]

export function FaqSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Часто задаваемые вопросы</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
