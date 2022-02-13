import { instantiateHTMLNode } from "./node_instantiate.js";
import { Node,BasicNode,createBasicNode } from "./classes.js"

let create_node_tab = document.getElementById("create_node");
let create_BasicNode_tab = document.getElementById("create_BasicNode");


create_BasicNode_tab.addEventListener("click", (event) => {
  //console.log(event.pageX, event.pageY);
  //nodes_pool.push(new BasicNode(event.clientX, event.clientY))
  contextMenu.classList.remove("visible");
  let a = createBasicNode(
    event.pageX,
    event.pageY,
    
  );  
  
});
