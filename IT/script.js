var selector =document.getElementById('selector');
function alertTable() {
    var str = "";
    for (var i = 15; i < 26; i++) {
        str += i + "  " + i*i + "  " + i*i*i + "\n";
    }
    selector.innerHTML=str;
}

alertTable();