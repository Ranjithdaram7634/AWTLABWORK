async function display(){
    const state=document.getElementById("state");
    const url="https://api.openweathermap.org/data/2.5/weather?q="+state.value+"&appid=a1915f18020ad1932781fb6313e33c7d&units=metric";
    const response=await fetch(url);
    var data=await response.json();
        console.log(data);
        let {main:{temp,temp_min,temp_max}}=data;
    console.log("Temparature:"+temp);
    console.log("maximum temparature:"+temp_max);
    console.log("minimum temparature:"+temp_min);

  


    }

