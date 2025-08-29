
const navHeart = document.getElementsByClassName('nav-heart')
for(let heart of navHeart){
    heart.addEventListener('click',function (){
        const heartValue = parseInt(document.getElementById('banner-heart').innerText)
        const newHeartValue = heartValue + 1
        document.getElementById('banner-heart').innerText = newHeartValue

    })
}


const cardCopyClass = document.getElementsByClassName('card-copy-class')
for(let cardCopy of cardCopyClass){
    cardCopy.addEventListener('click',async function(){
         const newNumber = cardCopy.parentNode.parentNode.children[2].innerText
         alert('number is copied'+" " + newNumber)
         const copyValue = parseInt(document.getElementById('copy-banner').innerText)
         const newCopyValue = copyValue + 1
          document.getElementById('copy-banner').innerText = newCopyValue

         try {
            await navigator.clipboard.writeText(newNumber);
            } catch (e) {
            alert('Failed to copy');
            console.error(e);
            }
    })
}

// traverse technique

const cartButtons = document.getElementsByClassName('cart-btn')
for(let cartBtn of cartButtons){
     
    cartBtn.addEventListener('click',function(){
        const bannerCoin = parseInt(document.getElementById('banner-coin').innerText)
        if(bannerCoin < 20){
            alert('coin is not sufficient')
            return;
        }
        const call = 'calling'
        const departmentName = cartBtn.parentNode.parentNode.children[0].innerText
        const departmentPhoneNumber = cartBtn.parentNode.parentNode.children[2].innerText
        const time = new Date().toLocaleTimeString()
        alert(call+' '+departmentName+' '+departmentPhoneNumber)
       const newBannerCoin = bannerCoin - 20
       document.getElementById('banner-coin').innerText = newBannerCoin
       

        const updatedService = document.getElementById('updated-service')
        // create div
    const newUpdatedService = document.createElement('div');
    newUpdatedService.innerHTML = `
         <div class="flex justify-between mt-8 bg-[#f5fff6] mx-1">
                   <div id="history" class="ml-8 text-[20px]">
                        <p  class="font-bold text-[15px]">${departmentName}</p>
                        <p  class="text-[20px]">${departmentPhoneNumber}</p>
                   </div> 
                   <div class="mr-8">
                        <p class="text-[15px] font-semibold">${time}</p>
                   </div>
                </div>
    `

    updatedService.appendChild(newUpdatedService)
    })
}

document.getElementById('clear-all').addEventListener('click', function(){
    const refreshId = document.getElementById('updated-service')
    refreshId.innerHTML = " "
})




