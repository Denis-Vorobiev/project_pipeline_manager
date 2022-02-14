import { sc as sc } from "./shortcuts.mjs"
import { basicStyle as bs } from "./css_classes.js"



export class Node {
  constructor(posX, posY) {
    this.id = new Date().valueOf()
    this.posX = posX
    this.posY = posY
    this.create_props_dict()
  }
  switch_mode() {
    console.log("Mode switched")
  }
  create_props_dict() {
    //furure json file
    this.props_dict = {
      id: this.id,
      xPos: this.posX,
      yPos: this.posY,
    }
  }
  send_to_flask() {
    //заглушка по факту
    this.json_name = this.id + "json"
    console.log(JSON.stringify(this.props_dict))
  }
  append_special_props(special_props) {
    this.props_dict[this.node_type + " properties"] = special_props
  }
}

export class BasicNode extends Node {
  constructor(posX, posY) {
    super(posX, posY)
    this.node_type = "basic node"
    //функции создают поля внутри класса со значениями по умолчанию
    this.description()
    this.tags()
    this.executor()
    this.resources()
    this.append_props()

    this.createHTMLElement() //методы создает хтмл объекты
  }
  createHTMLElement() {
    this.createBaseCardDiv()
    this.createHeaderDiv()
    this.createShortDescriptionDiv()
    this.createExecutorDiv()
    this.createResourcesDiv()
    this.createSubmitButton()
    this.createEditButton()
    //добавляем хтмл объект в дом
  }

  description(shortDescription = "qwert") {
    this.shortDescription = shortDescription
  }
  tags(tags = "it design developing") {
    this.tagArray = tags.split(" ")
  }
  executor(name = "Denis", slot = "pizdos") {
    this.name = name
    this.slot = slot
  }
  resources(time = 1, money = 20) {
    this.time = time
    this.money = money
  }
  append_props() {
    this.base_node_data = {
      shortDescription: this.shortDescription,
      tags: this.tagArray,
      executor: {
        name: this.name,
        slot: this.slot,
      },
      resources: {
        money: this.money,
        time: this.time,
      },
    }
    this.append_special_props(this.base_node_data)
  }
  createBaseCardDiv() {
    this.baseCardDivPosition =
      "left:" + String(this.posX) + "px;" + "top:" + String(this.posY) + "px;"
    this.baseCardDiv = sc.createDiv(
      bs.baseCard,
      "basse_card" + String(this.id),
      this.baseCardDivPosition
    )
    this.startBaseCardStyle = this.baseCardDiv.classList
    this.baseCardDiv.draggable = true
    
    this.baseCardDiv.ondragend = ((e) => this.moveTo(e.clientX,e.clientY)
    )

    document.getElementById("background").appendChild(this.baseCardDiv)
  }
  createHeaderDiv() {
    this.headerDiv = sc.createDiv(bs.cardHeader)
    this.idDiv = sc.createDiv()    
    this.headerText = sc.createHelement(2, this.id)
    this.idDiv.append(this.headerText)
    this.removeBtn = sc.createButton(bs.removeBtn,'')
    this.headerDiv.append(this.removeBtn)
    this.headerDiv.append(this.idDiv)
    this.baseCardDiv.append(this.headerDiv)
    this.headerDiv.style.cursor = 'pointer'
    
    this.removeBtn.onclick = (() => this.removeNode())
    this.headerDiv.addEventListener("drag", function(event) {

    }, false);
    this.headerDiv.addEventListener("dragstart", function(event) {      
      this.baseCardDiv.style.opacity = .1;
    }, false);

    
  }
  moveTo(posX,posY){
    this.xPos = posX
    this.yPos = posY        
    this.baseCardDiv.style.left =posX + "px"
    this.baseCardDiv.style.top =posY + "px"
    
  }
  
  
  removeNode(){    
    this.baseCardDiv.remove()
  }



  createShortDescriptionDiv() {
    //input element
    this.shortDescriptionDiv = sc.createDiv(bs.shortDescription)
    this.textArea = sc.createTextArea(bs.textArea, "short description")
    this.shortDescriptionDiv.append(this.textArea)
    this.baseCardDiv.append(this.shortDescriptionDiv)
    //fact element
    this.shortDescriptionFact = sc.createHelement(1, this.shortDescription)
    this.shortDescriptionDiv.append(this.shortDescriptionFact)
    this.shortDescriptionFact.style = bs.hidden
  }
  createTagsDiv() {}

  createExecutorDiv() {
    this.executorDiv = sc.createDiv(bs.executorDiv)
    this.exeNameDiv = sc.createDiv(bs.allignMid)
    this.exeNameDivInput = sc.createInput(bs.exeNameDivInput, "empl.name")

    this.exeNameDivFact = sc.createHelement(2, this.name)

    this.exeNameDiv.append(this.exeNameDivInput)
    this.exeNameDiv.append(this.exeNameDivFact)
    
    this.exeNameDivFact.style = bs.hidden

    this.exeSlotDiv = sc.createDiv(bs.allignMid)
    this.exeSlotDivInput = sc.createInput(bs.exeSlotDivInput, "empl.slot")

    this.exeSlotDivFact = sc.createHelement(2, this.exeSlotDiv)
    this.exeSlotDivFact.style = bs.hidden
    
    this.exeSlotDiv.append(this.exeSlotDivInput)
    this.exeSlotDiv.append(this.exeSlotDivFact)
    

    this.executorDiv.appendChild(this.exeNameDiv)
    this.executorDiv.appendChild(this.exeSlotDiv)

    this.baseCardDiv.appendChild(this.executorDiv)
  }

  createResourcesDiv() {
    this.resourcesDiv = sc.createDiv(bs.resourcesDiv)
    this.timeDiv = sc.createDiv(bs.subResoDiv)
    this.timeDivKey = sc.createDiv(bs.timeDivKey)
    this.timeDivKey.append(sc.createHelement(3, "time"))
    this.timeDivValue = sc.createDiv(bs.resoDivValue)
    this.timeDivValueInput = sc.createInput(bs.resoDivValueInput, "2h")

    this.timeDivValue.append(this.timeDivValueInput)
    this.timeDivValueFact = sc.createHelement(2, this.time)
    this.timeDivValueFact.style = bs.hidden

    this.timeDivValue.append(this.timeDivValueFact)
    this.timeDiv.appendChild(this.timeDivKey)
    this.timeDiv.appendChild(this.timeDivValue)
    
    this.resourcesDiv.appendChild(this.timeDiv)

    this.moneyDiv = sc.createDiv(bs.subResoDiv)
    this.moneyDivKey = sc.createDiv(bs.moneyDivKey)
    this.moneyDivKey.appendChild(sc.createHelement(3, "money"))
    this.moneyDivValue = sc.createDiv(bs.resoDivValue)
    this.moneyDivValueInput = sc.createInput(bs.resoDivValueInput, "120")
    this.moneyDivValueFact = sc.createHelement(2, this.money)
    this.moneyDivValueFact.style = bs.hidden

    this.moneyDivValue.append(this.moneyDivValueFact)
    this.moneyDivValue.appendChild(this.moneyDivValueInput)
    this.moneyDiv.appendChild(this.moneyDivKey)
    this.moneyDiv.appendChild(this.moneyDivValue)
    
    this.resourcesDiv.appendChild(this.moneyDiv)

    this.baseCardDiv.appendChild(this.resourcesDiv)
  }
  switchMode(dest) {
    //dest определяет режим изменения

    if (dest === 0) {
      //textarea to fact
      this.textArea.style = bs.hidden
      this.shortDescription = this.textArea.value
      this.shortDescriptionFact.innerHTML = this.shortDescription
      this.shortDescriptionFact.style = bs.visible
    } else {
      //fact to textarea
      this.textArea.style = bs.visible
      this.shortDescriptionFact.style = bs.hidden
    }

    if (dest === 0) {
      //inputs to fact
      this.exeNameDivInput.style = bs.hidden
      this.exeNameDiv = this.exeNameDivInput.value
      this.exeSlotDivInput.style = bs.hidden
      this.exeSlotDiv = this.exeSlotDivInput.value
      this.timeDivValueInput.style = bs.hidden
      this.time = this.timeDivValueInput.value
      this.moneyDivValueInput.style = bs.hidden
      this.money = this.moneyDivValueInput.value
      
      this.exeNameDivFact.style = bs.visible
      this.exeNameDivFact.innerText = this.exeNameDiv
      this.exeSlotDivFact.style = bs.visible
      this.exeSlotDivFact.innerText = this.exeSlotDiv
      this.timeDivValueFact.style = bs.visible
      this.timeDivValueFact.innerText = this.time
      this.moneyDivValueFact.style = bs.visible
      this.moneyDivValueFact.innerText = this.money

      this.submitBtn.style = bs.hidden
      this.editBtn.style = bs.visible
      
    } else {
      //facts to input
      this.exeNameDivInput.style = bs.visible
      this.exeSlotDivInput.style = bs.visible
      this.moneyDivValueInput.style = bs.visible
      this.timeDivValueInput.style = bs.visible

      this.exeNameDivFact.style = bs.hidden
      this.exeSlotDivFact.style = bs.hidden
      this.timeDivValueFact.style = bs.hidden
      this.moneyDivValueFact.style = bs.hidden

      this.submitBtn.style = bs.visible
      this.editBtn.style = bs.hidden
    }
  }
  createSubmitButton() {
    this.submitBtn = sc.createButton(bs.submitBtn, "Submit")
    this.baseCardDiv.appendChild(this.submitBtn)

    this.submitBtn.onclick = (() => this.switchMode(0))
  }
  createEditButton() {
    this.editBtn = sc.createButton(bs.editBtn, "edit")
    this.editBtn.style = bs.hidden
    this.baseCardDiv.appendChild(this.editBtn)
    this.editBtn.onclick = (() => this.switchMode(1))
  }
}

export function createBasicNode(posX, posY) {
  new BasicNode(posX, posY)
  
  
}
let test = createBasicNode(200, 200)
