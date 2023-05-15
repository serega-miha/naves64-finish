//переменные для ползунков калькулятор
const dlinaInput = document.querySelector('#dlina-input');
const dlinaRange = document.querySelector('#dlina-range');
const shirinaInput = document.querySelector('#shirina-input');
const shirinaRange = document.querySelector('#shirina-range');
//переменная для расчет площади
const inputsAll = document.querySelectorAll('input');
const basePrice = 4500;

const radioKrovlya = document.querySelectorAll('input[name="krovlya"]');
const radioFerma = document.querySelectorAll('input[name="ferma"]');

const totalSquare = document.querySelector('#total-square');
const totlaPriceElement = document.querySelector('#total-price');



const materialPrice = document.querySelector('#material');
const rashodMatPrice = document.querySelector('#rashodMat');
const proizvodPrice = document.querySelector('#proizvod');
const montajPrice = document.querySelector('#montaj');
const dostavkaPrice = 3500;
const skidkaPrice = document.querySelector('#skidka');
const finishPrice = document.querySelector('#finish-price');
const finalPrice = document.querySelector('#final-price');



//функции для ползунков калькулятор
dlinaRange.addEventListener('input', function(){
    dlinaInput.value = dlinaRange.value;
})
dlinaInput.addEventListener('input', function(){
    dlinaRange.value = dlinaInput.value;
})
shirinaRange.addEventListener('input', function(){
    shirinaInput.value = shirinaRange.value;
})
shirinaInput.addEventListener('input', function(){
    shirinaRange.value = shirinaInput.value;
})


//===============================================================
function calcSquare (){
    let ploshad = parseFloat(dlinaRange.value) * parseFloat(shirinaRange.value)
    

    for (const radio of radioKrovlya){
        if(radio.checked){
            radioKrovlyaValue = parseFloat(radio.value);
        }
    }
    for (const radio of radioFerma){
        if(radio.checked){
            radioFermaValue = parseFloat(radio.value);
        }
    }
    let totalPrice = (basePrice * ploshad * radioKrovlyaValue * radioFermaValue)+dostavkaPrice;
    let totalSkidka = totalPrice * 0.03;
    const formatter = new Intl.NumberFormat('ru');
    totlaPriceElement.innerText = formatter.format(totalPrice);


    totalSquare.innerText = ploshad;
    materialPrice.innerText = formatter.format(totalPrice*0.49);
    rashodMatPrice.innerText = formatter.format(totalPrice*0.08);
    proizvodPrice.innerText = formatter.format(totalPrice*0.3);
    montajPrice.innerText = formatter.format(totalPrice*0.13);
    skidkaPrice.innerText = formatter.format(totalSkidka);
    finishPrice.innerText = formatter.format(totalPrice - totalSkidka);
    finalPrice.innerText = formatter.format(totalPrice - totalSkidka);
    

}
calcSquare ();

for(const item of inputsAll){
    item.addEventListener('input', function(){
        calcSquare();
        
    })
}




    //   const material = document.querySelector('.material');

    //   document.addEventListener("click",clickMaterials);

    //   function clickMaterials(event){
    //     if ( event.target.closest('.material')){
    //         material.classList.toggle('active');
    //     }
    //   }


//Добавление класса active======================================================================
    // var materials = document.querySelector(".materials");
    // materials.addEventListener("click", function(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    
    //   if (e.target.classList.contains("material")) {
    //     for (let i = 0; i <= materials.children.length - 1; i++) {
    //       if (materials.children[i].classList.contains("active")) {
    //         materials.children[i].classList.remove("active");
    //       }
    //     }
    //     e.target.classList.add("active");
    //   }
    // });
//========
    // var koef = document.querySelector(".koef");
    // koef.addEventListener("click", function(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    
    //   if (e.target.classList.contains("operator")) {
    //     for (let i = 0; i <= koef.children.length - 1; i++) {
    //       if (koef.children[i].classList.contains("active")) {
    //         koef.children[i].classList.remove("active");
    //       }
    //     }
    //     e.target.classList.add("active");
    //   }
    // });
//=======================================================================


      
// function funcCalc(){
    
//     var num1 = Number(document.getElementById("num1").value);
//     var num2 = Number(document.getElementById("num2").value);
//     var result = num1 * num2 * 4000;

//     document.getElementById("result").innerHTML = result;
//     }



// //scroll to============================
// const calcBtn = document.querySelectorAll('#calc-btn'),
// otzivBtn = document.querySelectorAll('#otziv-btn'),
// galleryBtn = document.querySelectorAll('#gallery-btn'),
// ourWorksBtn = document.querySelectorAll('#ourWorks-btn'),
// btnUp = document.querySelectorAll('#btn-up'),
// pointCalc = document.querySelector('#calculator'),
// pointGallery = document.querySelector('#main-gallery'),
// pointourWorks = document.querySelector('#ourWorks'),
// pointTop = document.querySelector('#top'),
// pointOtziv = document.querySelector('#otziv'),
// menuIcon = document.querySelector('.menu__icon'),
// menuBody = document.querySelector('.menu__body');

// calcBtn.forEach(item =>{
//     item.addEventListener('click', (e)=>{
//         e.preventDefault();
//         pointCalc.scrollIntoView({behavior: "smooth"});
//         menuIcon.click();
//         // menuIcon.classList.remove('_active');
//         // menuBody.classList.remove('_active');
//     })
// })

// otzivBtn.forEach(item =>{
//     item.addEventListener('click', (e)=>{
//         e.preventDefault();
//         pointOtziv.scrollIntoView({behavior: "smooth"});
//         menuIcon.click();
//         // menuIcon.classList.remove('_active');
//         // menuBody.classList.remove('_active');
//     })
// })

// galleryBtn.forEach(item =>{
//     item.addEventListener('click', (e)=>{
//         e.preventDefault();
//         pointGallery.scrollIntoView({behavior: "smooth"});
//         menuIcon.click();
//         // menuIcon.classList.remove('_active');
//         // menuBody.classList.remove('_active');
//     })
// })

// ourWorksBtn.forEach(item =>{
//     item.addEventListener('click', (e)=>{
//         e.preventDefault();
//         pointourWorks.scrollIntoView({behavior: "smooth"});
//         menuIcon.click();
//         // menuIcon.classList.remove('_active');
//         // menuBody.classList.remove('_active');
//     })
// })


// btnUp.forEach(item =>{
//     item.addEventListener('click', (e)=>{
//         e.preventDefault();
//         pointTop.scrollIntoView({behavior: "smooth"});
//     })
// })


const buttonUp = document.querySelector('.btn-up');
window.addEventListener('scroll', ()=>{
    if (document.documentElement.scrollTop > 950) {
        buttonUp.classList.add('show');
    } else {
        buttonUp.classList.remove('show');
    }
})