// 1) pegar o valor do input e do criar
//carregarInformacoes()
let tasks=[]
function btnCriarTask(){
    
    const inputNewTask= document.getElementById('inputNewtask').value
    tasks.push(inputNewTask)

const newdiv= document.createElement("div")
newdiv.innerHTML= `
<div class="task-item">
                <input type="checkbox" class="task-checkbox">
                <span class="task-text" id="taskContent">${inputNewTask}
                </span>
                <button class="delete-btn" onclick="deleteTask(this, '${inputNewTask}')">
                    <svg class="trash-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M10 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M14 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M7 7L8 19C8 20.1046 8.89543 21 10 21H14C15.1046 21 16 20.1046 16 19L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
`
const taskListContainer= document.getElementsByClassName('task-list')[0]
taskListContainer.appendChild(newdiv)

document.getElementById('inputNewtask').value=''

localStorage.setItem('taskCriada', JSON.stringify(tasks))
}

function carregarInformacoes(){

    
    localStorage.getItem('taskCriada')
    if(localStorage.getItem('taskCriada')){
        

        const parse= JSON.parse(localStorage.getItem('taskCriada'))
        tasks= parse

        parse.forEach(item => {


            const newdiv= document.createElement("div")
    newdiv.innerHTML= `
    <div class="task-item">
                    <input type="checkbox" class="task-checkbox">
                    <span class="task-text" id="taskContent">${item}
                    </span>
                    <button class="delete-btn" onclick="deleteTask(this, '${item}')">
                        <svg class="trash-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M10 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M14 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M7 7L8 19C8 20.1046 8.89543 21 10 21H14C15.1046 21 16 20.1046 16 19L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
    `
    const taskListContainer= document.getElementsByClassName('task-list')[0]
    taskListContainer.appendChild(newdiv)
        })


    }


    
}


//pra excluir um elemento do array de tasks tenho que criar uma funcao onde clicando no 'botao do lixo' ele vai excluir a task
//1) identificar qual item vai ser excluido
//2) puxar o item que vai ser excluido
//2) criar uma funcao que exclua o elemento que foi clicado
//3) DIV DAS TASKS         <div class="task-list">


function deleteTask(btn, taskValue){
    
    let taskUpdate = tasks.filter(item => item !== taskValue);
    console.log(taskUpdate)
    tasks= taskUpdate
    localStorage.setItem('taskCriada', JSON.stringify(taskUpdate))
    
    console.log(btn.closest('#taskContent'));
btn.closest('.task-item').remove();



}

document.addEventListener("DOMContentLoaded", carregarInformacoes);


//string(texto da task), preciso saber se ta completa ou nao(boolean)

