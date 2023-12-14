
async function GetData() {
    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=niort&units=imperial&lang=fr&appid=baa5a7b30cbcba0741d04465b29f55a1');
    console.log(response);
    const data= await response.json();
    console.log(data);
    name=data.name;
    cloud=data.weather[0].main;
    temp=Math.round((data.main.temp - 32) * 5/9);
    country=data.sys.country;
    humidity=data.main.humidity;
    wind=data.wind.speed;
    time = "WIND " +"<br>"+ wind +" km/h";
    console.log(temp);
    console.log(cloud);
    console.log(name);
    console.log(country);
    console.log(humidity);
    console.log(wind);
    document.getElementById('wind').innerHTML= time;
    document.getElementById('degree').innerHTML="TEMP." +"<br>"+ temp + " \u00B0C<br>";
    document.getElementById('top').innerHTML=name +", "+ country;
    document.getElementById('button').innerHTML=cloud + "<br>"+ "Humidity "+ humidity + "%<br>";
    if (cloud == "Clear"){
       document.getElementById('photo').innerHTML= "<img src="+'images/rainy.png'+" />";
    } else {
        document.getElementById('photo').innerHTML= "<img src="+'images/ete.png'+" />";
    }
}
function time() {
    var currentdate = new Date();
    var body = document.getElementsByTagName('body')[0];
    const hour = currentdate.getHours();
    //const hour = 12;
    if (hour >= 17){
        body.style.backgroundColor = "black";
    } else if (hour > 6){
        body.style.backgroundColor = "white";
    }
    console.log(hour);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var currentdate = new Date();
    var datetime = days[currentdate.getDay()] +" " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/"
                    + currentdate.getFullYear();
    document.getElementById('time').innerHTML= datetime+"<br/>";

}
