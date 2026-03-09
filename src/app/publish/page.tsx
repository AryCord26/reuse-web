"use client";

import { useState } from "react";

export default function Publish(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [category,setCategory] = useState("")
const [quantity,setQuantity] = useState(0)
const [location,setLocation] = useState("")

async function handleSubmit(e:any){

e.preventDefault()

await fetch("/api/items",{
method:"POST",
body:JSON.stringify({
title,
description,
category,
quantity,
location,
userId:1
})
})

alert("Item publicado!")

}

return(

<div className="p-10">

<h2 className="text-2xl">Publicar Item</h2>

<form onSubmit={handleSubmit} className="flex flex-col gap-3">

<input placeholder="Título" onChange={e=>setTitle(e.target.value)}/>

<input placeholder="Descrição" onChange={e=>setDescription(e.target.value)}/>

<input placeholder="Categoria" onChange={e=>setCategory(e.target.value)}/>

<input placeholder="Quantidade" type="number" onChange={e=>setQuantity(Number(e.target.value))}/>

<input placeholder="Localização" onChange={e=>setLocation(e.target.value)}/>

<button className="bg-green-600 text-white p-2">
Publicar
</button>

</form>

</div>

)

}
