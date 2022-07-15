window.onload = function() {

const selectButton = document.querySelector('#button')
const selectInput = document.querySelector('#textoCarta')
const selectTexto = document.querySelector('.span')
const selectP = document.querySelector('#cartaEscrita')



function randomStyle(){
    
    const classes = [
        'newPaper',
        'style1',
        'style2',
        'textoMedio ',
        'textoBig',
        'bigBig',
        'rotateLeft',
        'rotateRight',
        'skew',
        'skew2'
    ];
    let random = Math.floor(Math.random()* classes.length);
    return classes[random];
};

function carta(){
    selectButton.addEventListener('click', function(){
        
        if(selectInput.value === '' || selectInput === undefined || selectInput === null){
            selectP.innerText = 'Digite seu texto!'
        } else {
            selectP.innerText='';
            const input = selectInput.value
            const split = input.split(' ')
            const p = document.querySelector('#contador')
            p.innerText = split.length

            for(i = 0; i < split.length; i += 1){
                
                const createSpan = document.createElement('span')
                createSpan.innerText = split[i] 
                createSpan.className = randomStyle()            
                createSpan.style.marginLeft = '8px'
                selectP.appendChild(createSpan)  
            }
        }    
    })
}
carta();



 
}
