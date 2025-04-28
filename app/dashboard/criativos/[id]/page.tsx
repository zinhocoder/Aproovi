"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  MessageSquare,
  Download,
  Share2,
  MoreHorizontal,
  Eye,
  Clock,
  Calendar,
  Pencil,
  Loader2,
} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CriativoDetalhesPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const criativoId = params.id
  const [status, setStatus] = useState<"pendente" | "aprovado" | "reprovado">("pendente")
  const [comentario, setComentario] = useState("")
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      autor: "João Silva",
      avatar: "/placeholder-user.jpg",
      texto: "Precisamos ajustar as cores da logo. Está muito clara e não está destacando bem no fundo.",
      data: "22/04/2024 14:30",
    },
    {
      id: 2,
      autor: "Maria Oliveira",
      avatar: null,
      texto: "Concordo com o João. Além disso, o texto poderia ser um pouco maior para melhorar a legibilidade.",
      data: "22/04/2024 15:45",
    },
    {
      id: 3,
      autor: "Carlos Santos",
      avatar: null,
      texto: "Gostei do conceito geral, mas precisamos revisar esses detalhes antes de aprovar.",
      data: "22/04/2024 16:20",
    },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("visualizacao")

  // Dados de exemplo - em produção, viriam de um banco de dados
  const criativo = {
    id: criativoId,
    titulo: "Post Instagram - Lançamento de Produto",
    empresa: "Drive Experience",
    status: status,
    data: "22/04/2024",
    dataPublicacao: "25/04/2024",
    imagem: "/placeholder.svg?height=600&width=600",
    descricao: "Post para divulgação do lançamento do novo produto na linha premium.",
    plataforma: "Instagram",
    tipo: "Post",
    dimensoes: "1080x1080px",
    autor: "Ana Pereira",
    versao: "2.0",
    historico: [
      { versao: "1.0", data: "20/04/2024", autor: "Ana Pereira", status: "Criado" },
      { versao: "1.1", data: "21/04/2024", autor: "Carlos Santos", status: "Revisado" },
      { versao: "2.0", data: "22/04/2024", autor: "Ana Pereira", status: "Atualizado" },
    ],
  }

  const handleAprovar = async () => {
    setIsSubmitting(true)

    try {
      // Simular um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus("aprovado")

      if (comentario.trim()) {
        adicionarComentario()
      }

      toast({
        title: "Criativo aprovado",
        description: "O criativo foi aprovado com sucesso.",
      })
    } catch (error) {
      toast({
        title: "Erro ao aprovar",
        description: "Ocorreu um erro ao tentar aprovar o criativo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReprovar = async () => {
    setIsSubmitting(true)

    try {
      // Simular um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (!comentario.trim()) {
        toast({
          title: "Comentário obrigatório",
          description: "Por favor, adicione um comentário explicando o motivo da reprovação.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      setStatus("reprovado")
      adicionarComentario()

      toast({
        title: "Criativo reprovado",
        description: "O criativo foi reprovado com sucesso.",
      })
    } catch (error) {
      toast({
        title: "Erro ao reprovar",
        description: "Ocorreu um erro ao tentar reprovar o criativo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const adicionarComentario = () => {
    if (comentario.trim()) {
      const novoComentario = {
        id: comentarios.length + 1,
        autor: "Você",
        avatar: null,
        texto: comentario,
        data: new Date().toLocaleString("pt-BR"),
      }
      setComentarios([...comentarios, novoComentario])
      setComentario("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/criativos">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{criativo.titulo}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Link href={`/dashboard/empresas/${1}`} className="hover:underline">
                {criativo.empresa}
              </Link>
              <span>•</span>
              <span>{criativo.data}</span>
              <Badge
                className={`ml-2 ${
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
                Editar criativo
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Baixar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="visualizacao">Visualização</TabsTrigger>
                  <TabsTrigger value="historico">Histórico</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="pt-6">
              <TabsContent value="visualizacao" className="mt-0">
                <div className="overflow-hidden rounded-lg border">
                  <img src={criativo.imagem || "/placeholder.svg"} alt={criativo.titulo} className="w-full h-auto" />
                </div>
              </TabsContent>
              <TabsContent value="historico" className="mt-0">
                <div className="space-y-4">
                  {criativo.historico.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <div className="bg-muted rounded-full p-2">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Versão {item.versao}</div>
                          <div className="text-xs text-muted-foreground">{item.data}</div>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-muted-foreground">Por:</span> {item.autor}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Status:</span> {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comentários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comentarios.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">Nenhum comentário ainda.</p>
                ) : (
                  comentarios.map((comentario) => (
                    <div key={comentario.id} className="flex gap-4 pb-4 border-b last:border-0">
                      <Avatar className="h-10 w-10">
                        {comentario.avatar ? (
                          <AvatarImage src={comentario.avatar || "/placeholder.svg"} alt={comentario.autor} />
                        ) : (
                          <AvatarFallback>{comentario.autor.charAt(0)}</AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <p className="font-medium">{comentario.autor}</p>
                          <p className="text-xs text-muted-foreground">{comentario.data}</p>
                        </div>
                        <p className="text-sm">{comentario.texto}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full">
                <Textarea
                  placeholder="Adicione um comentário..."
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  className="min-h-0 flex-1 mr-2"
                  disabled={isSubmitting}
                />
                <Button onClick={adicionarComentario} disabled={!comentario.trim() || isSubmitting}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Comentar
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aprovação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {status === "pendente" ? (
                  <div className="text-center text-muted-foreground py-2">Este criativo está aguardando aprovação.</div>
                ) : status === "aprovado" ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 py-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Aprovado</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-red-600 py-2">
                    <XCircle className="h-5 w-5" />
                    <span className="font-medium">Reprovado</span>
                  </div>
                )}

                {status === "pendente" && (
                  <Textarea
                    placeholder="Adicione um comentário sobre este criativo..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    rows={4}
                    disabled={isSubmitting}
                  />
                )}
              </div>
            </CardContent>
            {status === "pendente" && (
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleReprovar} className="w-full mr-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <XCircle className="mr-2 h-4 w-4" />
                      Reprovar
                    </>
                  )}
                </Button>
                <Button onClick={handleAprovar} className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Aprovar
                    </>
                  )}
                </Button>
              </CardFooter>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Descrição</p>
                  <p className="mt-1">{criativo.descricao}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Plataforma</p>
                    <p className="mt-1">{criativo.plataforma}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                    <p className="mt-1">{criativo.tipo}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dimensões</p>
                    <p className="mt-1">{criativo.dimensoes}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Versão</p>
                    <p className="mt-1">{criativo.versao}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Autor</p>
                    <p className="mt-1">{criativo.autor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Data de Publicação</p>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      {criativo.dataPublicacao}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atividade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-muted rounded-full p-2">
                    <Eye className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">João Silva</span> visualizou este criativo
                    </div>
                    <div className="text-xs text-muted-foreground">Há 30 minutos</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-muted rounded-full p-2">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">Maria Oliveira</span> comentou neste criativo
                    </div>
                    <div className="text-xs text-muted-foreground">Há 2 horas</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-muted rounded-full p-2">
                    <Pencil className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">Ana Pereira</span> atualizou este criativo
                    </div>
                    <div className="text-xs text-muted-foreground">Há 1 dia</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
