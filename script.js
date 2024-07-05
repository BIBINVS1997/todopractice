const addForm=document.querySelector(".add");
const tasks=document.querySelector(".tasks");
const clearAll=document.querySelector(".clear");
const message=document.querySelector(".message span");
const searchForm=document.querySelector(".search")


function updateMessage(){
    const textLength=tasks.children.length
    message.textContent=`YOU HAVE ${textLength} PENDING TASK`
}
updateMessage();

addForm.addEventListener("click",event=>{
    event.preventDefault();
    const value=addForm.task.value.trim()

    if(value.length){
        tasks.innerHTML+=`<li>
                            <span>${value}</span>
                            <i class="bi bi-trash delete"></i>
                        </li>`
        addForm.reset()
        updateMessage();

    }

})

tasks.addEventListener("click",event=>{
    //console.log(event.target)
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove()
        updateMessage();

        //console.log(event.target)
    }
})

clearAll.addEventListener("click",event=>{
    const edits=tasks.querySelectorAll("li");
    edits.forEach(edit=>{
        edit.remove()
        updateMessage();

    })
})
function filterTask(term){
    Array.from(tasks.children)
    .filter(task=>{
        return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task=>{
        task.classList.add("hide");
    })

    Array.from(tasks.children)
    .filter(task=>{
        return task.textContent.includes(term)
    })
    .forEach(task=>{
        task.classList.remove("hide")
    })
}

searchForm.addEventListener("keyup",event=>{
    const term=searchForm.task.value.trim().toLowerCase();
     filterTask(term);
    
})

searchForm.addEventListener("click",event=>{
    if(event.target.classList.contains("reset")){
        searchForm.reset()
        const term=searchForm.task.value.trim()
        filterTask(term);

    }
})