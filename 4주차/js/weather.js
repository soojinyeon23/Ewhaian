const API_KEY="114b6f6ea8f6673be73801ace38d88a9"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
	console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    //이렇게 하면 url을 클릭하면 연결되는데 url의 정보를 가져와야함
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
    });
    //url을 fetch해서 정보를 가져올 수 있음
    //promise임. 지금 당장 일어나는게 아니라 조금 기다려야지 일어남
    //weather은 array임
}
function onGeoError() {
	alert("Can't find you. No weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);