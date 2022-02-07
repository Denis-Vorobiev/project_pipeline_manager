// нужно создавать html объект ноды через js функции, так как так намного проще с ними взаимодействовать
// хотелось бы использовать паттерн фабрика. Есть класс инстантиатора ноды, который на вход получает тип ноды и позицию
// и инстантиирует данную ноду на данной позиции. Так же таким методом можно присваивать уникальные id html объектам ноды
// соответсвующий id ноды из node pool

import { sc as sc } from "./shortcuts.mjs";

let empl_name_classlist = "executor d-flex justify-content-between";

export class NodeInstantiatorClass {
  constructor(posX, posY, id) {
    this.id = id;
    this.posX = posX;
    this.posY = posY;
    this.createBaseCardDiv();
    document.getElementById("background").appendChild(this.base_card);
    this.createShortDescriptionDiv();
    this.createExecutorDiv();
    this.createResourcesDiv();
    this.createSubmitButton();
    this.createEditButton();
  }
  createNode() {}

  createBaseCardDiv() {
    this.base_card = document.createElement("div");
    this.base_card.id = "basse_card" + String(this.id);
    this.base_card.className = "main_sq";
    this.base_card.style =
      "left:" + String(this.posX) + "px;" + "top:" + String(this.posY) + "px; ";
  }

  createShortDescriptionDiv() {
    this.shortDescriptionDiv = document.createElement("div");
    this.shortDescriptionDiv.className = "short_desc mb-auto";
    this.textArea = document.createElement("textarea");
    this.textArea.className = "form-control form-control-sm";
    // this.textArea.type = 'text'
    this.textArea.placeholder = "short description";
    this.shortDescriptionDiv.append(this.textArea);
    this.base_card.appendChild(this.shortDescriptionDiv);
  }
  createTagsDiv() {}
  createExecutorDiv() {
    this.executorDiv = document.createElement("div");
    this.executorDiv.className = "executor d-flex justify-content-between";
    this.exeName = document.createElement("div");
    this.exeName.className = "exe_name align-middle";
    this.exeNameInput = document.createElement("input");
    this.exeNameInput.className = "form-control form-control-sm";
    this.exeNameInput.placeholder = "empl. name";
    this.exeSlot = document.createElement("div");
    this.exeSlot.className = "exe_slot";
    this.exeSlotInput = document.createElement("input");
    this.exeSlotInput.className =
      "form-control form-control-sm right_side_input";
    this.exeSlotInput.placeholder = "empl. slot";

    this.exeSlot.append(this.exeSlotInput);
    this.exeName.append(this.exeNameInput);

    this.executorDiv.appendChild(this.exeName);
    this.executorDiv.appendChild(this.exeSlot);

    this.base_card.appendChild(this.executorDiv);
  }

  createResourcesDiv() {
    this.resourcesDiv = sc.createDiv("mt-auto  recource_sq ");
    this.timeDiv = sc.createDiv(
      "time_sq d-flex  justify-content-between h-auto"
    );
    this.timeDivKey = sc.createDiv("key h-auto align-middle");
    this.timeDivKey.appendChild(sc.createHelement(3, "time"));
    this.timeDivValue = sc.createDiv("value h-auto ");
    this.timeDivValueInput = sc.createInput(
      "form-control right_side_input",
      "2h"
    );

    this.timeDivValue.appendChild(this.timeDivValueInput);
    this.timeDiv.appendChild(this.timeDivKey);
    this.timeDiv.appendChild(this.timeDivValue);
    this.resourcesDiv.appendChild(this.timeDiv);

    this.moneyDiv = sc.createDiv(
      "money_sq d-flex  justify-content-between h-auto"
    );
    this.moneyDivKey = sc.createDiv("key h-auto align-middle");
    this.moneyDivKey.appendChild(sc.createHelement(3, "money"));
    this.moneyDivValue = sc.createDiv("value h-auto ");
    this.moneyDivValueInput = sc.createInput(
      "form-control right_side_input",
      "120руб"
    );

    this.moneyDivValue.appendChild(this.moneyDivValueInput);
    this.moneyDiv.appendChild(this.moneyDivKey);
    this.moneyDiv.appendChild(this.moneyDivValue);
    this.resourcesDiv.appendChild(this.moneyDiv);

    this.base_card.appendChild(this.resourcesDiv);
  }
  createSubmitButton() {
    this.submitBtn = sc.createButton(
      "btn btn-primary input_submit_btn",
      "Submit"
    );
    this.base_card.appendChild(this.submitBtn);

    this.submitBtn.addEventListener("click", (e) => {
      let base_card_object_id = e.path[1].attributes.id.nodeValue;
      let current_card = document.getElementById(base_card_object_id);
      let inputs = current_card.getElementsByTagName("input");
      ;

      // let inputs_0 = sc.createDiv(empl_name_classlist,'','',inputs[0].value)
      let inputs_0_v = inputs[0].value
      inputs[0].remove()
      let a = current_card.getElementsByClassName('executor')
      console.log(sc.createDiv(empl_name_classlist,'','',inputs_0_v))
      this.a.appendChild(sc.createDiv(empl_name_classlist,'','',inputs_0_v))

      /*{
          return $('<div class ="' +
          empl_name_classlist +
          '">' +
          inputs[0].value +
          "</div>")
      }*/
        
       // empl name
    });
  }
  createEditButton() {
    this.editBtn = sc.createButton("btn btn-outline-light edit_btn", "edit");
    this.base_card.appendChild(this.editBtn);
  }
}
export function instantiateHTMLNode(posX, posY, id) {
  let nodeInstantiateObject = new NodeInstantiatorClass(posX, posY, id);
}
