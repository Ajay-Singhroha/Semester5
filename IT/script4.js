
function onCLick(){

    alert(document.forms[1].children[0].value);
    alert("has Children? "+document.forms[1].children[0].hasChildNodes());
    alert("has siblings? "+document.forms[1].children[0].hasSiblings());

}
