"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  ArrowLeft,
  ImagePlus,
  Search,
  Filter,
  Calendar,
  Grid3X3,
  List,
  MoreHorizontal,
  Download,
  Share2,
  Pencil,
} from "lucide-react"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function EmpresaDetalhesPage() {
  const params = useParams()
  const empresaId = params.id
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Dados de exemplo - em produção, viriam de um banco de dados
  const empresa = {
    id: empresaId,
    nome: empresaId === "1" ? "Drive Experience" : empresaId === "2" ? "Tubotecnica" : "Empresa " + empresaId,
    descricao: "Empresa especializada em marketing digital e criação de conteúdo para redes sociais.",
    contato: "João Silva",
    email:
      "contato@" +
      (empresaId === "1" ? "driveexperience" : empresaId === "2" ? "tubotecnica" : "empresa" + empresaId) +
      ".com",
    telefone: "(11) 99999-9999",
    criativos: [
      {
        id: 1,
        titulo: "Post Instagram - Lançamento",
        status: "aprovado",
        data: "22/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 3,
        autor: "Ana Pereira",
        dataAprovacao: "23/04/2024",
      },
      {
        id: 2,
        titulo: "Story Facebook - Promoção",
        status: "pendente",
        data: "23/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 1,
        autor: "Carlos Santos",
      },
      {
        id: 3,
        titulo: "Carrossel LinkedIn - Produto",
        status: "reprovado",
        data: "20/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 5,
        autor: "Ana Pereira",
        dataReprovacao: "21/04/2024",
      },
      {
        id: 4,
        titulo: "Banner Site - Institucional",
        status: "aprovado",
        data: "18/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 2,
        autor: "Carlos Santos",
        dataAprovacao: "19/04/2024",
      },
      {
        id: 5,
        titulo: "Post Twitter - Evento",
        status: "pendente",
        data: "24/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 0,
        autor: "Ana Pereira",
      },
      {
        id: 6,
        titulo: "Vídeo Instagram - Tutorial",
        status: "pendente",
        data: "25/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 1,
        autor: "Carlos Santos",
      },
      {
        id: 7,
        titulo: "Post Facebook - Dicas",
        status: "aprovado",
        data: "17/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 4,
        autor: "Ana Pereira",
        dataAprovacao: "18/04/2024",
      },
      {
        id: 8,
        titulo: "Story Instagram - Bastidores",
        status: "reprovado",
        data: "15/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 3,
        autor: "Carlos Santos",
        dataReprovacao: "16/04/2024",
      },
      {
        id: 9,
        titulo: "Carrossel Facebook - Produtos",
        status: "aprovado",
        data: "12/04/2024",
        imagem: "/placeholder.svg?height=300&width=300",
        comentarios: 2,
        autor: "Ana Pereira",
        dataAprovacao: "13/04/2024",
      },
    ],
    usuarios: [
      {
        id: 1,
        nome: "João Silva",
        email:
          "joao@" +
          (empresaId === "1" ? "driveexperience" : empresaId === "2" ? "tubotecnica" : "empresa" + empresaId) +
          ".com",
        cargo: "Diretor de Marketing",
        ultimoAcesso: "Hoje, 10:30",
      },
      {
        id: 2,
        nome: "Maria Oliveira",
        email:
          "maria@" +
          (empresaId === "1" ? "driveexperience" : empresaId === "2" ? "tubotecnica" : "empresa" + empresaId) +
          ".com",
        cargo: "Analista de Mídias Sociais",
        ultimoAcesso: "Ontem, 15:45",
      },
      {
        id: 3,
        nome: "Pedro Santos",
        email:
          "pedro@" +
          (empresaId === "1" ? "driveexperience" : empresaId === "2" ? "tubotecnica" : "empresa" + empresaId) +
          ".com",
        cargo: "Gerente de Conteúdo",
        ultimoAcesso: "22/04/2024",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/empresas">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{empresa.nome}</h1>
            <p className="text-muted-foreground">{empresa.descricao}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Ações
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Editar empresa
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Exportar relatório
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar acesso
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={`/dashboard/criativos/novo?empresa=${empresaId}`}>
            <Button>
              <ImagePlus className="mr-2 h-4 w-4" />
              Novo Criativo
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Informações de Contato</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Contato Principal</p>
                <p>{empresa.contato}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{empresa.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Telefone</p>
                <p>{empresa.telefone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Estatísticas</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold">{empresa.criativos.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-600">
                  {empresa.criativos.filter((c) => c.status === "pendente").length}
                </p>
                <p className="text-sm text-muted-foreground">Pendentes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">
                  {empresa.criativos.filter((c) => c.status === "aprovado").length}
                </p>
                <p className="text-sm text-muted-foreground">Aprovados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Usuários</h3>
            <div className="space-y-3">
              {empresa.usuarios.map((usuario) => (
                <div key={usuario.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{usuario.nome.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{usuario.nome}</p>
                      <p className="text-xs text-muted-foreground">{usuario.cargo}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{usuario.ultimoAcesso}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
              {empresa.criativos.map((criativo) => (
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
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {empresa.criativos.map((criativo) => (
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
              {empresa.criativos
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
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {empresa.criativos
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
              {empresa.criativos
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
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {empresa.criativos
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
              {empresa.criativos
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
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="border rounded-md divide-y">
              {empresa.criativos
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
