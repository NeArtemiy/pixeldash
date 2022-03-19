const dash = document.querySelector('.dash-board');
const colors = document.querySelectorAll('.dash__colors__item');
const inputX = document.querySelector('#inputX');
const inputY = document.querySelector('#inputY');
const inputSize = document.querySelector('#inputSize');

let colorArr = ['#CA4242', '#e4ae21', '#6ee950', '#55C7C7CC', '#4F69EECC', '#AF54C6CC', '#DD53BFCC', '#474747']
var indexActiveColor = 1;
let activeColor = colorArr[indexActiveColor]
colors[indexActiveColor].style.opacity = 1;
colors[indexActiveColor].style.boxShadow = `0 0 20px ${colorArr[indexActiveColor]}`;
let itemColumn = document.querySelectorAll('.item__column');

colors.forEach(element => {
    element.addEventListener('click', (event) =>{
        colors[indexActiveColor].style.opacity = 0.6;
        colors[indexActiveColor].style.boxShadow = '0 0 0 0';

        let objValues = Object.values(colors);
        indexActiveColor = objValues.indexOf(event.target);
        activeColor = colorArr[indexActiveColor];

        element.style.opacity = 1;
        element.style.boxShadow = `0 0 20px ${colorArr[indexActiveColor]}`;
    });
});

function editeItem()
{
    itemColumn = document.querySelectorAll('.item__column');

    // Изменение Y
    if(itemColumn.length > inputY.value){
        itemColumn[itemColumn.length-1].remove()
    }
    else if(itemColumn.length < inputY.value)
    {
        const dashColors = document.createElement('div')
        dashColors.classList.add('item__column')
        for(let i = 0; i < inputX.value; i++)
        {
            const itemColors = document.createElement('div')
            itemColors.classList.add('item')
            itemColors.style.width = inputSize.value + 'px';
            itemColors.style.height = inputSize.value + 'px';
            dashColors.append(itemColors)
        }
        dash.append(dashColors)
    }

    for(let i = 0; i < itemColumn.length; i++)
    {
        let child = itemColumn[i].children;
        // Изменение X
        if(child.length < inputX.value)
        {
            let item = document.createElement('div');
            item.classList.add('item')
            itemColumn[i].append(item);
        }
        else if (child.length > inputX.value)
        {
            child[child.length-1].remove()
        }
        // Изменения Size
        for(let j = 0; j < child.length; j++)
        {
            child[j].style.width = inputSize.value + 'px';
            child[j].style.height = inputSize.value + 'px';
        }    
    }    
    var flagClick = false;
    dash.addEventListener('mousedown', () => {
        flagClick = true;
    })
    dash.addEventListener('mouseup', () => {
        flagClick = false;
    })
    document.querySelectorAll('.item').forEach(elemnt => {
        elemnt.addEventListener('mousedown', () => {
            elemnt.style.backgroundColor = activeColor;
            if(activeColor != '#474747')
                elemnt.style.boxShadow = `0 0 2px ${activeColor}, 0 0 10px ${activeColor}`
            else
                elemnt.style.boxShadow = '0 0 0 0';
            playSound()
        });
        elemnt.addEventListener('mouseover', () => {
            if(flagClick == true){
                elemnt.style.backgroundColor = activeColor;
                if(activeColor != '#474747')
                    elemnt.style.boxShadow = `0 0 2px ${activeColor}, 0 0 10px ${activeColor}`
                else
                    elemnt.style.boxShadow = '0 0 0 0';
            }
        });
    });
}
function playSound(){
    var player = new Audio('sound.wav');
    player.preload = "auto";
    player.play();
    player.playbackRate = 1.15;
    player.volume = 0.15;
    console.log('great');
}

inputY.addEventListener('input', () => {
    if (inputY.value < 8) 
        inputY.value = 8;
    editeItem();
});

inputX.addEventListener('input', () => {
    if (inputX.value < 8) 
        inputX.value = 8;
    editeItem();
});

inputSize.addEventListener('input', () => {
    if (inputSize.value < 20) 
        inputSize.value = 20;
    editeItem();
});
editeItem();