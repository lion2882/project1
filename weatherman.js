let weather;
let api ='http://api.openweathermap.org/data/2.5/weather?q=';
let city;
let key ='&APPID=5429d1db74ac4fde7e04ee6d40ceaf8a';
let units ='&units=';
let uni;
let urt ;
let state;
let humidity;
let temp;
let description;
let icon;

const getclick=function(){
    city=document.getElementById('y').value;
    uni=document.getElementById('unitsid').value;
    urt = api + city + key + units + uni+'';
    console.log(urt);  
}



let getAsync = async function() {
    try {
        const response = await fetch(urt);
        state = (await response.json());
        console.log(state);

        
        const hm = document.getElementById('hum');
        const tp = document.getElementById('tem');
        const nm = document.getElementById('NAM');
        const nd = document.getElementById('WI');
        const ty = document.getElementById('DI');
        
        nm.innerText = state.name;
        hm.innerText = state.weather[0].description;
        tp.innerText = state.visibility;
        nd.innerText = state.wind.speed;
        ty.innerText = state.main.humidity;
        


    } catch (err) {
        console.log('Ask the weather Man. :(');
        console.log(err);
    }
}

document.getElementById('sub')
        .addEventListener('click', getAsync);
