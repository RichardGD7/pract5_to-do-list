import { useState } from "react"
import Buttom from "./components/Buttom"
import Item from "./components/Item"



 export default function App () {
  
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  function onInputChange(event) {
    setText(event.target.value)
  }

  function addToDo () {
    if (text.trim().length>0) {
      setTodos([text, ... todos])
      setText("")
    }
  }

  function onKeyUp (event) {
    if (event.key === 'Enter'){addToDo()}
  }

  function onDelete (index) {
    todos.splice(index,1)
    setTodos([... todos])
  }

  return(
    <main className="bg-black min-h-screen flex justify-center p-16 text-white">
      <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
        <input type="text" value={text} className="bg-blue-200 p-2 rounded text-black" onChange={onInputChange} onKeyUp={onKeyUp}/>
        <Buttom className='bg-slate-100 rounded p-2 text-black' onClick={addToDo} >Guardar Tarea</Buttom>

        {
          todos.map((todo, index) => {
            return(
              <Item key={`item-${index}`} text={todo} onDelete={() => {onDelete(index)}}/>
              // <article key={`todo-${index}`}>{todo}</article>
            )
          })
        }

      </div>

    </main>
  )
 }