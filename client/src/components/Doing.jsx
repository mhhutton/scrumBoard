import React from 'react';

function Doing({ doingList }) {
  return (
    <div className="activity-column">
      <div className="column-header">
        Doing
      </div>
      <div>
        {doingList.map((doingMsg) => (
          <ul>{doingMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Doing;
