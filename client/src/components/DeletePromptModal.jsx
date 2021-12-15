import React, { useState } from 'react';

import { Button, Dialog, DialogActions,
Typography, Checkbox
} from '@material-ui/core';

import ClearIcon from '@mui/icons-material/Clear';

function DeletePromptModal({ deleteTodoTask, index, deletePromptChecked, setDeletePromptChecked }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogCancel = () => {
    setOpen(false);
    setChecked(false);
  };

  const handleDialogDelete = () => {
    setOpen(false);
    setDeletePromptChecked(checked);
  };

  const handleCheck = () => {
    setChecked(event.target.checked);
  };

  return (
    <div className="delete-prompt">

        <ClearIcon
          className="task-close-btn"
          onClick={handleDialogOpen}
        />

      <Dialog className="add-activity-dialog" open={open} onClose={handleDialogCancel}>
        <Typography>Are you sure you want to delete this task?</Typography>
        <div className="checkbox-cont">
          <Checkbox
            checked={checked}
            onChange={handleCheck}
          />
          <div>Don't Ask me this again.</div>
        </div>

        <DialogActions>
          <Button onClick={handleDialogCancel} color="primary">
            Cancel
          </Button>
          <Button

            onClick={() => { deleteTodoTask(index); handleDialogDelete(); }}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeletePromptModal;
