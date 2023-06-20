import Image from 'next/image'
import prisma from './db'
import { Todoitem } from './componenets/Todoitem '


 const GetTodos=()=>{
  return  prisma.todo.findMany()
 }

export default async function Home() {


async function toggleTodo(id:string,complete:boolean){
  "use server"
  console.log(id,complete)
}
const todos = await GetTodos()

  return (
    <><header className=' justify-between flex m-4'>
      <h1 className='text-2xl'>Todos</h1>
       <a href='/new' className='text-base border-2  rounded-md pl-2 pr-2   pt-1 pb-1 text-center hover:bg-slate-700'>
        New</a>
    </header>
    <ul className='text-2xl'>{todos.map(todo=>(
      <Todoitem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
    ))}</ul>
    </>
  )
}


