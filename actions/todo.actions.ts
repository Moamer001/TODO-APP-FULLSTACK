"use server"
import { TodoFormValues } from "@/scihma";
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient() ;

export const getTodoListAction = async ()=>{
    // ** Error handeling 
  return await prisma.todo.findMany()
}
export const createTodoAction = async ({title , body} :TodoFormValues)=>{
   await prisma.todo.create({data:{
    title ,
    body
   }})
}
export const updateTodoAction = async ()=>{}
export const deleteTodoAction = async ()=>{}