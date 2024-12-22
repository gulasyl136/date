let container = document.createElement('div');
container.className = 'container'
document.body.append(container)

let h1 = document.createElement('h1');
h1.innerHTML = 'todo-list'
container.append(h1)

let mainblock = document.createElement('div');
mainblock.className = 'mainblock'
container.append(mainblock)

let div = document.createElement('div')
mainblock.append(div)

let textIn = document.createElement('input') 
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Введите текст')
div.append(textIn);

let setDate = document.createElement('input')
setDate.setAttribute ('type', 'date')
div.append(setDate)

let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'add'
addBtn.style.border = 'none'
div.append(addBtn)

let list = document.createElement('ul')
mainblock.append(list)



