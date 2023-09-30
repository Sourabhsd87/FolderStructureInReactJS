import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";

export default function App() {
  const [explorerData, setexplorerData] = useState(explorer);

  //console.log(explorerData);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
