import React from 'react';

function Done({ doneList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Done
      </div>
      <div>
        {doneList.map((doneMsg) => (
          <ul>{doneMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Done;
