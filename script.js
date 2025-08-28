// heart function
document.getElementById('card-heart').addEventListener('click',function(){
    const heartValue = parseInt(document.getElementById('banner-heart').innerText)
    const newHeartvalue = heartValue + 1
    document.getElementById('banner-heart').innerText = newHeartvalue
})




// for call button adding event listener
// document.getElementById('btn-call').addEventListener('click',function(){
//     console.log('call button clicked')
// })