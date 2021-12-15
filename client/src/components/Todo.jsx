import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';

import DeletePromptModal from './DeletePromptModal.jsx'

function Todo({ todoList, setTodoList }) {
  const [deletePromptChecked, setDeletePromptChecked] = useState(false);

  const deleteTodoTask = (indexNum) => {
    const todoSplice = () => {todoList.splice(indexNum, 1)};

    todoSplice();
    setTodoList([...todoList]);
  };

  const handleDeletePromptCheck = (index) => {
    if (deletePromptChecked === false) {
      return (
        <DeletePromptModal
            index={index}
            deleteTodoTask={deleteTodoTask}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
            handleDeletePromptCheck={handleDeletePromptCheck}
          />
      )
    } else if (deletePromptChecked === true) {
      return (
        <ClearIcon
          className="task-close-btn"
          onClick={ () => {deleteTodoTask(index)}}
        />
      )
    }
  };

  const mapTodoList = () =>(

    todoList.map((todoMsg, index) => (
      <div
        key={index}
        className="task-container"
      >
        <div className="task-close-btn-cont">
          { handleDeletePromptCheck(index) }
        </div>

        <div className="task-cont-msg">
        {todoMsg}
        </div>

      </div>
    ))
  );

  useEffect(() => {
    mapTodoList();
  }, [todoList]);

  return (
    <div className="activity-column">
      <div className="column-header">
        To Do
      </div>

      <div>
      {mapTodoList()}
      </div>

    </div>
  );
}

export default Todo;
