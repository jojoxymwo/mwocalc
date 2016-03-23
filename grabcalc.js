var cbills = 0;
var mc = 0;
var gxp = 0;
var pt = 0;
var cons = 0;
var ci = 0;
var trick = 0;
var bay = 0;
var grand = 0;
var other = 0;
$("tr td[class^='bonusRow_'], tr td[class^='row_']").each(
    function(e){
        try {
            var text = $(this).text();
            text = text.replace(',','');

            if (text.indexOf("C-Bills")>=0) {
                cbills+=parseFloat($.trim(text));    
            }
            else if (text.indexOf("MC")>=0) {
                mc+=parseFloat($.trim(text));    
            }
            else if (text.indexOf("GXP")>=0) {
                gxp+=parseFloat($.trim(text));    
            }
            else if (text.indexOf("Premium Time")>=0) {
                pt+=parseFloat($.trim(text));    
            }
            else if (text.indexOf("Strike")>=0 || text.indexOf("Coolant")>=0 || text.indexOf("UAV")>=0) {
                cons+=1;    
            }
            else if (text.indexOf("Flamer")>=0 || text.indexOf("Laser")>=0) {
                trick+=1;    
            }
            else if (text.indexOf("Green Beer")>=0) {
                grand+=1;    
            }
            else {
                ci+=1;
            }
        } catch(err) {
            return;
        }        
    }
);

var text=cbills +' C-Bills<br>'
 + gxp +' GXP<br>'
 + mc+' MC<br>'
 + pt+' Days Premium Time<br>'
 + cons+'x Consumables<br>'
 + ci+'x Cockpit Items<br>'
 + trick+'x Tricks<br>'
 + bay+'x Mech Bays<br>'
 + grand+'x Grand Prize<br>'
 + other+'x Other Stuff';

$("body").append("<div style='position: fixed;bottom: 0px;right: 0px;color: white;background-color: black;'>"+text+"</div>");
