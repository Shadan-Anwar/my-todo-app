
import './App.css';
import {useState} from 'react'
import List from './components/List';
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

         <h1>Todo Apps </h1>
           <div className='TodoCont'>
             <input type='input' value={inputText} onChange={(e)=>setInput(e.target.value)} />
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




// import './App.css';
// import { useState } from 'react';
// import { FaTrash, FaCheck, FaEdit } from 'react-icons/fa';

// function App() {
//   const [text, setText] = useState([]);
//   const [inputText, setInput] = useState('');
//   const [editIndex, setEditIndex] = useState(-1);

//   function addNotes() {
//     if (editIndex === -1) {
//       setText((prevText) => [...prevText, { text: inputText, completed: false }]);
//     } else {
//       setText((prevText) =>
//         prevText.map((item, index) =>
//           index === editIndex ? { ...item, text: inputText } : item
//         )
//       );
//       setEditIndex(-1);
//     }
//     setInput('');
//   }

//   function deleteNote(index) {
//     setText((prevText) => prevText.filter((_, i) => i !== index));
//   }

//   function toggleComplete(index) {
//     setText((prevText) =>
//       prevText.map((item, i) =>
//         i === index ? { ...item, completed: !item.completed } : item
//       )
//     );
//   }

//   function editNote(index) {
//     setEditIndex(index);
//     setInput(text[index].text);
//   }

//   return (
//     <div className="App">
     
//       <div className="container">
//        <h1>Todo App</h1>
//         <div className="todo-list-container">
//           <div className="todo-list">
//             <input type="input" value={inputText} onChange={(e) => setInput(e.target.value)} />
//             <button onClick={addNotes}>{editIndex === -1 ? 'Add' : 'Update'}</button>
//           </div>
//           {text.map((item, index) => (
//             <div className="todo-item" key={index}>
//               <h3 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//                 {item.text}
//               </h3>
//               <div className="todo-icons">
//                 <FaTrash onClick={() => deleteNote(index)} />
//                 <FaCheck onClick={() => toggleComplete(index)} />
//                 <FaEdit onClick={() => editNote(index)} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;










