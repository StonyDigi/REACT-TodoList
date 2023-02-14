
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {

  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, {todo:todo, time:time}]);
    setTodo("");
    setTime("");
  }

  console.log(todoList);
  
  return (
    <div className="App">
      <div className="container">
        <h1>React Todo-List</h1>

          <label>Feladat: </label>
          <input type="text" value={todo} onChange={(e) => {
            //Annak az inputmezőnek az értéke amiben írok
            setTodo(e.target.value);
          }}/>
          
          <label>Teljesítéshez szükséges idő: </label>
          <input type="text" value={time} onChange={(e) => {
            setTime(e.target.value);
          }}/>

          <button onClick={addTodo}>Hozzáadás</button>

      </div>

      {
        todoList.map(t => {
          //Itt kötődnek össze a propsok a Todo.js-ben szereplő html elemekkel.
          return <Todo todo={t.todo} time={t.time} />
        })
      }
    </div>
  );
}

export default App;