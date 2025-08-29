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

// function
function getElement(id){
    const element = document.getElementById(id)
    return element;
}
// for call button adding event listener
document.getElementById('btn-call').addEventListener('click',function(){
    const departmentName = document.getElementById('department-name').innerText
    const departmentPhoneNumber = document.getElementById('department-number').innerText
    alert(departmentName+' '+departmentPhoneNumber)
    const bannerCoin = document.getElementById('banner-coin').innerText
    const newBannerCoin = bannerCoin - 20
    document.getElementById('banner-coin').innerText = newBannerCoin

    // const updatedService = getElement('updated-service');
    const updatedService = document.getElementById('updated-service')
    //create div
    const newUpdatedService = document.createElement('div');
    newUpdatedService.innerHTML = `
         <div class="flex justify-between mt-8 bg-[#f5fff6] mx-1">
                   <div id="history" class="ml-8 text-[20px]">
                        <p id="updated-service" class="font-bold text-[25px]">Fire Service Number</p>
                        <p id="updated-number" class="text-[25px]">999</p>
                   </div> 
                   <div class="mr-8">
                        <p class="text-[20px] font-semibold">11:36:58 AM</p>
                   </div>
                </div>
    `

    //appendChild in updatedService
    updatedService.appendChild(newUpdatedService)
})









//  <div class="flex justify-between mt-8 bg-[#f5fff6] mx-1">
//                    <div id="history" class="ml-8 text-[20px]">
//                         <p id="updated-service" class="font-bold text-[25px]">Fire Service Number</p>
//                         <p id="updated-number" class="text-[25px]">999</p>
//                    </div> 
//                    <div class="mr-8">
//                         <p class="text-[20px] font-semibold">11:36:58 AM</p>
//                    </div>
//                 </div>