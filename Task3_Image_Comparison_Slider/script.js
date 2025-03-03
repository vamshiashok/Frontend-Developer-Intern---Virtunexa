const slider = document.querySelector('.slider');
        const overlay = document.querySelector('.overlay');
        
        slider.addEventListener('mousedown', (e) => {
            document.onmousemove = function(event) {
                let position = event.clientX - overlay.parentElement.getBoundingClientRect().left;
                let width = overlay.parentElement.offsetWidth;
                if (position < 0) position = 0;
                if (position > width) position = width;
                overlay.style.width = position + 'px';
                slider.style.left = position + 'px';
            }
            document.onmouseup = function() {
                document.onmousemove = null;
            }
        });