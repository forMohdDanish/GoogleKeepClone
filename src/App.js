import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import Footer from './components/Footer'
import View from './components/ViewArea'
import Input from './components/InputArea'

export default function App() {
  const [state, setstate] = React.useState([{
    id: uuidv4() ,
    title: "e 1",
    content: "hello world how are you 1"
  },
  {
    id: uuidv4() ,
    title: "ee 2",
    content: "hello world how are you 2"
  },
  {
    id: uuidv4(),
    title: "eee 3",
    content: "hello world how are you 3"
  }]);
  function del(e)
  {
    setstate(state.filter(todo=>todo.id!==e))
  }
  function add(e)
  {
    const newNote={id:uuidv4(),title: e.title,content: e.content};
    //console.log(e);
     setstate([...state,newNote]);
  }
  return (
    <div>
      <Header/>
      <Input Add={add}/>
      {state.map((e)=><View del={del} key={e.id} todo={e}/>)}
      <Footer/>
      
    </div>
  )
}
