var cbills = [];
var mc = [];
var gxp = [];
var pt = [];
var cons = 0;
var ci = 0;
var trick = 0;
var bay = 0;
var grand = 0;
var other = 0;
$("tr td[class^='row_']").each(
    function(e){
        try {
            var arr = $(this).text().split(': ');
            var arr2 = arr[1].split(' ');
            var value = arr2[0].replace(/,/g,'');

            if ($(this).text().indexOf("C-Bills:")>=0) {
                cbills.push(value);    
            }
            else if ($(this).text().indexOf("GXP:")>=0) {
                gxp.push(value);    
            }
            else if ($(this).text().indexOf("MC:")>=0) {
                mc.push(value);    
            }
            else if ($(this).text().indexOf("Premium Time:")>=0) {
                pt.push(value);    
            }
            else if ($(this).text().indexOf("Consumables:")>=0) {
                cons+=1;
            }
            else if ($(this).text().indexOf("Cockpit Items:")>=0) {
                ci+=1;
            }
            else if ($(this).text().indexOf("Trick:")>=0) {
                trick+=1;
            }
            else if ($(this).text().indexOf("Mech' Bay:")>=0) {
                bay+=1;
            }
            else if ($(this).text().indexOf("Grand:")>=0) {
                grand+=1;
            }
            else {
                other+=1;
            }
        } catch(err) {
            return;
        }        
    }
);
$("tr td[class^='bonusRow_']").each(
    function(e){
        try {
            var arr = $(this).text().split(': ');
            var arr2 = arr[1].split(' ');
            var value = arr2[0].replace(/,/g,'');

            if ($(this).text().indexOf("C-Bills:")>=0) {
                cbills.push(value);    
            }
            else if ($(this).text().indexOf("GXP:")>=0) {
                gxp.push(value);    
            }
            else if ($(this).text().indexOf("MC:")>=0) {
                mc.push(value);    
            }
            else if ($(this).text().indexOf("Premium Time:")>=0) {
                pt.push(value);    
            }
            else if ($(this).text().indexOf("Consumables:")>=0) {
                cons+=1;
            }
            else if ($(this).text().indexOf("Cockpit Items:")>=0) {
                ci+=1;
            }
            else if ($(this).text().indexOf("Trick:")>=0) {
                trick+=1;
            }
            else if ($(this).text().indexOf("Mech' Bay:")>=0) {
                bay+=1;
            }
            else if ($(this).text().indexOf("Grand:")>=0) {
                grand+=1;
            }
            else {
                other+=1;
            }
        } catch(err) {
            return;
        }        
    }
);

var totalc = 0;
for (var i = 0; i < cbills.length; i++) {
    totalc += parseFloat(cbills[i]) << 0;
}
var totalg = 0;
for (var i = 0; i < gxp.length; i++) {
    totalg += parseFloat(gxp[i]) << 0;
}
var totalm = 0;
for (var i = 0; i < mc.length; i++) {
    totalm += parseFloat(mc[i]) << 0;
}
var totalpt = 0;
for (var i = 0; i < pt.length; i++) {
    totalpt += parseFloat(pt[i]) << 0;
}
var text=totalc +' C-Bills<br>'
 + totalg +' GXP<br>'
 + totalm+' MC<br>'
 + totalpt+' Days Premium Time<br>'
 + cons+'x Consumables<br>'
 + ci+'x Cockpit Items<br>'
 + trick+'x Tricks<br>'
 + bay+'x Mech Bays<br>'
 + grand+'x Grand Prize<br>'
 + other+'x Other Stuff';

$("body").append("<div style='position: fixed;bottom: 0px;right: 0px;color: white;background-color: black;'>"+text+"</div>");
