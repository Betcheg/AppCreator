function getThemeBetcheg() {

    var div = '<div id="betcheg_title">APP TITLE</div>';
    div += '<div id="betcheg_menu_container">This | is | a | menu | with | tabs</div>';
    div += '<div id="betcheg_block_container">'
    // Let's expand the text a bit
    for (var i=0; i<100; i++){
    div += 'Here is the main text of your app ';
    }
    
    div += '</div>';
    return div;
}

function getFormBetcheg(){
    var form = 'Title: <input id="input_titre" type="text"/>';
    form += '<button id="btn_input_titre" >ok</button>';
    form += "<br><br>";
    form += 'Main: <textarea id="input_main_text"/> ';
    form += '<button id="btn_input_main_text">ok</button>';
    form += "<br>";
    return form;
}

$(document).on('click', '#btn_input_titre', function() {
     $("#betcheg_title").text($("#input_titre").val()); 
});


$(document).on('click', '#btn_input_main_text', function() {
     $("#betcheg_block_container").text($("#input_main_text").val()); 
});
