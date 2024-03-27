const inputspeed =window.prompt("please input the speed of your vehicle");
const speed =parseInt(inputspeed);
const speedlimit = 70;
const Demeritpointsperkm = 5;

function speeddetector(speed){
    
if(speed < speedlimit){
    window.alert("ok");
}
else{
    const demeritpoints = Math.floor((speed - speedlimit)/Demeritpointsperkm);}
    if(demeritpoints > 12){
        window.alert("licence suspended");}
        else{
            window.alert("points:" + demeritpoints);
        
        }
    }

    