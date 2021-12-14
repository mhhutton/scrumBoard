import React, {useEffect, useState } from 'react';

import Todo from './Todo.jsx';
import Doing from './Doing.jsx';
import Done from './Done.jsx';
import ColumnHeader from './ColumnHeader.jsx';

function App() {
  const [todoList, setTodoList] = useState(['aaa','bbb','ccc']);
  const [doingList, setDoingList] = useState(['aaa','bbb','ccc']);
  const [doneList, setDoneList] = useState(['aaa','bbb','ccc']);

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
          <Todo todoList={todoList} setTodoList={setTodoList} />
          <Doing doingList={doingList} />
          <Done doneList={doneList} />
        </div>
      </div>
    </div>
  );
}

export default App;
