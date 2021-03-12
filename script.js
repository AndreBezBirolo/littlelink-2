document.addEventListener("DOMContentLoaded", function(event) {
    function colorSwitch() {
        let button = document.querySelector('.theme-switch'),
            root = document.documentElement;
            button.addEventListener('click', function(){
                if(button.classList.contains('white')){
                    root.style.setProperty('--color-text', '#ffffff')
                    root.style.setProperty('--color-background', '#292929')
                    button.classList.remove('white')
                } else {
                    root.style.setProperty('--color-text', '#000000')
                    root.style.setProperty('--color-background', '#ffffff')
                    button.classList.add('white')
                }
            });
    }
    colorSwitch();
});