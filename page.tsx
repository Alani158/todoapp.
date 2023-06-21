import { error } from "console"
import prisma from "../db"
import { redirect } from "next/navigation"

export default function page(){

async function  createtodo(data:FormData){
    'use server'

    const title = data.get('title')?.valueOf()
    if(typeof title!=="string" || title.length===0){
        return new Error("invalid try again")
    }

     await prisma.todo.create({
        data:{title,complete:false}})
       redirect("/")
  }
return(
    <header className='  m-4 items-center'>
      <h1 className='text-2xl'>New</h1>
    <form action={createtodo} className="flex gap-2  flex-col">
        <input type='text' name='title' className="border border-white bg-transparent rounded italic font-bold"
        />
        <div className=" flex m-4 gap-2 justify-end">
        <button type="reset" className='text-base border-2  rounded-md pl-2 pr-2   pt-1 pb-1 text-center hover:bg-slate-700'>
        clear</button>
        <button type="submit"  className='text-base border-2  rounded-md pl-2 pr-2   pt-1 pb-1 text-center hover:bg-slate-700'>
        create</button>
       
        </div>
    </form>

    </header>
)

}