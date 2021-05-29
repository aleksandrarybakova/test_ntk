let header = function()
{
    let header =
    {
        cityArr: ['Москва', 'Краснодар', 'Казань', 'Нижний Новгород'],
        parse_city_list()
        {   selectedCity.classList.remove('border-dashed');
            cont.classList.remove('h0');
            cont.classList.add('h100');
            let selectedCityText = selectedCity.innerHTML;            
            lastSelectedCity.innerHTML = selectedCityText;
            cityList.classList.remove('transition-up');
            cityList.classList.add('transition-down');
            this.cityArr.forEach(function(city, i){
                
                if(selectedCityText != city){
                    document.querySelector(`#city${i}`).innerHTML = city;        
                
                }
            })

            document.querySelector('#cityCaret img').classList.add('rotate')
        },
        
        close_city_list()
        {
          
            cont.classList.remove('h100');
            cont.classList.add('h0');
            cityList.classList.remove('transition-down');
            cityList.classList.add('transition-up');
            document.querySelector('#cityCaret img').classList.remove('rotate')
            selectedCity.classList.add('border-dashed');
        },
        
        select_city(el)
        {   

            selectedCity.innerHTML = el.textContent;
            setTimeout(() => {

                for(let i = 0; i < 4; i++){
                    document.querySelector(`#city${i}`).innerHTML = ''
                }
            }, 1000);
            // for(let i = 0; i < 4; i++){
            //         document.querySelector(`#city${i}`).innerHTML = ''
            //     }
            

        }
       
        
    }

    return header;
}()
