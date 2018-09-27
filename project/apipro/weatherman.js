let weather;
let api ='http://api.openweathermap.org/data/2.5/weather?q=';
// let city='';
let key ='&APPID=5429d1db74ac4fde7e04ee6d40ceaf8a';
let units ='&units=metric';






// const m1 = function() {
//     const element = document.getElementById('y');
//     return element.value;


// }



let pcontent = function() {
    // console.log(state);
    // input=select('#y');///////////////////////////////////////////////////////////
    const name = document.getElementById('y');
    
    
    // const mainContent = document.getElementById('sub');
    
    
////////////////////////////////////////////////////////////////
    // $("show").html(widget);
    // $("y"). val('');
    return name.value;
}
// function show(data){
// return "<h3><strong>weather</strong>:"+ data.weather[0],main +"</h3>"

// }

let url = api + pcontent() + key + units + '';

let getAsync = async function() {
    try {
        const response = await fetch(url);
        state = (await response.json())[0];
        pcontent();
    } catch (err) {
        console.log('Ask the weather Man. :(');
        console.log(err);
    }
}

document.getElementById('sub')
        .addEventListener('click', getAsync);



