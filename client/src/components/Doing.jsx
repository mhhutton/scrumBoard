import React from 'react';

import { Button } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';


function Doing({ doingList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Doing
      </div>

      {doingList.map((doingMsg) => (
        <div className="task-container">
          <div className="task-close-btn-cont">
            <ClearIcon
              className="task-close-btn"
            />
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
