import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import { Input } from '@material-ui/core';

import DoneDeletePromptModal from './deleteModals/DoneDeletePromptModal.jsx'


function Done({ doneList, setDoneList, deletePromptChecked,
  setDeletePromptChecked  }) {
  const deleteDoneTask = (indexNum) => {
    const doneSplice = () => {doneList.splice(indexNum, 1)};

    doneSplice();
    setDoneList([...doneList]);
  };

  const handleDeletePromptCheck = (index) => {
    if (deletePromptChecked === false) {
      return (
        <DoneDeletePromptModal
            index={index}
            deleteDoneTask={deleteDoneTask}
            deletePromptChecked={deletePromptChecked}
            setDeletePromptChecked={setDeletePromptChecked}
            handleDeletePromptCheck={handleDeletePromptCheck}
          />
      )
    } else if (deletePromptChecked === true) {
      return (
        <ClearIcon
          className="task-close-btn"
          onClick={ () => {deleteDoneTask(index)}}
        />
      )
    }
  };

  const mapDoneList = () =>(

    doneList.map((doneMsg, index) => (
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
        <Input
          className="sticky-note-msg"
          defaultValue={doneMsg}
          multiline
          maxRows={15}
          inputProps={{ 'aria-label': 'naked', maxLength: 250, style: {padding: 8}}}
          // onChange={(event) => {
          //   setDoneMsg(event.target.value)
          // }}
        />
      </div>
    ))
  );

  useEffect(() => {
    mapDoneList();
  }, [doneList]);

  return (
    <div className="activity-column">
      <div className="activity-column-header">
        <div className="activity-title">
          <img
            src="done-text.png"
            className="activity-title-text"
          />
        </div>
        <div className="activity-column-header-bg"></div>
      </div>

      <div className="activity-column-sticky-notes">
      {mapDoneList()}
      </div>

    </div>
  );
}

export default Done;
