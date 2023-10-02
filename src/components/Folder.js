import { useState } from "react";

function Folder({handleInsertNode, explorer }) {
  console.log(explorer);
  const [expand, setexpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handleNewFolder = (e,isFolder) => {
    e.stopPropagation();
    setexpand(true);
    setShowInput({
      visible:true,
      isFolder
    });

  };

  const onAddFolder=(e)=>{
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
      setShowInput({...showInput,visible:false});
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setexpand(!expand)}>
          <span>📂 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e,true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e,false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {
            showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder?"📂":"📃"}</span>
                <input 
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({...showInput,visible:false})}
                autoFocus
                className="inputContainer_input"></input>
              </div>
            )
          }
          {explorer.items.map((exp) => {
            return <Folder 
            handleInsertNode={handleInsertNode}
            explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃 {explorer.name}</span>;
  }
}

export default Folder;
