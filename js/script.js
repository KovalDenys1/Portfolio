console.log(`
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDD                              CDDDDDDDDDDDDD               
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                     DDDDDDDDDDDDDD                
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                DDDDDDDDDDDDDD                 
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD           DDDDDDDDDDDDDD                   
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD        DDDDDDDDDDDDDD                    
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD   CDDDDDDDDDDDDD                      
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDDD                       
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                        
    DDDDDDDDDDDD        DDDDDDDDDDDD   DDDDDDDDDDDDDDDDDDDDDDDDDDD                          
    DDDDDDDDDDDD        DDDDDDDDDDDD      DDDDDDDDDDDDDDDDDDDDDDD                           
    DDDDDDDDDDDD        DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD         DDDDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD          DDDDDDDDDDDDDDD                               
    DDDDDDDDDDDD        DDDDDDDDDDDD          DDDDDDDDDDDDDDD                               
    DDDDDDDDDDDD        DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD       DDDDDDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD     DDDDDDDDDDDDDDDDDDDDDD                             
    DDDDDDDDDDDD        DDDDDDDDDDDD    DDDDDDDDDDDDDDDDDDDDDDD                             
    DDDDDDDDDDDD        DDDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDD   DDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDD     DDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDD      DDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDD    DDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDD  DDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD   DDDDDDDDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD    DDDDDDDDDDDDDDDDDDDDDDD                             
    DDDDDDDDDDDD        DDDDDDDDDDDD      DDDDDDDDDDDDDDDDDDDDD                             
    DDDDDDDDDDDD        DDDDDDDDDDDD       DDDDDDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD         DDDDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD          DDDDDDDDDDDDDDD                               
    DDDDDDDDDDDD        DDDDDDDDDDDD           DDDDDDDDDDDDDDD                              
    DDDDDDDDDDDD        DDDDDDDDDDDD         CDDDDDDDDDDDDDDDDDD                            
    DDDDDDDDDDDD        DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDD                           
    DDDDDDDDDDDD        DDDDDDDDDDDD      DDDDDDDDDDDDDDDDDDDDDDDDD                         
    DDDDDDDDDDDD        DDDDDDDDDDDD    DDDDDDDDDDDDDDDDDDDDDDDDDDDD                       
    DDDDDDDDDDDD        DDDDDDDDDDDDCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                     
    DDDDDDDDDDDD        DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD   DDDDDDDDDDDDDD                    
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD      DDDDDDDDDDDDDDD                  
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD          DDDDDDDDDDDDDD                 
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD             DDDDDDDDDDDDDDD               
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                 CDDDDDDDDDDDDDD              
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD                       DDDDDDDDDDDDDDD            
    DDDDDDDDDDDDDDDDDDDDDDDDDDDDD                                DDDDDDDDDDDDDDD  
`);


const hamburger = document.querySelector(".hamburger");
const navButtons = document.querySelector(".nav_buttons");
const body = document.body;

hamburger.addEventListener("click", () => {
    // Toggle active classes for the hamburger and nav menu
    hamburger.classList.toggle("active");
    navButtons.classList.toggle("active");

    // Disable or enable page scrolling based on the menu state
    if (navButtons.classList.contains("active")) {
        body.style.overflow = "hidden";  // Disable scrolling
    } else {
        body.style.overflow = "auto";  // Enable scrolling
    }
});

// Close the menu when clicking on any nav link
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navButtons.classList.remove("active");

    // Re-enable scrolling when the menu is closed
    body.style.overflow = "auto";
}));



// Получаем элементы
const modal = document.getElementById("modal");
const link = document.getElementById("contact"); // Изменено на contact
const span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на ссылку
link.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
}

// Закрываем модальное окно при нажатии на "×"
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Включаем прокрутку страницы
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Включаем прокрутку страницы
    }
}