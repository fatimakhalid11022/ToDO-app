"use client"
import Image from 'next/image'
import { useState ,useEffect } from 'react'

export default function Home() {
  
  const [todos,setTodos] :any= useState(
   [
    {tobuy:"fruits",id:1},
     {tobuy:"vegetable",id:2},
    ])
 
    const [inputVal,setInput]=useState("")
    const [id,setId]=useState(0)

   

   const addItem=()=>{
    let obj:any= todos.find((item:any) => item.id == id)
    if (obj){
      let newArray = todos.filter((item:any)=> item.id !==obj.id)
      setTodos([...newArray,{tobuy:inputVal,id:id}])
      setInput("")
      setId(0)
      return
    }
    setTodos([...todos,{tobuy:inputVal,id:id}])
    setInput("")
    setId(0)
   }
   const editItem=(id:any)=>{
    let obj : any=todos.find((item:any)=> item.id == id)
    setInput(obj.tobuy)
    setId(obj.id)
     
   }

   const delItem = (id:any)=>{
    let newArray = todos.filter((item:any)=> item.id !==id)
    setTodos([...newArray])
   }


  return (
    
      <div className='max-w-4xl mx-auto p-5'>
        <h1 className='text-center text-[40px] border-l-8 border-b-2'>
          M&T Store <div className='text-blue-600'>ToDo APP</div>
        </h1>
    
        <div className='flex justify-between gap-4 mt-10'>
         <input type ="text"
         value={inputVal}
         onChange={(e)=>setInput(e.target.value)}
         className='w-[60%] p-2 ml-3 text-lg bg-blue-100 border-b focus:outline-none' 
         placeholder='Write List of Items...'
         />
         <input type="number"
           value= {id}
           onChange={(e:any)=>setId(e.target.value)}
         className='w-[20%] p-2 ml-3 text-lg bg-slate-50 border-b focus:outline-none'
          placeholder='Write Id'
          />
         <button 
         onClick={addItem}
         className='bg-green-500 w-[20%] text-white p-2 rounded-2xl hover:animate-bounce'>
          ADD list
          </button>
         
        </div>

      <div className='max-w-4xl mx-auto p-5'>
          <h1 className='text-center text-[40px] text-3xl pt-8 border-t-2 border-r-8 border-spacing-2'>
            Items Selected
            </h1>  
            <div className='grid grid-cols-2 gap-5 mt-5'>
             {
              todos.map((item:any,i:any)=>{
                return(
                  <div  className='shadow p-4' key={i}>
                  <div className='flex justify-between '>
                      <span className='rounded-full h-5 w-4 text-center mb-4 hover:italic'> 
                      {i+1}
                      </span>
                       
                      <span onClick={()=>delItem(item.id)} className='rounded-full h-5 w-4 text-red-500 cursor-pointer'>
                        X
                        </span>
                  </div>
                      <div className='text-[30px] hover:italic hover:text-slate-600'>
                        {item.tobuy} 
                        </div>
                      <div>
                          <h2 onClick={()=>editItem(item.id)} className='text-right cursor-pointer'>Edit</h2>
                          
                      </div>
     
                </div>
              
                )
                })}
           </div>       
        </div>
        </div>
  )
 }
   
  