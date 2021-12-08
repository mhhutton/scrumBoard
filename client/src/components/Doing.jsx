import React from 'react';

function Doing({ doingList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Doing
      </div>

        {doingList.map((doingMsg) => (
          <div className="task-container">
          <div className="task-cont-buttons">
            <buttton>Update</buttton>
            <buttton>Delete</buttton>
          </div>
          <div className="task-cont-msg">
          {doingMsg}
          </div>
        </div>
        ))}

    </div>
  );
}

export default Doing;
