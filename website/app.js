/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

/***************Html element*****************/
let zipCode = document.getElementById('zip');
let date = document.getElementById('date');
let temp = document.getElementById('temp');
let feelings = document.getElementById('feelings');
let content = document.getElementById('content');
let genrate = document.getElementById('generate');


genrate.addEventListener("click", async()=>{
    console.log(zipCode.value)
    await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},us&appid=70c759892c1716317d2a734ef159b235`)
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        fetch("/",{
            method:"POST",
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
    })
    })
    .then(  
        updateUI()
        )
    
})

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        date.innerHTML = `date : ${ newDate}`;
        content.innerHTML = feelings.value;
        temp.innerHTML = ` temperature : ${ allData[0].temp}`;

    }catch(error){
        console.log("error", error);
    }
}