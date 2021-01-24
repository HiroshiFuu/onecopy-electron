import React, { createContext, useContext, useReducer } from "react";
import { loadState, saveState } from "./local-storage";

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext)[0];
}

export function useAppReducer() {
  return useContext(AppContext)[1];
}

const trashAudio = new Audio('sound/trash.mp3');

export function playTrashAudio() {
    trashAudio.currentTime = 0;
    trashAudio.play();
}

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newState = { ...state, items: state.items.concat(action.item) };
      saveState(newState);
      return newState;
    }
    case "UPDATE_ITEM": {
      const newItems = state.items.map(i => {
        if (i.key === action.item.key) {
          console.log("UPDATE_ITEM", action.item)
          return Object.assign({}, i, {
            prompt: action.item.prompt,
            copy: action.item.copy,
            key: action.item.prompt + action.item.copy
          });
        }
        return i;
      });
      const newState = { ...state, items: newItems };
      saveState(newState);
      return newState;
    }
    case "DELETE_ITEM": {
      const newState = {
        ...state,
        items: state.items.filter(item => item.key !== action.item.key)
      };
      saveState(newState);
      playTrashAudio();
      return newState;
    }
    default:
      return state;
  }
};

export function AppStateProvider({ children }) {
  let initialState = loadState();

  if (initialState === undefined) {
    initialState = {
      items: []
    };
  }

  saveState(initialState);

  const value = useReducer(appStateReducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
