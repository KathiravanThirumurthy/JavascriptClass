console.log("Form");
const inp=document.getElementById("taskInput");
const taskList=document.getElementById("tasklist");

const formBtn=document.getElementById("taskForm");
formBtn.addEventListener('submit',(event)=>{

	event.preventDefault();
	const task = document.createElement("div");
	const taskText = document.createElement("span");
	 taskText.innerText = inp.value;
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	const updateBtn = document.createElement("button"); 
	updateBtn.textContent = "Edit";
	task.append(taskText); 
	task.append(deleteBtn);
	task.append(updateBtn);
	taskList.append(task); inp.value = "";
	deleteBtn.addEventListener("click", () => { task.remove(); });
	 let isEditing = false;
	 updateBtn.addEventListener("click", () => { 
	 if (isEditing == false) 
	 { 
	 
	 	inp.value = taskText.innerText;
	 	 updateBtn.textContent = "Update";
	  	 isEditing = true; 
	  } else 
	  { 
	   	// UPDATE 
	   	taskText.innerText = inp.value; 
	   	inp.value = ""; 
	   	updateBtn.textContent = "Edit"; 
	   	isEditing = false;
	    }
	    });
	



})