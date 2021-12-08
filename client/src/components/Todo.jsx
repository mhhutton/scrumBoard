import React from 'react';

function Todo({ todoList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        To Do
      </div>

      {todoList.map((todoMsg) => (
        <div className="task-container">
          <div className="task-cont-buttons">
            <buttton>Update</buttton>
            <buttton>Delete</buttton>
          </div>
          <div className="task-cont-msg">
          {todoMsg}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
