import React from 'react';

import { Button } from '@material-ui/core';

function Todo({ todoList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        To Do
      </div>

      {todoList.map((todoMsg) => (
        <div className="task-container">
          <div className="task-cont-buttons">
            <Button>Update</Button>
            <Button>Delete</Button>
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
