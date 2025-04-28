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
    { id: "linkedin", nome: \"LinkedIn
