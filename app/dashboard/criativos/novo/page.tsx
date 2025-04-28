"use client"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function NovoCriativoPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const empresaId = searchParams.get("empresa")
  const { toast } = useToast()

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [empresa, setEmpresa] = useState(empresaId || "")
  const [plataforma, setPlataforma] = useState("")
  const [tipo, setTipo] = useState("")
  const [dataPublicacao, setDataPublicacao] = useState<Date>()
  const [imagem, setImagem] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Dados de exemplo - em produção, viriam de um banco de dados
  const empresas = [
    { id: "1", nome: "Drive Experience" },
    { id: "2", nome: "Tubotecnica" },
    { id: "3", nome: "Empresa ABC" },
    { id: "4", nome: "Empresa XYZ" },
    { id: "5", nome: "Cliente 123" },
    { id: "6", nome: "Marca Premium" },
    { id: "7", nome: "Empresa Delta" },
    { id: "8", nome: "Corporação Omega" },
  ]

  const plataformas = [
    { id: "instagram", nome: "Instagram" },
    { id: "facebook", nome: "Facebook" },
    { id: "linkedin", nome: "LinkedIn" },
    { id: "twitter", nome: "Twitter" },
    { id: "tiktok", nome: "TikTok" },
  ]

  const tipos = [
    { id: "imagem", nome: "Imagem" },
    { id: "video", nome: "Vídeo" },
    { id: "carrossel", nome: "Carrossel" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aqui você faria o envio dos dados para o backend ou outro serviço
      toast({ title: "Criativo criado com sucesso!", description: "Os dados foram enviados." })
      router.push(`/criativos`)
    } catch (error) {
      toast({ title: "Erro", description: "Houve um problema ao criar o criativo.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImagem(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Novo Criativo</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-sm font-medium">Título</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empresa" className="block text-sm font-medium">Empresa</label>
          <select
            id="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
          >
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="plataforma" className="block text-sm font-medium">Plataforma</label>
          <select
            id="plataforma"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          >
            {plataformas.map((plataforma) => (
              <option key={plataforma.id} value={plataforma.id}>{plataforma.nome}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="tipo" className="block text-sm font-medium">Tipo</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          >
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dataPublicacao" className="block text-sm font-medium">Data de Publicação</label>
          <input
            id="dataPublicacao"
            type="date"
            value={dataPublicacao?.toISOString().split('T')[0] || ''}
            onChange={(e) => setDataPublicacao(new Date(e.target.value))}
            className="mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imagem" className="block text-sm font-medium">Imagem</label>
          <input
            id="imagem"
            type="file"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
          {previewUrl && <img src={previewUrl} alt="Pré-visualização" className="mt-2 max-w-xs" />}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          {isSubmitting ? "Enviando..." : "Criar Criativo"}
        </button>
      </form>
    </div>
  )
}
