const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');
hamburger.addEventListener('click', () => {
 	hamburger.classList.toggle('active');
 	mobile_menu.classList.toggle('active');
 });

const contact = document.querySelectorAll("contact");
console.log(contact)
contact.addEventListener('click', () => {
	console.log("working");
	const reveal = document.getElementById("contact-reveal");
	reveal.classList.toggle('active');
});

// var a;
// function  show_hide()
// {
// 	if(a==1)
// 	{
// 		document.getElementsByClassName("contact").style.display="inline";
// 		return a=0;
// 	}
// 	else{
// 		document.getElementsByClassName("contact").style.display="none";
// 		return a=1;
// 	}
// }
//  document.addEventListener('scroll',()=>{
// 	 var scroll_position = window.scrollY;
// 	 if (scroll_position>250){
// 		 header.getElementsByClassName.backgroundColor= "#f2efc7"
// 	 } else{
// 		header.getElementsByClassName.backgroundColor= "transparent"
// 	 }

//  });

 menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});

	  
});