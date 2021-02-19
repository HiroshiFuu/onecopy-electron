import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAppReducer } from "../AppContext";
import styles from "./Item.module.scss";

const successAudio = new Audio('sound/success.mp3')

successAudio.addEventListener("ended", function() {
  console.log("audio ended");
  window.quitApp();
});

function Item({ item }) {
  const dispatch = useAppReducer();
  let itemPrompt = item.prompt;
  let itemCopy = item.copy;
  const [open, setOpen] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [copy, setCopy] = React.useState("");

  function deleteItem() {
    dispatch({ type: "DELETE_ITEM", item });
  }

  function editItem() {
    setOpen(true);
    setPrompt(itemPrompt);
    setCopy(itemCopy);
  }

  function playSuccessAudio() {
    successAudio.currentTime = 0;
    successAudio.play();
  }

  function handleTextClick(e) {
    const { copy } = e.currentTarget.dataset;
    // console.log('handleTextClick', e.currentTarget.dataset, copy);
    window.copyToClipboard(copy);
    playSuccessAudio();
  }

  const handleClose = () => {
    setOpen(false);
    setPrompt("");
    setCopy("");
  }

  const handleSave = () => {
    console.log("handleSave", prompt, copy);
    if (prompt !== null && prompt !== "") {
      const editedItem = { ...item, prompt: prompt, copy: copy };
      dispatch({ type: "UPDATE_ITEM", item: editedItem });
      setOpen(false);
    }
    setPrompt("");
    setCopy("");
  }

  const handlePromptChange = (v) => {
    // console.log('handlePromptChange', v);
    setPrompt(v);
    setCopy(v);
  }

  const handleCopyChange = (v) => {
    // console.log('handleCopyChange', v);
    setCopy(v);
  }

  return (
    <div className={styles.item} tabIndex="0">
      <div className={styles.itemName} data-prompt={itemPrompt} data-copy={itemCopy} onClick={handleTextClick}>{itemPrompt}</div>
      <div className={styles.buttons}>
        <button className={styles.delete} onClick={deleteItem} tabIndex="0"></button>
        <button className={styles.edit} onClick={editItem} tabIndex="0"></button>
      </div>
      {open ? (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
          disableBackdropClick
          disableEscapeKeyDown
        >
          <DialogTitle id="form-dialog-title">Edit Entry</DialogTitle>
          <DialogContent>
            <form noValidate autoComplete="off">
              <TextField
                autoFocus
                id="prompt"
                label="Prompt Text"
                type="text"
                value={prompt}
                fullWidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handlePromptChange(e.target.value)}
              />
              <TextField
                id="copy"
                label="Copy Text"
                type="text"
                value={copy}
                fullWidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handleCopyChange(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
        </Button>
            <Button onClick={handleSave} color="primary">
              Save
        </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

export default Item;
