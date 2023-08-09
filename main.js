//create an object
let card={
	title:"Full Stack Developer",
	icon:"*****",
	
	head:"Tech-Stack Covered",
	cont:"HTML5, CSS3, JavaScript, TypeScript, React JS, Redux, Python, Flask (Blue Print) based API, MongoDB.",
	
	head1:"Financing options",
	cont1:"Month-to-month Installments",
	
	head2:"Average Salary",
	cont2:"3.8 LPA",
	
	head3:"Batch Size / Branch",
	cont3:"10",
	
	head4:"Program Duration",
	cont4:"6 Months",
	
	head5:"Learning Mode",
	cont5:"Classroom / Online",
	
	linkval:"read more",
	link:"#"	
}
//create an Element
	var cardTitle=document.createElement("h2"),
		cardIcon=document.createElement("p"),
	
		cardHead=document.createElement("h3"),
		cardCont=document.createElement("p"),
		
		cardHead1=document.createElement("h3"),
		cardCont1=document.createElement("p"),
		
		cardHead2=document.createElement("h3"),
		cardCont2=document.createElement("p"),
		
		cardHead3=document.createElement("h3"),
		cardCont3=document.createElement("p"),
		
		cardHead4=document.createElement("h3"),
		cardCont4=document.createElement("p"),
		
		cardHead5=document.createElement("h3"),
		cardCont5=document.createElement("p"),
		
		cardLink=document.createElement("a"),
		
		cardDiv=document.createElement("div");
		
//object assign
	cardTitle.innerHTML =card.title;
	cardIcon.innerHTML =card.icon;
	
	cardHead.innerHTML =card.head;
	cardCont.innerHTML =card.cont;
	
	cardHead1.innerHTML =card.head1;
	cardCont1.innerHTML =card.cont1;
	
	cardHead2.innerHTML =card.head2;
	cardCont2.innerHTML =card.cont2;
	
	cardHead3.innerHTML =card.head3;
	cardCont3.innerHTML =card.cont3;
	
	cardHead4.innerHTML =card.head4;
	cardCont4.innerHTML =card.cont4;
	
	cardHead5.innerHTML =card.head5;
	cardCont5.innerHTML =card.cont5;
	
	cardLink.innerHTML =card.linkval;
	
	// cardDiv.innerHTML =card.div;
	
//add class name to element	
	cardTitle.setAttribute("class","title"),
	cardIcon.setAttribute("class","icon"),
	
	cardHead.setAttribute("class","head"),
	cardCont.setAttribute("class","cont"),
	
	cardHead1.setAttribute("class","head1"),
	cardCont1.setAttribute("class","cont1"),
	
	cardHead2.setAttribute("class","head2"),
	cardCont2.setAttribute("class","cont2"),
	
	cardHead3.setAttribute("class","head3"),
	cardCont3.setAttribute("class","cont3"),
	
	cardHead4.setAttribute("class","head4"),
	cardCont4.setAttribute("class","cont4"),
	
	cardHead5.setAttribute("class","head5"),
	cardCont5.setAttribute("class","cont5"),
	
	cardLink.setAttribute("href",card.link),
	
	cardDiv.setAttribute("class","card")
	
	
	console.log(cardTitle,cardIcon,cardHead,cardCont,cardHead1,cardCont1,cardHead2,cardCont2,cardHead3,cardCont3,cardHead4,cardCont4,cardHead5,cardCont5,cardLink,cardDiv);

//appendChild
	cardDiv.appendChild(cardTitle)
	cardDiv.appendChild(cardIcon)
	
	cardDiv.appendChild(cardHead)
	cardDiv.appendChild(cardCont)
	
	cardDiv.appendChild(cardHead1)
	cardDiv.appendChild(cardCont1)
	
	cardDiv.appendChild(cardHead2)
	cardDiv.appendChild(cardCont2)
	
	cardDiv.appendChild(cardHead3)
	cardDiv.appendChild(cardCont3)
	
	cardDiv.appendChild(cardHead4)
	cardDiv.appendChild(cardCont4)
	
	cardDiv.appendChild(cardHead5)
	cardDiv.appendChild(cardCont5)
	

	cardDiv.appendChild(cardLink)
	
	console.log(cardDiv);
	var last=document.getElementById("card-list");
	
	last.appendChild(cardDiv)