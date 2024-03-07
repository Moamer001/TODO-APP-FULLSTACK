"use server"
import { TodoFormValues } from "@/scihma";
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient() ;

export const getTodoListAction = async ()=>{
    // ** Error handeling 
  return await prisma.todo.findMany({orderBy:{createdAt:"desc"}})
}
export const createTodoAction = async ({title , body,completed} :TodoFormValues)=>{
   await prisma.todo.create({data:{
    title ,
    body ,
    completed
   }})
  revalidatePath("/")
}
export const updateTodoAction = async ()=>{}
export const deleteTodoAction = async ({id}:{id:string})=>{
  await prisma.todo.delete({
    where:{
        id ,
    }
  })
  revalidatePath("/")
}