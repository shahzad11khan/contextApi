import React, { useContext } from "react";
import NoteContext from "../Context/noteContext";
import { useNavigate } from "react-router-dom";

const FileOne = () => {
  //   const nm = useContext(NoteContext);
  //   console.log(nm);
  const { state, setInputValue, setIsDataVisible } = useContext(NoteContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlesubmit = () => {
    setIsDataVisible(true);
    navigate("/FileTwo");
  };
  return (
    <>
      FileOne {state.name}{" "}
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button onClick={handlesubmit}>click me</button>
    </>
  );
};

export default FileOne;
