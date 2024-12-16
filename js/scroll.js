document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        // Trigger "About me" functionality only if the form is not active
        if (!isContactActive) {
            document.getElementById('contact').click();
        }
    }, 400);
});
