/* This code shows an ajax function where it will be sending a new XMLHttpRequest and if successful will be able to show the data from the json file in the HTML page. */
function ajax(url,success)
{
	const ajaxRequest = new XMLHttpRequest();
	function handleResponse()
	{
		if(ajaxRequest.readyState===4)
		{
			if(ajaxRequest.status===200)
			{
		    	var data=JSON.parse(ajaxRequest.responseText);
		    	success(data);
			}
		}
	}
	/* This code shows that after an ajaxRequest it will add a new addEventListener as well as use a get request and send the response of it back to the server. */
	ajaxRequest.addEventListener("readystatechange",handleResponse,false);
	ajaxRequest.open('GET', url, true);
	ajaxRequest.send("test");
}

/* This code shows the different elements that will be used to show the data from the json file on the HTML page as well as showing the different subjects of information shown on the page.*/
const titleH3=document.getElementById("name");
const ageElem=document.getElementById("age");
const occupationElem=document.getElementById("occupation");
const companyElem=document.getElementById("company");

/* This code shows a forEach function of the user including the areas of information from the json file and some other text shown on the HTML page to link it all together. */
function show(users)
{
	users.forEach(function(user){
		titleH3.textContent= user.name;
		ageElem.textContent=`I am ${user.age} years old.`;
		occupationElem.textContent=`I'm an ${user.occupation}.`;
		companyElem.textContent=`I work for ${user.company}.`;
	})
}
/* This code shows an init function and is getting the json file from inside the ajax function and show the data inside the json file on the HTML page. */
function init(){
	ajax("user_data.json",show);
}

init();
