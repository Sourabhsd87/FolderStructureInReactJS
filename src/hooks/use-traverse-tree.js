const useTraverseTree=()=>{
    function insertNode(tree,folderid,item,isFolder){
        if( tree.id === folderid && tree.isFolder ){
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder,
                items:[]
            });
            return tree;
        }
        let latestNode=[]
        latestNode = tree.items.map((ob)=>{
            return insertNode(ob,folderid,item,isFolder);
        });
        return {...tree,items:latestNode};
    }

    return { insertNode };
};

export default useTraverseTree;