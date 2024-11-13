import carne from './pizzas/carne.png'
import salsiccia from './pizzas/salsiccia.png'
import gamberi from './pizzas/gamberi.png'
import Pepe from './pizzas/pepe.png'
import Disgustoso from "./pizzas/disgustoso.png"
import Colorato from "./pizzas/colorato.png";
import Pomodoro from "./pizzas/pomodoro.png"
import Crema from "./pizzas/crema.png";
const menu=(()=>{
    let center,content,body,pizza=[],heading=[],ingredient=[],images=[],pizzas;
    const createElement=()=>{
        center=document.createElement('div');
        pizzas=document.createElement('div');
        for(let i=0;i<8;i++){
            pizza[i]=document.createElement('div');
            heading[i]=document.createElement('h3');
            ingredient[i]=document.createElement('p');
            images[i]=document.createElement('img');
            pizza[i].setAttribute('class','menuItem')
        }
    }
    const addhmtl=()=>{
        content=document.getElementById('content');
        body=document.querySelector('body');
    }
    const main=()=>{
        center.setAttribute('id','center');
        addImage();
        addHeading();
        addIngredient();
        pizzas.setAttribute('id','pizzas');
        for(let i=0;i<8;i++){
            pizzas.append(pizza[i]);
        }
        center.append(pizzas);
        content.append(center);
    }
    const addImage=()=>{
        images[0].src=carne;
        images[1].src=salsiccia;
        images[2].src=gamberi;
        images[3].src=Pepe;
        images[4].src=Disgustoso;
        images[5].src=Colorato;
        images[6].src=Pomodoro;
        images[7].src=Crema;
        for(let i=0;i<8;i++){
            pizza[i].append(images[i]);
        }
    }
    const addHeading=()=>{
        heading[0].textContent='Carne';
        heading[1].textContent='Salsiccia';
        heading[2].textContent='Gamberi'
        heading[3].textContent='Pepe'
        heading[4].textContent='Disgustoso'
        heading[5].textContent='Colorato'
        heading[6].textContent='Pomodoro'
        heading[7].textContent='Crema'
        for(let i=0;i<8;i++){
            pizza[i].append(heading[i]);
        }
    }
    const addIngredient=()=>{
        ingredient[0].textContent='Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli';
        ingredient[1].textContent='Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil';
        ingredient[2].textContent='Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil';
        ingredient[3].textContent='Tomato sauce, Mozarella, Chilli flakes, Olives, Basil';
        ingredient[4].textContent='Tomato sauce, Bacon, Pineapple, Olives, Basil';
        ingredient[5].textContent='Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil';
        ingredient[6].textContent='Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli';
        ingredient[7].textContent='White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil';
        for(let i=0;i<8;i++){
            pizza[i].append(ingredient[i]);
        }
    }
    return {addhmtl,createElement,main}
})();
export {menu}