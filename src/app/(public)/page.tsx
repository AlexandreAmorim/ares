'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [document, setDocument] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [alert, setAlert] = useState<boolean>(false)

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      document,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log("RRR ",result)
      setAlert(true)
      return
    }

    router.replace('/admin')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      { alert && 
        <h2 className="text-3xl mb-6 text-red-700">Erro de login</h2>
      }
      <h1 className="text-3xl mb-6">Login</h1>

      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="text" 
          name="text" 
          placeholder="Digite seu document" 
          onChange={(e) => setDocument(e.target.value)}
        />

        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
