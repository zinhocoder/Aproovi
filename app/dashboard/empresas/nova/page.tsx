"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NovaEmpresaPage() {
  const router = useRouter()

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [contato, setContato] = useState("")
  const [email, setEmail] = useState("")
  const [logo, setLogo] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLogo(file.name)
      // Em produção, aqui faria o upload da imagem para um serviço de armazenamento
      // Por enquanto, apenas criamos uma URL de preview local
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de criação - em produção, enviaria para o backend
    if (nome) {
      // Redirecionar para a lista de empresas após "criar"
      router.push("/dashboard/empresas")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/empresas">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Nova Empresa</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome da Empresa</Label>
                    <Input
                      id="nome"
                      placeholder="Ex: Drive Experience"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea
                      id="descricao"
                      placeholder="Descreva a empresa e seus objetivos"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contato">Contato</Label>
                      <Input
                        id="contato"
                        placeholder="Nome do contato"
                        value={contato}
                        onChange={(e) => setContato(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center">
                    {previewUrl ? (
                      <div className="space-y-4 w-full">
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Preview"
                          className="mx-auto max-h-[200px] object-contain"
                        />
                        <p className="text-sm text-muted-foreground">{logo}</p>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setLogo(null)
                            setPreviewUrl(null)
                          }}
                        >
                          Remover
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Arraste e solte ou clique para fazer upload</p>
                          <p className="text-xs text-muted-foreground">Suporta JPG, PNG ou GIF até 5MB</p>
                          <Label htmlFor="logo" className="cursor-pointer">
                            <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                              Selecionar arquivo
                            </div>
                            <Input
                              id="logo"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleLogoChange}
                            />
                          </Label>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link href="/dashboard/empresas">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </Link>
          <Button type="submit">Criar Empresa</Button>
        </div>
      </form>
    </div>
  )
}
