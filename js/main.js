
//Находим эллементы на страничке
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');


//Функция добавления новой задачи
const addNewTask = (e) =>{
    //Отмена отправки формы
    e.preventDefault();

    //Достаём текст из инпута
    const InputValue = taskInput.value;

    //Добавление новой задачи в список(создание разметки с необходимым тайтлом)
    const newTaskHTML =  `<li class="list-group-item d-flex justify-content-between task-item">
   <span class="task-title">${InputValue}</span>
   <div class="task-item__buttons">
       <button type="button" data-action="done" class="btn-action">
           <img src="./img/tick.svg" alt="Done" width="18" height="18">
       </button>
       <button type="button" data-action="delete" class="btn-action">
           <img src="./img/cross.svg" alt="Done" width="18" height="18">
       </button>
   </div>
</li>`;

  //добавление разметку на страницу
  tasksList.insertAdjacentHTML('beforeend', newTaskHTML);

  //очистка поля ввода, и сосредатачиваем на нём фокус
  taskInput.value = "";
  taskInput.focus();
  
  //Скрытие разметки пустого листа задач
  if(tasksList.children.length > 1 ){
    emptyList.classList.add('none');
  }
}

//Функция удаления задачи
const deleteTask = (e) =>{
  if(e.target.dataset.action === 'delete'){
   const deletedTask =  e.target.closest('.list-group-item');
   deletedTask.remove()
   if(tasksList.children.length === 1 ){
    emptyList.classList.remove('none');
  }
}}
//Функция изменения статуса задачи
const changeTaskStatus = (e) =>{
 if(e.target.dataset.action === 'done'){
  const changedTask = e.target.closest('.list-group-item');
  const taskTitle = changedTask.querySelector('.task-title');
  taskTitle.classList.toggle('task-title--done')
 }
}

//Cчитываем изменения статуса задачи
tasksList.addEventListener('click', changeTaskStatus);
//Cчитываем удаления задачи
tasksList.addEventListener('click', deleteTask)
//Считываем событие отправки формы
form.addEventListener('submit', addNewTask); 

