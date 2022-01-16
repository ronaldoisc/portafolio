

export default function animations(card){
    const $cards=document.querySelectorAll(card);

    $cards.forEach(card=>{
        card.addEventListener("mousemove",e=>{
            let xAxis=(window.innerWidth /2 - e.pageX) /190;
            let yAxis=(window.innerHeight /2 - e.pageY) /190;
            card.style.transform=` rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        });
        card.addEventListener("mouseenter",e=>{
           
            card.style.transition="all 0.4s ease-in-out";
            card.querySelector("figcaption h3").style.transform="translateX(70px)";
        })

        card.addEventListener("mouseleave",e=>{
            card.style.transition="all 0.5s ease";
            card.style.transform=`rotateY(${0}deg) rotateX(${0}deg)`;
            card.querySelector("figcaption h3").style.transform="translateX(0px)";
        });
        
    });
   
}
  