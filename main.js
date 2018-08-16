
var count=0;
var choco_count =0;
var lem_count =0;

var sugar = Cookies.get('sugarCookie');
var choco = Cookies.get('chocoCookie');
var lemon = Cookies.get('lemonCookie');


var visited = Cookies.get('sugarCookie');
    if(!visited) {
        Cookies.set('sugarCookie',0);
        Cookies.set('chocoCookie',0);
        Cookies.set('lemonCookie',0);
    }

function Scountcookie() {
    count++;
    Cookies.set('sugarCookie',count);
    document.querySelector("#displaycount").innerHTML = "Sugar: "+ count;
}

function Ccountcookie() {
    choco_count++;
    Cookies.set('chocoCookie',choco_count);
    // console.log(Cookies.get('choco'));
    document.querySelector("#displaycount1").innerHTML = "Chocolate: "+ choco_count;
}

function Lcountcookie() {
    lem_count++;
    Cookies.set('lemonCookie',lem_count);
    document.querySelector("#displaycount2").innerHTML = "Lemon: "+ lem_count;
}
function total() {
    var all_total = parseInt(Cookies.get('sugarCookie'))+parseInt(Cookies.get('chocoCookie'))+parseInt(Cookies.get('lemonCookie'));    
    document.querySelector('#totalcount').innerHTML = "Total Cookies: " + all_total;
}

function reset() {
    count=0;
    choco_count=0;
    lem_count=0;
    Cookies.set('sugarCookie',0);
   // sugar = parseInt(Cookies.get('sugarCookie'));
    document.querySelector('#displaycount').innerHTML = "Sugar:";
    Cookies.set('chocoCookie',0);
    document.querySelector('#displaycount1').innerHTML = "Chocolate:";
    Cookies.set('lemonCookie',0);
    document.querySelector('#displaycount2').innerHTML = "Lemon:";
    // alert("nothing left");
    document.querySelector('#totalcount').innerHTML = "";
}

