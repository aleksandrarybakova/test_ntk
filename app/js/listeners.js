caretCity.addEventListener("click", function(){
	if(cityList.classList.contains('transition-down')){
		header.close_city_list()
	}else{
		
		header.parse_city_list()
	}	  
})

cityForSelect.forEach(function(el){
	el.addEventListener('click', function () {
		header.select_city(el)
	});
});

vacancyCaret.addEventListener("click", function(){
	if(vacancyList.classList.contains('transition-down')){
		vacancy.close_vacancy_list()
	}else{
		
		vacancy.parse_vacancy_list()
	}	  
})

vacancyForSelect.forEach(function(el){
	el.addEventListener('click', function () {
		vacancy.select_vacancy(el)
	});
});


