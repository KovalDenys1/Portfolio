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
        // If the "Contact" state is not active, change the content
        contactBox1.innerHTML = `
        <div class="About_me_text">
          <p class="text_1">About me</p>
          <p class="text_2">My name is Denys Koval, and I am 20 years old.</p>
          <p class="text_2">Skills: JavaScript, HTML, CSS and Adobe programs</p>
          <p class="text_2">Hobbies: Gaming, table tennis, snowboarding</p>
          <p class="text_2">Email: kovaldenys993@gmail.com</p>
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

    // Add classes for hiding content animation
contactBox1.classList.add("slide-out");
contactBox2.classList.add("slide-out");

// Wait for the animation to complete, then update the content
setTimeout(() => {
    // Update the content
    contactBox1.classList.remove("slide-out");
    contactBox2.classList.remove("slide-out");

    // Apply the fade-in animation
    contactBox1.classList.add("slide-in");
    contactBox2.classList.add("slide-in");

    // Update the styles
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

    isContactActive = true; // Update the flag
}, 500); // 500 ms — duration of the hide animation
} else {
    // If the "Contact" state is active, restore the original content and style
    contactBox1.innerHTML = originalContentBox1; // Restore the content
    contactBox2.innerHTML = originalContentBox2; // Restore the content

    // Add classes for hiding content animation
    contactBox1.classList.add("slide-out");
    contactBox2.classList.add("slide-out");

    // Wait for the animation to complete, then update the content
    setTimeout(() => {
        // Update the content
        contactBox1.classList.remove("slide-out");
        contactBox2.classList.remove("slide-out");

        // Apply the fade-in animation
        contactBox1.classList.add("slide-in");
        contactBox2.classList.add("slide-in");

        // Restore the styles
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

        isContactActive = false; // Update the flag
    }, 1000); // 1000 ms — duration of the hide animation
}

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
  
  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModalWindow() {
  modal.style.display = "none";
  
  // Enable page scrolling again
  document.body.style.overflow = "auto";
}

// Close modal when clicking the close button
closeModal.onclick = closeModalWindow;

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModalWindow();
  }
}

// Add event listeners to all clickable images
clickableImages.forEach(function(image) {
  image.addEventListener("click", openModal);
});