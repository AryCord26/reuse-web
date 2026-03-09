async function getItems(){

const res = await fetch("http://localhost:3000/api/items")

return res.json()

}

export default async function Items(){

const items = await getItems()

return(

<div className="p-10">

<h1 className="text-3xl">
Itens Recicláveis
</h1>

<div className="grid grid-cols-3 gap-6 mt-6">

{items.map((item:any)=>(

<div key={item.id} className="border p-4">

<h2 className="text-xl">{item.title}</h2>

<p>{item.description}</p>

<p>Categoria: {item.category}</p>

<p>Quantidade: {item.quantity}</p>

<p>Local: {item.location}</p>

</div>

))}

</div>

</div>

)

}
