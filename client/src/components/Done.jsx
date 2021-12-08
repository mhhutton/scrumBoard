import React from 'react';

function Done({ doneList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Done
      </div>

        {doneList.map((doneMsg) => (
          <div className="task-container">
          <div className="task-cont-buttons">
            <buttton>Update</buttton>
            <buttton>Delete</buttton>
          </div>
          <div className="task-cont-msg">
          {doneMsg}
          </div>
        </div>
        ))}

    </div>
  );
}

export default Done;
