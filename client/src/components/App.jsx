import React, {useEffect, useState } from 'react';

import Todo from './Todo.jsx';
import Doing from './Doing.jsx';
import Done from './Done.jsx';
import ColumnHeader from './ColumnHeader.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div className="body-container">
      <div className="header">
        <div className="title-text">Scrum Board</div>
      </div>
      <div className="main-container">
        <ColumnHeader
          todoList={todoList}
          doingList={doingList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
        <div className="column-container">
          <Todo todoList={todoList} />
          <Doing doingList={doingList} />
          <Done doneList={doneList} />
        </div>
      </div>
    </div>
  );
}

export default App;
