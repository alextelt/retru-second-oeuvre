document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
            console.log('Header loaded successfully');
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            console.log('Footer loaded successfully');
        })
        .catch(error => console.error('Error loading footer:', error));
});