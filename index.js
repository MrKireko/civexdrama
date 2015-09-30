var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var lastDrama = new Date("2015-09-30T00:34:52.000Z");
var today = new Date();

var diffDays = Math.floor(Math.abs((lastDrama.getTime() - today.getTime())/(oneDay)));

console.log(lastDrama);
console.log(today);
console.log(diffDays);

$(document).ready(function(){
    $("#days").html(diffDays);
    
    if (diffDays != 1){
        $("#s").html("s");
    }
});