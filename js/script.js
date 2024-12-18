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


const hamburger = document.querySelector(".hamburger");  // Find the hamburger menu element (menu button)
const navButtons = document.querySelector(".nav_buttons");  // Find the navigation menu
const body = document.body;  // Get the body element to modify scrolling

hamburger.addEventListener("click", () => {  // Add a click event listener to the hamburger menu
    hamburger.classList.toggle("active");  // Toggle the "active" class for the hamburger (for animation or styling)
    navButtons.classList.toggle("active");  // Toggle the "active" class for the navigation menu

    if (navButtons.classList.contains("active")) {  // If the menu is active
        body.style.overflow = "hidden";  // Disable page scrolling
    } else {  // If the menu is inactive
        body.style.overflow = "auto";  // Enable page scrolling
    }
});

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {  // Add event listeners to all menu links
    hamburger.classList.remove("active");  // Remove the "active" class from the hamburger
    navButtons.classList.remove("active");  // Remove the "active" class from the menu

    body.style.overflow = "auto";  // Enable page scrolling when the menu closes
}));


// About me button ↓
let isContactActive = false; // Flag to track the state

// Save the initial states
const contactBox1 = document.getElementById("contact_box1");
const contactBox2 = document.getElementById("contact_box2");

const originalContentBox1 = contactBox1.innerHTML; // Save the original content of the first div
const originalContentBox2 = contactBox2.innerHTML; // Save the original content of the second div
const originalPaddingBox1 = contactBox1.style.padding; // Save the original padding of the first div
const originalPaddingBox2 = contactBox2.style.padding; // Save the original padding of the first div
const originaljustifyContentBox2 = contactBox2.style.justifyContent;
const originalalignItemsBox2 = contactBox2.style.alignItems;
const originalbackgroundBox1 = contactBox1.style.background; // Save the original padding of the first div
const originalbackgroundBox2 = contactBox2.style.background; // Save the original padding of the first div
const originalcolorBox1 = contactBox1.style.color; // Save the original padding of the first div
const originalcolorBox2 = contactBox2.style.color; // Save the original padding of the first div
const originalBoxShadowBox1 = contactBox1.style.boxShadow; // Save the original padding of the first div
const originalBoxShadowBox2 = contactBox2.style.boxShadow; 

document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    if (!isContactActive) {
        
        contactBox1.classList.add("slide-out");
        contactBox2.classList.add("slide-out");

        setTimeout(() => {

            // If the "Contact" state is not active, change the content
        contactBox1.innerHTML = `
        <div class="About_me_text">
          <p class="text_1">About me</p>
          <p class="text_2">My name is Denys Koval, and I am 20 years old.</p>
          <p class="text_2">Skills: JavaScript, HTML, CSS and Adobe programs</p>
          <p class="text_2">Hobbies: Gaming, table tennis, snowboarding</p>
          <p class="text_2"><a href="https://youtu.be/Yy4JrnNKIvI" class="youtube_video">Video about me</a></p>
        </div>
        `; 
        contactBox2.innerHTML = `
            <form action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required placeholder="">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="">

                <label for="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone" required placeholder="">

                <label for="message">Message:</label>
                <input type="text" id="message" name="message">

                <button type="submit">Contact me</button>
            </form>
        `;
            contactBox1.classList.remove("slide-out");
            contactBox2.classList.remove("slide-out");

            contactBox1.classList.add("slide-in");
            contactBox2.classList.add("slide-in");

            contactBox1.style.padding = "1rem";
            contactBox2.style.padding = "1rem";
            contactBox2.style.justifyContent = "center";
            contactBox2.style.alignItems = "center";
            contactBox1.style.background = "#505050";
            contactBox2.style.background = "#505050";
            contactBox1.style.color = "#ffffff";
            contactBox2.style.color = "#ffffff";
            contactBox1.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.8)";
            contactBox2.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.8)";
            
            contactBox1.classList.remove("slide-in");
            contactBox2.classList.remove("slide-in");

            isContactActive = true; // Update the flag
        }, 400); // 400 ms
    } else {


        contactBox1.classList.add("slide-out");
        contactBox2.classList.add("slide-out");

        setTimeout(() => {
            contactBox1.classList.remove("slide-out");
            contactBox2.classList.remove("slide-out");

            contactBox1.classList.add("slide-in");
            contactBox2.classList.add("slide-in");

            contactBox1.innerHTML = originalContentBox1; // Restore the content
            contactBox2.innerHTML = originalContentBox2; // Restore the content

            contactBox1.style.padding = originalPaddingBox1;
            contactBox2.style.padding = originalPaddingBox2;
            contactBox1.style.background = originalbackgroundBox1;
            contactBox2.style.background = originalbackgroundBox2;
            contactBox1.style.color = originalcolorBox1;
            contactBox2.style.color = originalcolorBox2;
            contactBox2.style.justifyContent = originaljustifyContentBox2;
            contactBox2.style.alignItems = originalalignItemsBox2;
            contactBox1.style.boxShadow = originalBoxShadowBox1;
            contactBox2.style.boxShadow = originalBoxShadowBox2;

            contactBox1.classList.remove("slide-in");
            contactBox2.classList.remove("slide-in");

            isContactActive = false; // Update the flag
        }, 400); // 400 ms
    }
});

// Handler for the logo
document.querySelector(".logo a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Check if content is already in its original state
    if (!isContactActive) return;

    // Add slide-out animation classes
    contactBox1.classList.add("slide-out");
    contactBox2.classList.add("slide-out");

    // Wait for the slide-out animation to finish before changing content
    setTimeout(() => {
        // Reset content and styles to their original state
        contactBox1.innerHTML = originalContentBox1; // Restore the original content
        contactBox2.innerHTML = originalContentBox2;

        contactBox1.style.padding = originalPaddingBox1;
        contactBox2.style.padding = originalPaddingBox2;
        contactBox1.style.background = originalbackgroundBox1;
        contactBox2.style.background = originalbackgroundBox2;
        contactBox1.style.color = originalcolorBox1;
        contactBox2.style.color = originalcolorBox2;
        contactBox2.style.justifyContent = originaljustifyContentBox2;
        contactBox2.style.alignItems = originalalignItemsBox2;
        contactBox1.style.boxShadow = originalBoxShadowBox1;
        contactBox2.style.boxShadow = originalBoxShadowBox2;

        // Remove slide-out and add slide-in animation
        contactBox1.classList.remove("slide-out");
        contactBox2.classList.remove("slide-out");

        contactBox1.classList.add("slide-in");
        contactBox2.classList.add("slide-in");

        // Remove slide-in classes after animation ends
        setTimeout(() => {
            contactBox1.classList.remove("slide-in");
            contactBox2.classList.remove("slide-in");
        }, 400);

        // Update the state flag
        isContactActive = false;
    }, 400);
});

// Background js ↓

const background = document.querySelector('.background');
// Fixed positions for the shapes
const positions = [
    { x: '-7%', y: '20%' }, // Square
    { x: '91%', y: '97%' }, // Circle
    { x: '62.5%', y: '82.5%' }, // Square
    { x: '80%', y: '17.5%' }, // Circle
    { x: '-3%', y: '95%' }, // Square - the last shape for mobile
    { x: '35%', y: '75%' }, // Circle
    { x: '12.5%', y: '85%' }, // Square
    { x: '15%', y: '20%' }, // Circle
    { x: '40%', y: '45%' }, // Square
    { x: '55%', y: '20%' }, // Circle
    { x: '75%', y: '50%' }, // Square
    { x: '95%', y: '65%' }, // Circle
    { x: '35%', y: '5%' }, // Square
    { x: '2.5%', y: '2.5%' }  // Circle
];

// Function to create shapes
function createShapes() {
    positions.forEach((pos, index) => {
        const shape = document.createElement('div');
        shape.classList.add('shape');

        // Set initial positions
        shape.style.left = pos.x;
        shape.style.top = pos.y;

        // Add shape type (circles or squares)
        if (index % 2 === 0) {
            shape.classList.add('square'); // Squares
        }

        background.appendChild(shape);
    });
}

// Function to move shapes based on cursor movement
function moveShapes(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const offsetX = ((clientX - centerX) / window.innerWidth) * 75; // Horizontal offset
        const offsetY = ((clientY - centerY) / window.innerHeight) * 75; // Vertical offset

        // Different speed factor for variety in movement
        const speed = (index + 1) / 5;

        shape.style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
    });
}

// Initialization
createShapes();
window.addEventListener('mousemove', moveShapes);

// Modal window ↓

// Get modal elements
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");
var modalTitle = document.getElementById("modalTitle");
var modalImages = document.getElementById("modalImages");
var modalText = document.getElementById("modalText");

// Get all images that open the modal
var clickableImages = document.querySelectorAll(".clickable-image");

// Function to open the modal
function openModal(event) {
  var clickedImage = event.target;

  // Get data from image attributes
  var title = clickedImage.getAttribute("data-title");
  var text = clickedImage.getAttribute("data-info");
  var images = clickedImage.getAttribute("data-images").split(",");

  // Update modal title, text, and images
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalImages.innerHTML = ""; // Clear previous images

  images.forEach(function(image) {
    var imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Image in modal window";
    imgElement.classList.add("modal-image");
    modalImages.appendChild(imgElement);
  });

  // Disable page scrolling
  document.body.style.overflow = "hidden";

  // Display the modal with animation
  modal.classList.add("show");
}

// Function to close the modal
function closeModalWindow() {
  modal.classList.remove("show");

  // Enable page scrolling after animation
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 300); // Delay matches transition duration
}

// Close modal when clicking the close button
closeModal.onclick = closeModalWindow;

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModalWindow();
  }
};

// Add event listeners to all clickable images
clickableImages.forEach(function(image) {
  image.addEventListener("click", openModal);
});

// Gallery animation ↓

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});
