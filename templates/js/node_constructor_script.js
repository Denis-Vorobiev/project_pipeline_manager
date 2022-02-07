submit_btn = document.getElementById("submit_btn");
edit_btn = document.getElementById("edit_btn");

function get_data_from_constr() {
  var node_data = new Object();
  var node_data = {
    posX: document.getElementById("node_constructor").getBoundingClientRect(),
    short_desc: document.getElementById("short_desc").value,
    empl_name: document.getElementById("empl_name").value,
    empl_slot: document.getElementById("empl_slot").value,
    time: document.getElementById("t_value").value,
    money: document.getElementById("m_value").value,
  };
  console.log(node_data);
}

function turn_constr_to_node() {
  $("#input_help_text").remove();
  $("#short_desc").replaceWith(function () {
    return '<div class= "short_desc mb-auto" id = "short_desc"><h1>' + this.value + '</h1></div>';
  });
  $("#empl_name").replaceWith(function () {
    return '<div class= "exe_name"><h2>' + this.value + "</h2></div>";
  });
  $("#empl_slot").replaceWith(function () {
    return '<div class="exe_slot"><h2>' + this.value + "</h2></div>";
  });
  $("#t_value").replaceWith(function () {
    return '<div class="value h-auto"><h3>' + this.value + "</h3></div>";
  });
  $("#m_value").replaceWith(function () {
    return '<div class="value h-auto"><h3>' + this.value + "</h3></div>";
  });
}

function turn_node_to_editor(){
  
  $("#short_desc").replaceWith(function () {
    console.log($("#short_desc").value)
    return '<textarea type="text" class="form-control form-control-sm" placeholder="short description"id="short_desc">' ++ '</textarea>';
    
  });

}

submit_btn.onclick = function () {
  turn_constr_to_node();
};
edit_btn.onclick = function () {
  turn_node_to_editor();
};



