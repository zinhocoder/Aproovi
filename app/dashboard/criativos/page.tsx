"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ImagePlus, Search, Filter, Calendar, Grid3X3, List, ArrowUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CriativosPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Dados de exemplo - em produção, viriam de um banco de dados
  const criativos = [
    {
      id: 1,
      titulo: "Post Instagram - Drive Experience",
      status: "aprovado",
      data: "22/04/2024",
      empresa: "Drive Experience",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 3,
      autor: "Ana Pereira",
      dataAprovacao: "23/04/2024",
    },
    {
      id: 2,
      titulo: "Story Facebook - Tubotecnica",
      status: "pendente",
      data: "23/04/2024",
      empresa: "Tubotecnica",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 1,
      autor: "Carlos Santos",
    },
    {
      id: 3,
      titulo: "Carrossel LinkedIn - Drive Experience",
      status: "reprovado",
      data: "20/04/2024",
      empresa: "Drive Experience",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 5,
      autor: "Ana Pereira",
      dataReprovacao: "21/04/2024",
    },
    {
      id: 4,
      titulo: "Banner Site - Tubotecnica",
      status: "aprovado",
      data: "18/04/2024",
      empresa: "Tubotecnica",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 2,
      autor: "Carlos Santos",
      dataAprovacao: "19/04/2024",
    },
    {
      id: 5,
      titulo: "Post Twitter - Empresa ABC",
      status: "pendente",
      data: "24/04/2024",
      empresa: "Empresa ABC",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 0,
      autor: "Ana Pereira",
    },
    {
      id: 6,
      titulo: "Vídeo Instagram - Empresa XYZ",
      status: "pendente",
      data: "25/04/2024",
      empresa: "Empresa XYZ",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 1,
      autor: "Carlos Santos",
    },
    {
      id: 7,
      titulo: "Post Facebook - Cliente 123",
      status: "aprovado",
      data: "21/04/2024",
      empresa: "Cliente 123",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 4,
      autor: "Ana Pereira",
      dataAprovacao: "22/04/2024",
    },
    {
      id: 8,
      titulo: "Story Instagram - Marca Premium",
      status: "reprovado",
      data: "19/04/2024",
      empresa: "Marca Premium",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 3,
      autor: "Carlos Santos",
      dataReprovacao: "20/04/2024",
    },
    {
      id: 9,
      titulo: "Banner Newsletter - Drive Experience",
      status: "pendente",
      data: "26/04/2024",
      empresa: "Drive Experience",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 0,
      autor: "Ana Pereira",
    },
    {
      id: 10,
      titulo: "Post Instagram - Empresa Delta",
      status: "aprovado",
      data: "17/04/2024",
      empresa: "Empresa Delta",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 2,
      autor: "Carlos Santos",
      dataAprovacao: "18/04/2024",
    },
    {
      id: 11,
      titulo: "Carrossel Facebook - Corporação Omega",
      status: "pendente",
      data: "27/04/2024",
      empresa: "Corporação Omega",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 1,
      autor: "Ana Pereira",
    },
    {
      id: 12,
      titulo: "Story LinkedIn - Tubotecnica",
      status: "aprovado",
      data: "16/04/2024",
      empresa: "Tubotecnica",
      imagem: "/placeholder.svg?height=300&width=300",
      comentarios: 3,
      autor: "Carlos Santos",
      dataAprovacao: "17/04/2024",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Criativos</h1>
          <p className="text-muted-foreground">Gerencie todos os criativos de social media.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/criativos/novo">
            <Button>
              <ImagePlus className="mr-2 h-4 w-4" />
              Novo Criativo
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar criativos..." className="pl-8 w-full" />
        </div>
        <div className="flex items-center gap-2">
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
              <DropdownMenuItem>Todos os tipos</DropdownMenuItem>
              <DropdownMenuItem>Posts</DropdownMenuItem>
              <DropdownMenuItem>Stories</DropdownMenuItem>
              <DropdownMenuItem>Carrosséis</DropdownMenuItem>
              <DropdownMenuItem>Banners</DropdownMenuItem>
              <DropdownMenuItem>Vídeos</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Empresas</DropdownMenuLabel>
              <DropdownMenuItem>Todas as empresas</DropdownMenuItem>
              <DropdownMenuItem>Drive Experience</DropdownMenuItem>
              <DropdownMenuItem>Tubotecnica</DropdownMenuItem>
              <DropdownMenuItem>Empresa ABC</DropdownMenuItem>
              <DropdownMenuItem>Empresa XYZ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Data
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por data</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Todos</DropdownMenuItem>
              <DropdownMenuItem>Hoje</DropdownMenuItem>
              <DropdownMenuItem>Esta semana</DropdownMenuItem>
              <DropdownMenuItem>Este mês</DropdownMenuItem>
              <DropdownMenuItem>Personalizado...</DropdownMenuItem>
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
              <DropdownMenuItem>Mais recentes</DropdownMenuItem>
              <DropdownMenuItem>Mais antigos</DropdownMenuItem>
              <DropdownMenuItem>Título (A-Z)</DropdownMenuItem>
              <DropdownMenuItem>Título (Z-A)</DropdownMenuItem>
              <DropdownMenuItem>Empresa</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList>
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="aprovados">Aprovados</TabsTrigger>
          <TabsTrigger value="reprovados">Reprovados</TabsTrigger>
        </TabsList>
        <TabsContent value="todos" className="mt-4">
          {viewMode === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {criativos.map((criativo) => (
                <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                  <Card className="overflow-hidden hover:bg-muted/50 transition-colors cursor-pointer h-full">
                    <div className="aspect-square relative">
                      <img
                        src={criativo.imagem || "/placeholder.svg"}
                        alt={criativo.titulo}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`${
                            criativo.status === "aprovado"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : criativo.status === "reprovado"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          }`}
                        >
                          {criativo.status === "aprovado"
                            ? "Aprovado"
                            : criativo.status === "reprovado"
                              ? "Reprovado"
                              : "Pendente"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium truncate">{criativo.titulo}</h3>
                      <div className="flex justify-between mt-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Avatar className="h-5 w-5 mr-1">
                            <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {criativo.autor}
                        </div>
                        <div className="text-xs text-muted-foreground">{criativo.data}</div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 truncate">{criativo.empresa}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {criativos.map((criativo) => (
                <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                  <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="h-16 w-16 rounded overflow-hidden mr-4">
                      <img
                        src={criativo.imagem || "/placeholder.svg"}
                        alt={criativo.titulo}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{criativo.titulo}</h3>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {criativo.autor} • {criativo.data}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{criativo.empresa}</div>
                    </div>
                    <div className="ml-4 flex items-center gap-3">
                      <Badge
                        className={`${
                          criativo.status === "aprovado"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : criativo.status === "reprovado"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }`}
                      >
                        {criativo.status === "aprovado"
                          ? "Aprovado"
                          : criativo.status === "reprovado"
                            ? "Reprovado"
                            : "Pendente"}
                      </Badge>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {criativo.comentarios} comentários
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="pendentes" className="mt-4">
          {viewMode === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {criativos
                .filter((c) => c.status === "pendente")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <Card className="overflow-hidden hover:bg-muted/50 transition-colors cursor-pointer h-full">
                      <div className="aspect-square relative">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendente</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex justify-between mt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {criativo.autor}
                          </div>
                          <div className="text-xs text-muted-foreground">{criativo.data}</div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2 truncate">{criativo.empresa}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {criativos
                .filter((c) => c.status === "pendente")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="h-16 w-16 rounded overflow-hidden mr-4">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Avatar className="h-4 w-4 mr-1">
                            <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {criativo.autor} • {criativo.data}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{criativo.empresa}</div>
                      </div>
                      <div className="ml-4 flex items-center gap-3">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendente</Badge>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {criativo.comentarios} comentários
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="aprovados" className="mt-4">
          {viewMode === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {criativos
                .filter((c) => c.status === "aprovado")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <Card className="overflow-hidden hover:bg-muted/50 transition-colors cursor-pointer h-full">
                      <div className="aspect-square relative">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aprovado</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex justify-between mt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {criativo.autor}
                          </div>
                          <div className="text-xs text-muted-foreground">{criativo.data}</div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2 truncate">{criativo.empresa}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {criativos
                .filter((c) => c.status === "aprovado")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="h-16 w-16 rounded overflow-hidden mr-4">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Avatar className="h-4 w-4 mr-1">
                            <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {criativo.autor} • Aprovado em {criativo.dataAprovacao}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{criativo.empresa}</div>
                      </div>
                      <div className="ml-4 flex items-center gap-3">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aprovado</Badge>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {criativo.comentarios} comentários
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="reprovados" className="mt-4">
          {viewMode === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {criativos
                .filter((c) => c.status === "reprovado")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <Card className="overflow-hidden hover:bg-muted/50 transition-colors cursor-pointer h-full">
                      <div className="aspect-square relative">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Reprovado</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex justify-between mt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {criativo.autor}
                          </div>
                          <div className="text-xs text-muted-foreground">{criativo.data}</div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2 truncate">{criativo.empresa}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {criativos
                .filter((c) => c.status === "reprovado")
                .map((criativo) => (
                  <Link key={criativo.id} href={`/dashboard/criativos/${criativo.id}`}>
                    <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="h-16 w-16 rounded overflow-hidden mr-4">
                        <img
                          src={criativo.imagem || "/placeholder.svg"}
                          alt={criativo.titulo}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{criativo.titulo}</h3>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Avatar className="h-4 w-4 mr-1">
                            <AvatarFallback>{criativo.autor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {criativo.autor} • Reprovado em {criativo.dataReprovacao}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{criativo.empresa}</div>
                      </div>
                      <div className="ml-4 flex items-center gap-3">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Reprovado</Badge>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {criativo.comentarios} comentários
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
