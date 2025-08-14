"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export function SupportForm() {
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Support request:", { subject, category, message, priority })
    // Handle form submission
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Обратиться в техподдержку</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">Категория обращения</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Технические проблемы</SelectItem>
                  <SelectItem value="billing">Вопросы по оплате</SelectItem>
                  <SelectItem value="tariff">Смена тарифа</SelectItem>
                  <SelectItem value="equipment">Оборудование</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Приоритет</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите приоритет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Низкий</SelectItem>
                  <SelectItem value="medium">Средний</SelectItem>
                  <SelectItem value="high">Высокий</SelectItem>
                  <SelectItem value="urgent">Критический</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Тема обращения</Label>
            <Input
              id="subject"
              placeholder="Кратко опишите проблему"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Описание проблемы</Label>
            <Textarea
              id="message"
              placeholder="Подробно опишите вашу проблему или вопрос"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Прикрепить файлы</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Перетащите файлы сюда или{" "}
                <Button variant="link" className="p-0 h-auto">
                  выберите файлы
                </Button>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Максимум 10 МБ, форматы: jpg, png, pdf, doc</p>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Отправить обращение
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
