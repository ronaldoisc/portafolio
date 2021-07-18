export default function hamburgerMenu(panelBtn) {
    const d = document;
    d.addEventListener("click", (e) => {
      
        if (e.target.matches(".icono")) {
            
            document.querySelector(".menu").classList.toggle("active");

       
        }

        
        
    })
}