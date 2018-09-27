let weather;
let api ='http://api.openweathermap.org/data/2.5/weather?q=';
let city='';
let key ='&APPID=5429d1db74ac4fde7e04ee6d40ceaf8a';
let units ='&units=metric';

const m1 = function() {
    const element = document.getElementById('y');
    return element.value;
}

const pcontent = function(str){
    const element = document.getElementById('city');
    return city;
    
 }
//////////////////////////////////
 



// const getclick = function(str) {
//     if(y!=''){
//         const element = document.getElementById('y').value;
//         document.getElementById
//         .innerText=city;

//     }
// }

const getclick=function(){
    city=document.getElementById('#y');
}





// const getclick = function(str) {
//     if(y!=''){
//         const element = document.getElementById('y');
//         return y;

//     }
// }

///////////////////////////////////////

// const getclick = function() {
//     const value = m1();
//     pcontent(value);
// }


        
        
        


let url = api + getclick() + key + units + '';

let getAsync = async function() {
    try {
        const response = await fetch(url);
        state = (await response.json())[0];
        getclick();
    } catch (err) {
        console.log('Ask the weather Man. :(');
        console.log(err);
    }
}

document.getElementById('sub')
        .addEventListener('click', getAsync);