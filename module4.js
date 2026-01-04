// if else else if 
if(12>13)
{
    console.log("true");
}
if(65)
{
    console.log("pattern");
}
else
{
    console.log("program");
}
// switch case 
switch (1)
{
    case 1:
        console.log("heyeye");
        break;
        case 2:
            console.log("case - 2");
            break;
            case 3:
                break;
                default:
}
// early return pattern 
function getVal(val)
{
    if(val<100) return 'A';
    else if(val<75) return 'B';
    else if(val<50) return 'C';
    else return 'D';
}
console.log(getVal(12));