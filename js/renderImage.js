let btn = document.querySelector('.dash__btn');
let body = document.querySelector('body');
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close')

btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    createImage();
})

close.addEventListener('click', () => {
    popup.style.display = 'none';
    document.querySelector('canvas').remove()
})


function createImage(){
html2canvas( document.querySelector('.dash-board'),{
    onrendered: (canvas)=>{
      popup.appendChild(canvas)
    },
});
} 
