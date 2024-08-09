import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isDataVisible, setIsDataVisible] = useState(false);
  const state = {
    name: "shahzad khan",
    education: "BSCS",
  };
  return (
    <NoteContext.Provider
      value={{
        state,
        inputValue,
        setInputValue,
        isDataVisible,
        setIsDataVisible,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
