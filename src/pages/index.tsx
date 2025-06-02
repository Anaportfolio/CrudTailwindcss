import Botao from "@/components/Botao";
import Layout from "./Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34,'1'),
    new Cliente('Maria', 22,'2'),
    new Cliente('Luana', 19,'3')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  return (
    <div className= {`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>

      <Layout title={"Conteudo Simples"}>
        {visivel === 'tabela' ? (        <>
          <div className="flex justify-end">
            <Botao className="mb-4" cor={"green"} onClick={() => setVisivel('formulario')}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>) : (
           <Formulario cliente={clientes[2]}  cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente}></Formulario>
        )}
      </Layout>

    </div>
  );
}
