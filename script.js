pizzaJson.map((item, index)=>{
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    document.querySelector('.pizza-area').append(pizzaItem);//passei muito tempo, procurando um erro, e o erro estava, pois esqueci de um ponto...
    }); 