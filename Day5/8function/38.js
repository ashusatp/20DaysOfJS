// ========= DEFAULT PARAMETERS =================

function calculatearea(width,height){
    height=height===undefined ? 1 : height; // if (height === undefined) then assigh height=1 as a default value
    const area =width*height ;
    return area;
}
const area = calculatearea(30);// as we can see here we are not passing any argument for height then height will take 1 as a default value :)
console.log(area);


// ======== MODERN METHOD =================
function calculate(width,height=1) // here we are assign default value to the height which is 1
{
    const area =width*height ;
    return area;
}
const newArea = calculatearea(30);// as we can see here we are not passing any argument for height then height will take 1 as a default value :)
console.log(newArea);

//  ================ NOTE ===================
// undefined * integer = NaN
// not a number