 /*
    *Lock page by JavaScript
	*https://github.com/attackeralireza
	*CopyRight 2020 
*/
function disableselect(e) {
    return false
}

function reEnable() {
    return true
}

document.onselectstart = new Function("return false")
if (window.sidebar) {
    document.onmousedown = disableselectdocument.onclick = reEnable
}
var message = "";

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false")
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
});
window.onbeforeunload = function (e) {
    e.preventDefault();
    e.returnValue = 'Really want to quit the game?';
}
document.onkeydown = function (e) {
    e = e || window.event;
    if (!e.ctrlKey) return;
    var code = e.which || e.keyCode;
    switch (code) {
        case 83:
        case 17:
        case 85:
        case 87:
        case 123:
            e.preventDefault();
            e.stopPropagation();
            break;
    }
}