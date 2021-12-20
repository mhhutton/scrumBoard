import React, {useEffect, useState } from 'react';

import Todo from './Todo.jsx';
import Doing from './Doing.jsx';
import Done from './Done.jsx';
import ColumnHeader from './ColumnHeader.jsx';

import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [todoList, setTodoList] = useState([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
  ]);
  const [doingList, setDoingList] = useState(['aaa','bbb','ccc']);
  const [doneList, setDoneList] = useState(['aaa','bbb','ccc']);
  const [deletePromptChecked, setDeletePromptChecked] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <div className="body-container">
      <div className="header">
        <div className="title-text-cont">
          <img
            src="daily-text.png"
            className="daily-text"
          />
          <img
            src="scrum-text.png"
            className="scrum-text"
          />
        </div>
        <div id="menu-icon-btn"> <MenuIcon /> </div>
        <div className="header-bg"></div>
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
        <div className="activity-columns-container">
          <Todo
            todoList={todoList}
            setTodoList={setTodoList}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
          />
          <Doing
            doingList={doingList}
            setDoingList={setDoingList}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
          />
          <Done
            doneList={doneList}
            setDoneList={setDoneList}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
