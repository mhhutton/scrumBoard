import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';

import DoingDeletePromptModal from './deleteModals/DoingDeletePromptModal.jsx'

function Doing({ doingList, setDoingList, deletePromptChecked,
  setDeletePromptChecked }) {
  const deleteDoingTask = (indexNum) => {
    const doingSplice = () => {doingList.splice(indexNum, 1)};

    doingSplice();
    setDoingList([...doingList]);
  };

  const handleDeletePromptCheck = (index) => {
    if (deletePromptChecked === false) {
      return (
        <DoingDeletePromptModal
            index={index}
            deleteDoingTask={deleteDoingTask}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
            handleDeletePromptCheck={handleDeletePromptCheck}
          />
      )
    } else if (deletePromptChecked === true) {
      return (
        <ClearIcon
          className="task-close-btn"
          onClick={ () => {deleteDoingTask(index)}}
        />
      )
    }
  };

  const mapDoingList = () =>(

    doingList.map((doingMsg, index) => (
      <div
        key={index}
        className="sticky-note"
      >
        <div className="sticky-note-top-cont">
          <div className="pushpin-cont">
            <div className="pushpin-pin"></div>
            <div className="pushpin-base"></div>
            <div className="pushpin-cylinder"></div>
            <div className="pushpin-top-shadow"></div>
            <div className="pushpin-top"></div>
          </div>
          { handleDeletePromptCheck(index) }
        </div>

        <div className="task-cont-msg">
        {doingMsg}
        </div>

      </div>
    ))
  );

  useEffect(() => {
    mapDoingList();
  }, [doingList]);

  return (
    <div className="activity-column">
      <div className="activity-column-header">
        <div className="activity-column-title">Doing</div>
      </div>

      <div className="activity-column-sticky-notes">
      {mapDoingList()}
      </div>

    </div>
  );
}

export default Doing;
