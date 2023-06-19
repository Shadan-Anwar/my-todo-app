
import './App.css';
import {useState} from 'react'
import List from './components/List';
import Head from './components/Head';
import { FaTrash, FaCheck, FaEdit } from 'react-icons/fa';

function App() {

 const [node,setNode]=useState([]);
 const [inputText,setInput]=useState('');
 const [editText,setEditText]=useState(-1);

  function AddNotes()
  {
    if(editText=== -1)
    {
      const newArray = [...node ,{text : inputText , completed : false} ];
      setNode(newArray);
      setInput('')

    }
    else{
      const UpdatedArray= node.map((item,index)=> ( index === editText ? {...item , text :inputText} : item))
      setNode(UpdatedArray)
      setEditText(-1)
    }
    setInput('')
    

    //setText((preState)=>[...preState, inputText]);
  }

  function Remove_Item(item)
  {
     let Updated_Array= node.filter((element)=> element !== item)
     setNode(Updated_Array);
  }

  function Update(index)
  {
    setInput(node[index].text)
    setEditText(index)
  }

  function FinishTask(index)
  {
    let Finished = node.map((item,i)=> (i===index ? {...item , completed : !item.completed } : item) )
    setNode(Finished)

  }
  
  return (
    <div className="App">

         <div className='MainCont'>
            <div className='head'>
              <Head/>
            </div>
            <div className='TodoCont'>
              <input type='input' value={inputText} placeholder='Enter a Todo...' onChange={(e)=>setInput(e.target.value)} />
              <button className='AddButton' onClick={AddNotes}>{editText===-1 ? 'Add' : 'Upd'}</button>
            </div>
           {
            node.map((element,index)=>(
                  <div className='MainList'>
                       <p style={{ textDecoration: element.completed ? 'line-through' : 'none' }}>{element.text}</p>
                     <div className='ListButton'>

                          {/* <button onClick={function(){Remove_Item(element)}}> Delete</button>
                          <button onClick={()=>{Update(index)}}>Update</button>
                          <button onClick={()=> FinishTask(index)}>{element.completed ? 'InComplete' : 'Complete'}</button> */}
                          <FaTrash onClick={() => Remove_Item(element)} />
                          <FaCheck onClick={() => FinishTask(index)} />
                          <FaEdit onClick={() => Update(index)} />

                     </div>
                  </div>
             ))}
         </div>
          
    </div>
  );
}

export default App;










