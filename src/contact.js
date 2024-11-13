import add from "./images/restaurant-location.png"
export const contact=(()=>{
    let content, img, body,div,p1,p2;
    const createElement = () => {
        img = document.createElement('img');
        div=document.createElement('div');
        p1=document.createElement('p');
        p2=document.createElement('p');
    }
    const addhmtl = () => {
        content = document.getElementById('content');
        body = document.querySelector('body');
    }
    const center=()=>{
        div.setAttribute('id','center');
        p1.textContent='📞 123 456 789'
        p2.textContent='🏠 Nabha,Punjab'
        img.src=add;
        img.style.height='370px'
        div.append(p1,p2,img);
        content.append(div);
    }
    return{addhmtl,createElement,center};
})();