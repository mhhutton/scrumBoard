import React from 'react';

import { Button } from '@material-ui/core';

function Done({ doneList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Done
      </div>

      {doneList.map((doneMsg) => (
        <div className="task-container">
          <div className="task-cont-buttons">
            <Button>Update</Button>
            <Button>Delete</Button>
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
