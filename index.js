function scl(id){



	var element = document.getElementById(id);
	var body =  document.getElementById("body");
	//element.scrollIntoView();
	//element.scrollIntoView(true);
	//element.scrollIntoView({block: "end"});

	//element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	

	var ele = document.getElementById(id);
 	window.scrollTo(ele.offsetLeft,ele.offsetTop-(screen.height/100)*25);

 	var val = ele.offsetTop-(screen.height/100)*25;

 	window.scrollTo({
    top: val,
    behavior: "smooth"
	});
}