import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  //console.log(explorerData);
  const handleInsertNode = (folderid,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderid,item,isFolder);

    setexplorerData(finalTree);
  }
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
