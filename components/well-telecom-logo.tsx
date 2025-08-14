import { Home, Wifi } from "lucide-react"

export function WellTelecomLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Home className="h-8 w-8 text-primary" />
        <Wifi className="h-4 w-4 text-primary absolute -top-1 -right-1" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground">ВЭЛЛ</span>
        <span className="text-sm text-muted-foreground -mt-1">телеком</span>
      </div>
    </div>
  )
}
