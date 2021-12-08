import React from 'react';

function Todo({ todoList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        To Do
      </div>
      <div>
        {todoList.map((todoMsg) => (
          <ul>{todoMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Todo;
