class Node {
    constructor(posX,posY) {
        this.id = new Date().valueOf()
        this.posX = posX
        this.posY = posY
        this.create_props_dict()
    }
    switch_mode() {
        console.log('Mode switched')
    }
    create_props_dict() {           //furure json file
        this.props_dict = {
            "id": this.id,
            "xPos": this.posX,
            "yPos": this.posY
        }

    }
    send_to_flask() { //заглушка по факту
        this.json_name = this.id + 'json'
        console.log(JSON.stringify(this.props_dict))
    }
    append_special_props(special_props){

        this.props_dict[this.node_type + " properties"] = special_props
    }


}

class BasicNode extends Node {
    constructor(posX,posY) {        
        super(posX,posY) 
        this.node_type = "basic node"
        this.description()
        this.tags()
        this.executor()
        this.resources()
        this.append_props()

    }

    description(short_description) {
        this.shortDescription = short_description
    }
    tags(tags = 'it design developing') {
        this.tag_array = tags.split(' ')

    }
    executor(name = 'Denis', slot = "pizdos") {
        this.name = name
        this.slot = slot
    }
    resources(time = 1, money = 20) {
        this.time = time
        this.money = money
    }
    append_props() {
        this.base_node_data = {
            "short description": this.shortDescription,
            "tags": this.tag_array,
            "executor": {
                "name": this.name,
                "slot": this.slot
            },
            "resources": {
                "money": this.money,
                "time": this.time
            }           

        }
        this.append_special_props(this.base_node_data)
    }
    basic_node_html =  0

}



