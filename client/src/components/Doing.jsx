import React from 'react';

import { Button } from '@material-ui/core';

function Doing({ doingList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Doing
      </div>

      {doingList.map((doingMsg) => (
        <div className="task-container">
          <div className="task-cont-buttons">
            <Button>Update</Button>
            <Button>Delete</Button>
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
