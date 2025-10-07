
// require(dotenv).config()
// process.env.APIKEY
//tried to hide apikey, Working on hiding the API key 

// document.querySelector('button').addEventListener('click',getSpacePic )

//Dont commit api key to github, for testing only(classroom setting) 
const APIKEY='207f1d25d1ac455b8ac21435250710'

function submitInfo(){
    const inputText = document.querySelector('input').value

    // const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inputText}`
    const url = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${inputText}&aqi=no`


    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
            document.querySelector('span').innerText = `The american temperature in ${inputText} is ${data.current.temp_f}`;
            // document.querySelector('h3').innerText = data.explanation;

   
                
    
            // document.querySelector('img').src = data.url

            //will come back to style

           

})
.catch(err => {
    console.log(`error ${err}`)
});

}

//issue pull request when finshed
