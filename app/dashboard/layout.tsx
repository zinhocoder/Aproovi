"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  Users,
  ImageIcon,
  Settings,
  Menu,
  LogOut,
  Bell,
  Calendar,
  BarChart3,
  FileText,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [notifications, setNotifications] = useState(3)
  const [userType, setUserType] = useState<"agency" | "client">("agency")

  // Simular detecção do tipo de usuário - em produção, viria da autenticação
  useEffect(() => {
    // Verificar se há um parâmetro na URL ou no localStorage
    const storedUserType = localStorage.getItem("userType") as "agency" | "client" | null
    if (storedUserType) {
      setUserType(storedUserType)

      // Redirecionar para a página correta se necessário
      if (storedUserType === "client" && pathname === "/dashboard") {
        router.push("/dashboard/cliente")
      }
    }
  }, [pathname, router])

  const agencyRoutes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/empresas",
      label: "Empresas",
      icon: <Users className="h-5 w-5" />,
      active: pathname === "/dashboard/empresas" || pathname.startsWith("/dashboard/empresas/"),
    },
    {
      href: "/dashboard/criativos",
      label: "Criativos",
      icon: <ImageIcon className="h-5 w-5" />,
      active: pathname === "/dashboard/criativos" || pathname.startsWith("/dashboard/criativos/"),
    },
    {
      href: "/dashboard/calendario",
      label: "Calendário",
      icon: <Calendar className="h-5 w-5" />,
      active: pathname === "/dashboard/calendario",
    },
    {
      href: "/dashboard/relatorios",
      label: "Relatórios",
      icon: <BarChart3 className="h-5 w-5" />,
      active: pathname === "/dashboard/relatorios",
    },
    {
      href: "/dashboard/documentos",
      label: "Documentos",
      icon: <FileText className="h-5 w-5" />,
      active: pathname === "/dashboard/documentos",
    },
    {
      href: "/dashboard/configuracoes",
      label: "Configurações",
      icon: <Settings className="h-5 w-5" />,
      active: pathname === "/dashboard/configuracoes",
    },
  ]

  const clientRoutes = [
    {
      href: "/dashboard/cliente",
      label: "Criativos",
      icon: <ImageIcon className="h-5 w-5" />,
      active: pathname === "/dashboard/cliente" || pathname.startsWith("/dashboard/cliente/"),
    },
  ]

  const routes = userType === "agency" ? agencyRoutes : clientRoutes

  const handleClearNotifications = () => {
    setNotifications(0)
    toast({
      title: "Notificações limpas",
      description: "Todas as notificações foram marcadas como lidas.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-4 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="grid gap-2 text-lg font-medium">
                <Logo className="mb-8" />
                <div className="grid gap-1">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                        route.active ? "bg-muted" : "hover:bg-muted"
                      }`}
                    >
                      {route.icon}
                      {route.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Logo />
          <nav className="hidden md:flex items-center gap-6 ml-10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-2 text-sm font-medium ${
                  route.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notificações</span>
                  {notifications > 0 && (
                    <Button variant="ghost" size="sm" onClick={handleClearNotifications}>
                      Marcar todas como lidas
                    </Button>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications > 0 ? (
                  <>
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                      <div className="font-medium">Novo comentário</div>
                      <div className="text-sm text-muted-foreground">
                        João Silva comentou no criativo "Post Instagram - Drive Experience"
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Há 5 minutos</div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                      <div className="font-medium">Criativo aprovado</div>
                      <div className="text-sm text-muted-foreground">
                        "Banner Site - Tubotecnica" foi aprovado por Maria Oliveira
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Há 30 minutos</div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                      <div className="font-medium">Criativo reprovado</div>
                      <div className="text-sm text-muted-foreground">
                        "Carrossel LinkedIn - Drive Experience" foi reprovado por Carlos Santos
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Há 1 hora</div>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <div className="py-4 text-center text-muted-foreground">Não há notificações novas</div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Plano: Pro</DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href="/">
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          <nav className="grid gap-2 p-4 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  route.active ? "bg-muted" : "hover:bg-muted"
                }`}
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
