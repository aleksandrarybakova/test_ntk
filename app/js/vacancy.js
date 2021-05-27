let vacancy = function()
{
    let vacancy =
    {
        
        parse_vacancy_list: function()
        {           
            vacancyListWrapper.classList.remove('h0');
            vacancyListWrapper.classList.add('h100');            
            vacancyList.classList.remove('transition-up');
            vacancyList.classList.add('transition-down');
            document.querySelector('#vacancyCaret img').classList.add('rotate')
            document.querySelector('.vacancy-wrapper').classList.add('border-active')
        },
        
        close_vacancy_list()
        {          
            vacancyListWrapper.classList.remove('h100');
            vacancyListWrapper.classList.add('h0');
            vacancyList.classList.remove('transition-down');
            vacancyList.classList.add('transition-up');
            document.querySelector('#vacancyCaret img').classList.remove('rotate')
            document.querySelector('.vacancy-wrapper').classList.remove('border-active')
        },
        
        select_vacancy(el)
        {            
            selectedVacancy.innerHTML = el.textContent;
            selectedVacancy.classList.add('selected-vacancy')
        },

        
       
        
    }

    return vacancy;
}()
