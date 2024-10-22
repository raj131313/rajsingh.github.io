document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.onclick = function() {
        alert('Hello, world!');
    };
    document.body.appendChild(button);
});
