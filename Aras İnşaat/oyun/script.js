
let originalX = null;
let originalY = null;

function moveBox() {
    const box = document.getElementById("box");

    
    if (originalX === null || originalY === null) {
        const rect = box.getBoundingClientRect();
        originalX = rect.left;
        originalY = rect.top;
    }

    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    
    const randomX = Math.floor(Math.random() * (windowWidth - box.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - box.offsetHeight));

   
    box.style.transform = `translate(${randomX - originalX}px, ${randomY - originalY}px)`;

    
    setTimeout(() => {
        box.style.transform = "translate(0, 0)";
    }, 1000); 
}


document.getElementById("box").addEventListener("mouseenter", moveBox);
