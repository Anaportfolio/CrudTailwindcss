import { useState } from "react";
import Entrda from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente?: Cliente
    cancelado?: () => void
    clienteMudou?:(cliente:Cliente) => void
}


export default function Formulario(props:FormularioProps){

    const id = props.cliente?.id
    const [nome,setNome] = useState(props.cliente?.nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0)
   
    return(
        <div>
            {id ? (
                <Entrda texto={"Código"} valor={id} className="mb-4" />
            ) : false}
            <Entrda texto={"Nome"} tipo={"text"} valor={nome} valorMudou={setNome} className="mb-4"/>
            <Entrda texto={"Idade"} tipo={"number"} valor={idade} valorMudou={setIdade} className="mb-4"/>

            <div className="flex justify-end mt-3">
                <Botao className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))} cor={'green'}> {id ? "Alterar": 'Salvar'}</Botao>
                <Botao onClick={props.cancelado} cor={'green'}>Cancelar</Botao>
            </div>
        </div>
    )
}