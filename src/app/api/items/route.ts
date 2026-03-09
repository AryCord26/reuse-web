import prisma from "@/lib/prisma";

export async function POST(req:Request){

const data = await req.json()

const item = await prisma.item.create({
data
})

return Response.json(item)

}

export async function GET(){

const items = await prisma.item.findMany({
include:{user:true}
})

return Response.json(items)

}
