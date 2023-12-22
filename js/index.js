const cols = document.querySelectorAll('.col')
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.code.toLowerCase() === 'space') {
        colorPickStart()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if(type === 'lock') { 
        const node = event.target.tagName.toLowerCase() === 'i' 
        ? event.target
        : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
        
    }
    else if(type === 'copy') {
        copyText(event.target.textContent)
    }
})

function getRandomColor () {
    colorHex = '0123456789ABCDEF'
    color = '#'
    for(var i = 0; i < 6; i++) {
        color+=colorHex[Math.floor(Math.random(15) * colorHex.length)]
}
return color
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function copyText(text) {
   return navigator.clipboard.writeText(text)
}

function colorPickStart() {
    cols.forEach(item => {
        if(item.querySelector('i').classList.contains('fa-lock')) {
            item.style.backgroundColor = item.style.backgroundColor
        }
        else   { 
        const color = getRandomColor()
        const text = item.querySelector('h2')
        const btn = item.querySelector('button')
        item.style.backgroundColor = color
        text.textContent = getRandomColor()
        setTextColor(text, color)
        setTextColor(btn, color)
        }
        
})
}
colorPickStart()




