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



// for call button adding event listener using id
// document.getElementById('btn-call').addEventListener('click',function(){
//     const departmentName = document.getElementById('department-name').innerText
//     const departmentPhoneNumber = document.getElementById('department-number').innerText
//     alert(departmentName+' '+departmentPhoneNumber)
//     const bannerCoin = document.getElementById('banner-coin').innerText
//     const newBannerCoin = bannerCoin - 20
//     document.getElementById('banner-coin').innerText = newBannerCoin

//     // const updatedService = getElement('updated-service');
//     const updatedService = document.getElementById('updated-service')
//     //create div
//     const newUpdatedService = document.createElement('div');
//     newUpdatedService.innerHTML = `
//          <div class="flex justify-between mt-8 bg-[#f5fff6] mx-1">
//                    <div id="history" class="ml-8 text-[20px]">
//                         <p  class="font-bold text-[25px]">${departmentName}</p>
//                         <p  class="text-[25px]">${departmentPhoneNumber}</p>
//                    </div> 
//                    <div class="mr-8">
//                         <p class="text-[20px] font-semibold">11:36:58 AM</p>
//                    </div>
//                 </div>
//     `

//     //appendChild in updatedService
//     updatedService.appendChild(newUpdatedService)
// })



// traverse technique
const cartButtons = document.getElementsByClassName('cart-btn')
// console.log(cartButtons)
for(let cartBtn of cartButtons){
    cartBtn.addEventListener('click',function(){
        const departmentName = cartBtn.parentNode.parentNode.children[0].innerText
        const departmentPhoneNumber = cartBtn.parentNode.parentNode.children[2].innerText
        const time = new Date().toLocaleTimeString()
        // console.log(departmentPhoneNumber)
        alert(departmentName+' '+departmentPhoneNumber)
         const bannerCoin = document.getElementById('banner-coin').innerText
       const newBannerCoin = bannerCoin - 20
       document.getElementById('banner-coin').innerText = newBannerCoin
       if(bannerCoin < 20){
        alert('coin is not sufficient')
        return
    }

        const updatedService = document.getElementById('updated-service')
        // create div
    const newUpdatedService = document.createElement('div');
    newUpdatedService.innerHTML = `
         <div class="flex justify-between mt-8 bg-[#f5fff6] mx-1">
                   <div id="history" class="ml-8 text-[20px]">
                        <p  class="font-bold text-[25px]">${departmentName}</p>
                        <p  class="text-[25px]">${departmentPhoneNumber}</p>
                   </div> 
                   <div class="mr-8">
                        <p class="text-[20px] font-semibold">${time}</p>
                   </div>
                </div>
    `

    updatedService.appendChild(newUpdatedService)
    })
}




// new Date().toLocaleTimeString()