let todoList=JSON.parse(localStorage.getItem('message')) || [{name: 'make dinner', date: '2023-12-22'}, {name: 'wash dishes', date: '2023-12-22'}];

//const todoList=[{name: 'make dinner', date: '2023-12-22'}, {name: 'wash dishes', date: '2023-12-22'}];

renderlist();

document.querySelector('.js-date').addEventListener('keydown',(event)=>{
if (event.key==='Enter')
    {
    addTodo();
    }
});

function renderlist()
{
    let todoHTML='';
    for(let i=0;i<todoList.length;i++)
    {
        const todo=todoList[i];
        //const name=todo.name;
        //const date=todo.date;
        const {name,date}=todo;
        const html=`   
            <div>&#8226; ${name}</div> 
            <div>${date}</div> 
            <button class="delete" onclick="
                todoList.splice(${i},1)
                localStorage.setItem('message',JSON.stringify(todoList));
                renderlist();">
            Delete</button>`;
        todoHTML+=html;
    }
    document.querySelector('.js-todo').innerHTML=todoHTML;
}
function addTodo()
{
    const input=document.querySelector('.js-input');
    const name=input.value;
    
    const date=document.querySelector('.js-date').value;
    todoList.push({name,date});
    input.value='';
    renderlist();
    localStorage.setItem('message',JSON.stringify(todoList));
}