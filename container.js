function addTodo(){
    // value-инпуттагы значение
    // append-ичине салуу
    // task-инпутттун значениелери
    let task = textIn.value;
    let date = setDate.value;
    if (task !== '') {
        todosArray.push({ 
            text: task,
             checked: false,
             date
             });
             localStorage.setItem('todos', JSON.stringify(todosArray))
             renderTodo();
        textIn.value = '';  
    }
}

function doneTodo(e){
    let index = e.target.parentNode.getAttribute('key');
    let newTodo = [...todosArray]
    let element = newTodo[index].checked
    todosArray[index].checked = !element  
    localStorage.setItem('todos', JSON.stringify(newTodo));


    let isDone  = e.target.parentNode.classList.contains('done')
    isDone 
    ? e.target.parentNode.classList.remove('done')
    : e.target.parentNode.classList.add( 'done' )
} 

function deleteTodo(e){
    let index = e.target.parentNode.getAttribute('key'); 
   todosArray.splice(index, 1);  
   localStorage.setItem('todos', JSON.stringify(todosArray));
   renderTodo()
}
