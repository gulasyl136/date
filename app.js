// let textIn = document.querySelector('.textIn');
// let addBtn = document.querySelector('#addBtn');
// let list = document.querySelector('ul');

let todosArray = localStorage.getItem('todos') == null
? []    
: [...JSON.parse(localStorage.getItem('todos'))] 

// renderTodo - иторация кылып li ге чыгарып берет

addBtn.addEventListener('click', addTodo);

function createItem(todo, id){
    // инпуттагы данныйларды Ли ге айландырып беруучу функция
    let items = 
    `
    <li key = "${id}" class = "${todo.checked ? 'teskItem done' : 'taskItem'}">
    ${todo.text} ${todo.date ? todo.date : ''}
    <img class="btn" src="./img/img2.jpg" onclick="doneTodo(event)"/>
    <img class="btn" src="./img/img3.jpg" onclick="deleteTodo(event)"/>
    `
    return items
}


function renderTodo(){
    list.innerHTML = '';
    let items = []
    todosArray.length
    ? todosArray.map( (todo, id) => {
        items.unshift( createItem ( todo, id))
        list.innerHTML = items.join( '' )
    })
    : list.append( 'no tasks' )

    // todosArray.map((todo, id) => {
    //     let li = document.createElement('li');
    //     li.className = "taskItem"
    //     li.id = id

    //     let doneBtn = document.createElement('img')
    //     doneBtn.className = 'btn'
    //     doneBtn.src = '../img/img2.jpg'
    //     doneBtn.addEventListener('click', doneTodo)

    //     let deleteBtn = document.createElement('img')
    //     deleteBtn.className = 'btn'
    //     deleteBtn.src = '../img/img3.jpg'
    //     deleteBtn.addEventListener('click', deleteTodo)

    //     li.append(todo.text)          
    //     li.append(doneBtn)
    //     li.append(deleteBtn)
    //     list.append(li); 
        
    // })
}


renderTodo()
// contains - содержит



