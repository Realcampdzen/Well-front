"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export function ProfileSettings() {
  const [profile, setProfile] = useState({
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    address: "г. Санкт-Петербург, ул. Примерная, д. 123, кв. 45",
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    billing: true,
    technical: true,
    marketing: false,
  })

  const handleProfileSave = () => {
    console.log("Saving profile:", profile)
  }

  const handleNotificationsSave = () => {
    console.log("Saving notifications:", notifications)
  }

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Личная информация</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">ИП</AvatarFallback>
            </Avatar>
            <Button variant="outline">Изменить фото</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя</Label>
              <Input
                id="firstName"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия</Label>
              <Input
                id="lastName"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Адрес подключения</Label>
            <Input
              id="address"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            />
          </div>

          <Button onClick={handleProfileSave}>Сохранить изменения</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Настройки уведомлений</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Email уведомления</Label>
                <p className="text-sm text-muted-foreground">Получать уведомления на электронную почту</p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>SMS уведомления</Label>
                <p className="text-sm text-muted-foreground">Получать SMS на мобильный телефон</p>
              </div>
              <Switch
                checked={notifications.sms}
                onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Push уведомления</Label>
                <p className="text-sm text-muted-foreground">Показывать уведомления в браузере</p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
              />
            </div>
          </div>

          <hr />

          <div className="space-y-4">
            <h4 className="font-medium">Типы уведомлений</h4>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Счета и платежи</Label>
                <p className="text-sm text-muted-foreground">Уведомления о счетах, платежах и балансе</p>
              </div>
              <Switch
                checked={notifications.billing}
                onCheckedChange={(checked) => setNotifications({ ...notifications, billing: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Технические работы</Label>
                <p className="text-sm text-muted-foreground">Информация о плановых работах и сбоях</p>
              </div>
              <Switch
                checked={notifications.technical}
                onCheckedChange={(checked) => setNotifications({ ...notifications, technical: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Маркетинговые предложения</Label>
                <p className="text-sm text-muted-foreground">Акции, скидки и новые услуги</p>
              </div>
              <Switch
                checked={notifications.marketing}
                onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
              />
            </div>
          </div>

          <Button onClick={handleNotificationsSave}>Сохранить настройки</Button>
        </CardContent>
      </Card>
    </div>
  )
}
