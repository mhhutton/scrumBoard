import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';

import TodoDeletePromptModal from './deleteModals/TodoDeletePromptModal.jsx'

function Todo({ todoList, setTodoList, deletePromptChecked,
  setDeletePromptChecked }) {
  const deleteTodoTask = (indexNum) => {
    const todoSplice = () => {todoList.splice(indexNum, 1)};

    todoSplice();
    setTodoList([...todoList]);
  };

  const handleDeletePromptCheck = (index) => {
    if (deletePromptChecked === false) {
      return (
        <TodoDeletePromptModal
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
        className="sticky-note"
      >
        <div className="sticky-note-top-cont">
          <div className="pushpin-cont">
            <div className="pushpin-pin"></div>
            <div className="pushpin-base"></div>
            <div className="pushpin-cylinder"></div>
            <div className="pushpin-top-shadow"></div>
            <div className="pushpin-top"></div>
          </div>
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
      <div className="activity-column-header">
        <div className="activity-column-title">To Do</div>
      </div>

      <div className="activity-column-sticky-notes">
      {mapTodoList()}
      </div>

    </div>
  );
}

export default Todo;
