import { NodeInstantiatorClass } from "./node_instantiate.js";

let create_node_tab = document.getElementById("create_node");
let create_BasicNode_tab = document.getElementById("create_BasicNode");
let nodes_pool = new Array(20);

create_BasicNode_tab.addEventListener("click", (event) => {
  console.log(event.pageX, event.pageY);
  //nodes_pool.push(new BasicNode(event.clientX, event.clientY))
  contextMenu.classList.remove("visible");
  let a = new NodeInstantiatorClass(
    event.pageX,
    event.pageY,
    new Date().valueOf()
  );
  nodes_pool.push(a);
});
