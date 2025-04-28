import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Building2, Plus, Search, Filter, ArrowUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function EmpresasPage() {
  // Dados de exemplo - em produção, viriam de um banco de dados
  const empresas = [
    {
      id: 1,
      nome: "Drive Experience",
      criativos: 45,
      pendentes: 12,
      aprovados: 28,
      reprovados: 5,
      ultimaAtividade: "Há 2 horas",
      status: "ativo",
    },
    {
      id: 2,
      nome: "Tubotecnica",
      criativos: 32,
      pendentes: 8,
      aprovados: 20,
      reprovados: 4,
      ultimaAtividade: "Há 5 horas",
      status: "ativo",
    },
    {
      id: 3,
      nome: "Empresa ABC",
      criativos: 28,
      pendentes: 5,
      aprovados: 18,
      reprovados: 5,
      ultimaAtividade: "Ontem",
      status: "ativo",
    },
    {
      id: 4,
      nome: "Empresa XYZ",
      criativos: 40,
      pendentes: 7,
      aprovados: 30,
      reprovados: 3,
      ultimaAtividade: "Há 3 dias",
      status: "ativo",
    },
    {
      id: 5,
      nome: "Cliente 123",
      criativos: 15,
      pendentes: 3,
      aprovados: 10,
      reprovados: 2,
      ultimaAtividade: "Há 1 semana",
      status: "inativo",
    },
    {
      id: 6,
      nome: "Marca Premium",
      criativos: 22,
      pendentes: 0,
      aprovados: 20,
      reprovados: 2,
      ultimaAtividade: "Há 2 dias",
      status: "ativo",
    },
    {
      id: 7,
      nome: "Empresa Delta",
      criativos: 18,
      pendentes: 4,
      aprovados: 12,
      reprovados: 2,
      ultimaAtividade: "Hoje",
      status: "ativo",
    },
    {
      id: 8,
      nome: "Corporação Omega",
      criativos: 30,
      pendentes: 6,
      aprovados: 22,
      reprovados: 2,
      ultimaAtividade: "Há 4 dias",
      status: "ativo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Empresas</h1>
          <p className="text-muted-foreground">Gerencie as empresas e seus criativos.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/empresas/nova">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Empresa
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar empresas..." className="pl-8 w-full" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Todas</DropdownMenuItem>
              <DropdownMenuItem>Com pendências</DropdownMenuItem>
              <DropdownMenuItem>Ativas recentemente</DropdownMenuItem>
              <DropdownMenuItem>Inativas</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Ordenar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Nome (A-Z)</DropdownMenuItem>
              <DropdownMenuItem>Nome (Z-A)</DropdownMenuItem>
              <DropdownMenuItem>Mais criativos</DropdownMenuItem>
              <DropdownMenuItem>Mais pendências</DropdownMenuItem>
              <DropdownMenuItem>Atividade recente</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {empresas.map((empresa) => (
          <Link key={empresa.id} href={`/dashboard/empresas/${empresa.id}`}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-medium">{empresa.nome}</CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Última atividade: {empresa.ultimaAtividade}</span>
                    <Badge variant={empresa.status === "ativo" ? "default" : "secondary"} className="ml-2">
                      {empresa.status === "ativo" ? "Ativo" : "Inativo"}
                    </Badge>
                  </div>
                </div>
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Total</p>
                    <p className="text-xl font-bold">{empresa.criativos}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Pendentes</p>
                    <p className="text-xl font-bold text-yellow-600">{empresa.pendentes}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Aprovados</p>
                    <p className="text-xl font-bold text-green-600">{empresa.aprovados}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span>Taxa de aprovação</span>
                    <span className="font-medium">
                      {Math.round((empresa.aprovados / (empresa.aprovados + empresa.reprovados)) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mt-2">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{
                        width: `${Math.round((empresa.aprovados / (empresa.aprovados + empresa.reprovados)) * 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
