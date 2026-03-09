"use client";

import { useState } from "react";

export default function Register() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [city,setCity] = useState("");

async function handleSubmit(e:any){
e.preventDefault()

await fetch("/api/register",{
method:"POST",
body:JSON.stringify({name,email,password,city})
})

alert("Usuário criado!")
}

return (

<div className="p-10">

<h2 className="text-2xl">Cadastro</h2>

<form onSubmit={handleSubmit} className="flex flex-col gap-3">

<input placeholder="Nome" onChange={e=>setName(e.target.value)} />

<input placeholder="Email" onChange={e=>setEmail(e.target.value)} />

<input placeholder="Senha" type="password" onChange={e=>setPassword(e.target.value)} />

<input placeholder="Cidade" onChange={e=>setCity(e.target.value)} />

<button className="bg-green-600 text-white p-2">
Cadastrar
</button>

</form>

</div>

)

}
