console.log("DOm");



const heading=document.getElementById("title");
console.log(heading);

const btn=document.getElementById("btn");
const remove=document.getElementById("remove");
const toggle=document.getElementById("toggle");
btn.addEventListener('click',clickHandler);


function clickHandler()
{

	heading.innerText="Updated";
	username.value = "Updated";
	/*title.style.color = "blue";
	title.style.fontSize = "40px";
	title.style.backgroundColor = "yellow";
	title.style.marginTop = "20px";
	title.style.textAlign = "center";*/
	title.classList.add("highlight");
	
}
remove.addEventListener('click',removeHandler);
function removeHandler()
{
	title.classList.remove("highlight");
}
toggle.addEventListener('click',toggleHandler);
function toggleHandler()
{
	title.classList.toggle("highlight");
}

const messages = document.querySelectorAll(".message");
console.log(messages);
 //It returns a collections of matching elements
 // We can use foreach
messages.forEach((message) => {
 message.innerText = "Updated";
});


const username = document.getElementById("username");
console.log(username.value);

username.value = "20";
console.log(username.value);
//Changing value :
