"use client"
type TodoItemProps = {
    id:string,
    title:string,
    complete:boolean
    toggleTodo : (id:string,complete:boolean)=>void
}


export function Todoitem({id,title,complete,toggleTodo}: TodoItemProps ){
     return(
        <li className="flex gap-1 w-80 h-10 container items-center italic  bg-slate-300 border rounded mb-5">
            
            <input id={id} type='checkbox' className="cursor-pointer peer w-auto  italic font-bold"
       defaultChecked={complete}  onChange={e=>toggleTodo(id,e.target.checked)}   />
            <label htmlFor={id} className="peer-checked:line-through cursor-pointer">{title}</label>
        </li>
     )
}