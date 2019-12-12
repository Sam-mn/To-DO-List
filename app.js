let todos = [
	{ // 0
		description: "Have class meeting",
		completed: false,
	},
	{ // 1
		description: "Eat lunch",
		completed: false,
	},
	{ // 2
		description: "Code",
		completed: false,
	},
	{ // 3
		description: "Sleep",
		completed: false,
	},
	{ // 4
		description: "Repeat",
		completed: false,
	},
];


let todosEl = document.querySelector('#todos');
let done = document.querySelector('#done');


let renderTodoList = ()=>{
    todosEl.innerHTML= '';
    done.innerHTML = ' ';
let notDone1 = todos.filter((obj)=>obj.completed===false).map((item)=>`${item.description}`).sort();
//let notDone1 = todos.filter((obj,index)=>obj.completed===false).map((item)=>`<li>${item.description}</li>`).sort();
//todosEl.innerHTML= notDone1.join(' ');
notDone1.forEach((obj1, index)=>{
    let notdoneEl = document.createElement('li');
        notdoneEl.innerText= obj1;
        todosEl.append(notdoneEl);
})

let donethings = todos.filter((obj)=>obj.completed===true).map((item)=>`${item.description}`).sort();
//let donethings = todos.filter((obj,index)=>obj.completed===true).map((item)=>`<li>${item.description}`</li>).sort();
//done.innerHTML= donethings.join(' ');
    donethings.forEach((obj2)=>{
        let doneEl = document.createElement('li');
        doneEl.innerText= obj2;
        done.append(doneEl);
})

}

renderTodoList();


// Add click handler for updating completed status
todosEl.addEventListener('click', function(e) {

let findEl = todos.find((item)=>item.description === e.target.innerText);
   findEl.completed= true;
   renderTodoList();


	// if (e.target.tagName === "LI") {
	// 	// update completed status for this todo item
	// 	todos.forEach(function(todo) {
	// 		if (todo.description === e.target.innerText) {
	// 			if (todo.completed) {
	// 				todo.completed = false;
	// 			} else {
	// 				todo.completed = true;
	// 			}
	// 			// shorthand of above if-statement
	// 			// todo.completed = !todo.completed;

	// 			// render the updated todo list to DOM
    //             renderTodoList();
	// 		}
	// 	});
	// }
});


// Add click handler for creating a new TODO
let createNewTodoButton = document.querySelector("#createNewTodo");
createNewTodoButton.addEventListener('click', function() {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let newTodo = {
		description: text,
		completed: false
    }
    
    
	todos.push(newTodo);

	// render the updated todo list to DOM
	renderTodoList();
});
