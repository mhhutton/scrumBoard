import React from 'react';

import { Button } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';


function Done({ doneList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Done
      </div>

      {doneList.map((doneMsg) => (
        <div className="task-container">
          <div className="task-close-btn-cont">
            <ClearIcon
              className="task-close-btn"
            />
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
