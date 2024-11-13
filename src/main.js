import chef from './images/chef.png'
const home = (() => {
    let content, img, body, navBtns,div,p1,p2,center_img;
    const createElement = () => {
        img = document.createElement('img');
        div=document.createElement('div');
        p1=document.createElement('p');
        p2=document.createElement('p');
        center_img=document.createElement('img');
    }

    const addhmtl = () => {
        content = document.getElementById('content');
        body = document.querySelector('body');
        navBtns = document.querySelectorAll('button');
    }
    
    const hover = () => {
        navBtns.forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.classList.add('active');
                btn.addEventListener('mouseleave',()=>{
                    btn.classList.remove('active');
                })
            })
        })
    }
    const center=()=>{
        div.setAttribute('id','center');
        p1.textContent="Best pizza in your country";
        p2.textContent="Made with passion since 1908";
        center_img.setAttribute('id','center_img');
        center_img.src=chef;
        appendChild(div,p1);
        appendChild(div,p2);
        appendChild(div,center_img);
        appendChild(content,div);
    }
    const appendChild=(parent,child)=>{
        parent.append(child);
    }
    return {  addhmtl, createElement, hover,center };
})();
export {home}
