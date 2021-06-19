const $title2=document.querySelector('.title2');
const $title3=document.querySelector('.title3');
const $title4=document.querySelector('.title4');
const $title5=document.querySelector('.title5');
const $title6=document.querySelector('.title6');

export default function efectAnimation(){
    document.addEventListener("click",e=>{
        if(e.target.matches(".btn-2")){
                makeAnimation($title2,"animate__bounceInLeft",200,700)
        }else
        if(e.target.matches(".btn-3")){
                makeAnimation($title3,"animate__bounceInLeft",500,1000)
        }else
        if(e.target.matches('.btn-4')){
                makeAnimation($title4,"animate__bounceInLeft",500,1500)
        }else
        if(e.target.matches(".btn-5")){
                makeAnimation($title5,"animate__bounceInLeft",600,1500)
        }else
        if(e.target.matches(".btn-6")){
                makeAnimation($title6,"animate__bounceInLeft",600,1500)
        }

      });
}

const makeAnimation = (element,className,durationStart,durationEnd)=>{
    setTimeout(() => {
        element.classList.add(className);
    }, durationStart);

    setTimeout(() => {
        element.classList.remove(className);
    }, durationEnd);
};