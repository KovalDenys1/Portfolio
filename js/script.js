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


const hamburger = document.querySelector(".hamburger");  // Находим элемент гамбургера (кнопка меню)
const navButtons = document.querySelector(".nav_buttons");  // Находим меню навигации
const body = document.body;  // Получаем тело страницы для изменения прокрутки

hamburger.addEventListener("click", () => {  // Добавляем слушатель события на клик по кнопке меню
    hamburger.classList.toggle("active");  // Переключаем класс "active" для гамбургера (для анимации или изменения внешнего вида)
    navButtons.classList.toggle("active");  // Переключаем класс "active" для меню навигации

    if (navButtons.classList.contains("active")) {  // Если меню активно
        body.style.overflow = "hidden";  // Отключаем прокрутку страницы
    } else {  // Если меню не активно
        body.style.overflow = "auto";  // Включаем прокрутку страницы
    }
});

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {  // Добавляем слушатель событий на все ссылки в меню
    hamburger.classList.remove("active");  // Убираем класс "active" у гамбургера
    navButtons.classList.remove("active");  // Убираем класс "active" у меню

    body.style.overflow = "auto";  // Включаем прокрутку страницы при закрытии меню
}));
let isContactActive = false; // Флаг для отслеживания состояния

// Сохраняем изначальные состояния
const contactBox1 = document.getElementById("contact_box1");
const contactBox2 = document.getElementById("contact_box2");

const originalContentBox1 = contactBox1.innerHTML; // Сохраняем исходное содержимое первого div
const originalContentBox2 = contactBox2.innerHTML; // Сохраняем исходное содержимое второго div
const originalBackgroundColorBox1 = contactBox1.style.backgroundColor; // Сохраняем исходный фон первого div

document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    if (!isContactActive) {
        // Если состояние "Контакт" не активно, меняем содержимое
        contactBox1.innerHTML = "<p>(Info about me)</p>"; 
        contactBox2.innerHTML = "<p>(Contact form)</p>";
        contactBox1.style.backgroundColor = "#f0f0f0"; // Изменяем фон
        isContactActive = true; // Обновляем флаг
    } else {
        // Если состояние "Контакт" активно, восстанавливаем исходное содержимое и стиль
        contactBox1.innerHTML = originalContentBox1; // Возвращаем содержимое
        contactBox2.innerHTML = originalContentBox2; // Возвращаем содержимое
        contactBox1.style.backgroundColor = originalBackgroundColorBox1; // Возвращаем фон
        isContactActive = false; // Обновляем флаг
    }
});


const background = document.querySelector('.background');

// Фиксированные позиции фигур
const positions = [
    { x: '-7%', y: '20%' }, // Квадрат
    { x: '91%', y: '97%' }, // Круг
    { x: '62.5%', y: '82.5%' }, // Квадрат
    { x: '80%', y: '17.5%' }, // Круг
    { x: '-3%', y: '95%' }, // Квадрат - последняя фигура для телефона
    { x: '35%', y: '75%' }, // Круг
    { x: '12.5%', y: '85%' }, // Квадрат
    { x: '15%', y: '20%' }, // Круг
    { x: '40%', y: '45%' }, // Квадрат
    { x: '55%', y: '20%' }, // Круг
    { x: '75%', y: '50%' }, // Квадрат
    { x: '95%', y: '65%' }, // Круг
    { x: '35%', y: '5%' }, // Квадрат
    { x: '2.5%', y: '2.5%' }  // Круг
];

// Функция для создания фигур
function createShapes() {
    positions.forEach((pos, index) => {
        const shape = document.createElement('div');
        shape.classList.add('shape');

        // Устанавливаем начальные позиции
        shape.style.left = pos.x;
        shape.style.top = pos.y;

        // Добавляем форму (круги или квадраты)
        if (index % 2 === 0) {
            shape.classList.add('square'); // Квадраты
        }

        background.appendChild(shape);
    });
}

// Функция для движения фигур при перемещении курсора
function moveShapes(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const offsetX = ((clientX - centerX) / window.innerWidth) * 75; // Сдвиг по X
        const offsetY = ((clientY - centerY) / window.innerHeight) * 75; // Сдвиг по Y

        // Разный коэффициент для разнообразия движения
        const speed = (index + 1) / 5;

        shape.style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
    });
}

// Инициализация
createShapes();
window.addEventListener('mousemove', moveShapes);

// Получаем элементы
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");
var modalTitle = document.getElementById("modalTitle");
var modalImages = document.getElementById("modalImages");
var modalText = document.getElementById("modalText");

// Получаем все картинки, которые открывают модальное окно
var clickableImages = document.querySelectorAll(".clickable-image");

// Функция для открытия модального окна
function openModal(event) {
  var clickedImage = event.target;
  
  // Получаем данные из атрибутов картинок
  var title = clickedImage.getAttribute("data-title");
  var text = clickedImage.getAttribute("data-info");
  var images = clickedImage.getAttribute("data-images").split(",");
  
  // Обновляем заголовок, текст и изображения в модальном окне
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalImages.innerHTML = ""; // Очищаем предыдущие изображения
  
  images.forEach(function(image) {
    var imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Image in modal window";
    imgElement.classList.add("modal-image");
    modalImages.appendChild(imgElement);
  });

  // Отключаем прокрутку страницы
  document.body.style.overflow = "hidden";
  
  // Отображаем модальное окно
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModalWindow() {
  modal.style.display = "none";
  
  // Включаем прокрутку страницы обратно
  document.body.style.overflow = "auto";
}

// Закрытие модального окна при клике на крестик
closeModal.onclick = closeModalWindow;

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  if (event.target == modal) {
    closeModalWindow();
  }
}

// Добавляем обработчик событий для всех кликабельных картинок
clickableImages.forEach(function(image) {
  image.addEventListener("click", openModal);
});
