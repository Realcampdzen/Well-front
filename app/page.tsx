import { WellTelecomLogo } from "@/components/well-telecom-logo"
import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Logo and header */}
        <div className="text-center space-y-4">
          <WellTelecomLogo className="justify-center" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Личный кабинет</h1>
            <p className="text-muted-foreground">Ваш уютный провайдер с подключением без приключений</p>
          </div>
        </div>

        {/* Login form */}
        <LoginForm />

        <div className="text-center">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              Демо дашборда
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Техническая поддержка</p>
          <p className="text-lg font-semibold text-primary">+7 (812) 677-66-20</p>
        </div>
      </div>
    </div>
  )
}
