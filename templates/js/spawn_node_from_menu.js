


import {NodeInstantiatorClass} from './node_instantiate.js'

class qwe{
    constructor(){
    this.create_node_tab = document.getElementById('create_node')
    this.create_BasicNode_tab = document.getElementById('create_BasicNode')
    this.nodes_pool = new Array(20)
    asd()
    }

    asd(){
        this.create_BasicNode_tab.addEventListener('click', event => {
        console.log(event.pageX, event.pageY)    
        //nodes_pool.push(new BasicNode(event.clientX, event.clientY))
        contextMenu.classList.remove("visible")        
        let a  = new NodeInstantiatorClass(event.pageX, event.pageY,new Date().valueOf())
        nodes_pool.push(a)

    }}
    

}







