import React, { useContext } from "react";
import NoteContext from "../Context/noteContext";

const FileTwo = () => {
  const { state, inputValue, isDataVisible } = useContext(NoteContext);
  console.log(state.education);
  console.log(isDataVisible);

  return (
    <div>
      {isDataVisible && (
        <p>
          FileTwo {state.education} {inputValue}
        </p>
      )}
    </div>
  );
};

export default FileTwo;
