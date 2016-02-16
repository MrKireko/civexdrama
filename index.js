var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var lastDrama = new Date("2016-02-16T06:11:10.000Z");
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