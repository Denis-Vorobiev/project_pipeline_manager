
import {instantiateHTMLNode} from './node_instantiate.js'

const create_node_tab = document.getElementById('create_node')
const create_BasicNode_tab = document.getElementById('create_BasicNode')
//nodes_pool = new Array(20)



create_BasicNode_tab.addEventListener('click', event => {
    console.log(event.pageX, event.pageY)    
    //nodes_pool.push(new BasicNode(event.clientX, event.clientY))
    contextMenu.classList.remove("visible")
    instantiateHTMLNode(event.pageX, event.pageY,new Date().valueOf())

})




