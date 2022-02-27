document.querySelector(`.btn`).addEventListener('click',button1)
function button1()
{
    fetch(`https://goweather.herokuapp.com/weather/visakhapatnam`)
    .then(response=>response.json())
    .then(data=>htmlrender(data))

    function htmlrender(data)
        {
             document.querySelector('.display').innerHTML=data.temperature
            document.querySelector('.wind').innerHTML=`wind:${data.wind}`
            document.querySelector('.tomorrow').innerHTML=`today:${data.forecast[0].temperature}`
            document.querySelector('.city').innerHTML=`${a}`
            document.querySelector('.sun').innerHTML =data.description
        }
    
}
