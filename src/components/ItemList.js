import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAppReducer, useAppState } from "../AppContext";
import Item from "./Item";
import styles from "./ItemList.module.scss";

function ItemList() {
  const dispatch = useAppReducer();
  const { items } = useAppState();
  const [open, setOpen] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [copy, setCopy] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setPrompt("");
    setCopy("");
  }

  const handleSave = () => {
    console.log("handleSave", prompt, copy)
    if (prompt !== "" && copy !== "") {
      const newItem = {
        prompt: prompt,
        copy: copy,
        key: prompt + copy
      };
      if (!!newItem.prompt.trim() && !!newItem.copy.trim()) {
        dispatch({ type: "ADD_ITEM", item: newItem });
      }
      setOpen(false);
    }
    setPrompt("");
    setCopy("");
  }

  const handlePromptChange = (v) => {
    // console.log('handlePromptChange', v)
    setPrompt(v);
    setCopy(v);
  }

  const handleCopyChange = (v) => {
    // console.log('handleCopyChange', v)
    setCopy(v);
  }

  return (
    <div className="item-list">
      {items.length > 0 ? (
        <>
          {items.map(item => {
            return <Item item={item} key={item.key}></Item>;
          })}
        </>
      ) : null}

      <div className={styles.button}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add New Entry
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
          disableBackdropClick
          disableEscapeKeyDown
        >
          <DialogTitle id="form-dialog-title">Add New Entry</DialogTitle>
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
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default ItemList;
