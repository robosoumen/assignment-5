// heart function
document.getElementById('card-heart').addEventListener('click',function(){
    const heartValue = parseInt(document.getElementById('banner-heart').innerText)
    const newHeartvalue = heartValue + 1
    document.getElementById('banner-heart').innerText = newHeartvalue
})
// copy function
document.getElementById('copy-card-id').addEventListener('click',function(){
    const copyValue = parseInt(document.getElementById('copy-banner').innerText)
    const newCopyValue = copyValue + 1
    document.getElementById('copy-banner').innerText = newCopyValue
})


// for call button adding event listener
document.getElementById('btn-call').addEventListener('click',function(){
    const departmentName = document.getElementById('department-name').innerText
    const departmentPhoneNumber = document.getElementById('department-number').innerText
    alert(departmentName+' '+departmentPhoneNumber)
    const bannerCoin = document.getElementById('banner-coin').innerText
    const newBannerCoin = bannerCoin - 20
    document.getElementById('banner-coin').innerText = newBannerCoin
})