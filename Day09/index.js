const sliders = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

let currentSlide =0;
let maxSlide = sliders.length-1;
if(currentSlide === 0){
    btnLeft.style.display = 'none';
}
if(currentSlide === maxSlide){
    btnLeft.style.display = 'none';
}


sliders.forEach((slider,index)=>{
    slider.style.left = `${index*100}%`
})

const slideChanger = () => {
    if(currentSlide > 0){
        btnLeft.style.display = 'block';
    }else{
        btnLeft.style.display = 'none';
    }

    if(currentSlide < maxSlide){
        btnRight.style.display = 'block';
    }else{
        btnRight.style.display = 'none';
    }

    sliders.forEach((slide,index)=>{
        slide.style.transform = `translateX(-${currentSlide*100}%)`;
    })
}

btnRight.addEventListener('click',()=>{
    if(currentSlide < maxSlide){
        currentSlide ++;
    }
    slideChanger();
})
btnLeft.addEventListener('click',()=>{
    if(currentSlide > 0){
        currentSlide --;
    }
    slideChanger();
})