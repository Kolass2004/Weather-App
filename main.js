const API_KEY = ''; // api key from openweather website
const btn = document.getElementById('btn');

// geolocation fetch
btn.addEventListener('click',function(){
  const local = document.getElementById('loc');
  const city = local.value.trim();
  if (!city.length) {
    alert('Please Enter the location, and try again')
  }
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
  fetch(geoUrl).then(res=>res.json()).then(data=>{
    const lat = data[0].lat;
    const lon = data[0].lon;
    
    
    app(lat,lon);
    
  })})
  
  
  
    // weather fetch
const app =(lat,lon)=>{
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  
  fetch(weatherUrl).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
    let temp = data.main.temp;
    temp = parseInt(temp)- 273;
    
    document.getElementById('temp').innerHTML = temp+' '+ '°c';
      document.getElementById('c_loc').innerHTML = data.name;
let ico = data.weather[0].icon
      
      let iconUrl =`https://openweathermap.org/img/wn/${ico}@2x.png`;
      
      
     let doImg = document.createElement('img')
     doImg.src = iconUrl
    
    
    let contain = document.getElementById('iconw');
    contain.appendChild(doImg);
  })



}
 
