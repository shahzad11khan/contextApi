import "./App.css";
import NoteState from "./Context/noteState";
import FileOne from "./Components/FileOne";
import FileTwo from "./Components/FileTwo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
        <Routes>
          {" "}
          <Route path="/" element={<FileOne />} />
          <Route path="/filetwo" element={<FileTwo />} />
          {/* <FileOne />
        <FileTwo /> */}
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
