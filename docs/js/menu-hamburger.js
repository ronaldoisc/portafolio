export default function hamburgerMenu(panelBtn) {

    // let btn=document.getElementById(panelBtn);
   
    document.addEventListener("click", (e) => {

      
        if (e.target.matches(".icono")) {
          
            
            document.querySelector(".menu").classList.toggle("active");

       
        }

        
        
    })
}