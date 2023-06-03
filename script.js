const container = document.getElementById("container")



for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
        let box = document.createElement('div');
        box.className = "container X-" + i + " " +  "Y-" + j;
        container.appendChild(box)
        box.style.backgroundColor = 'white'
    }
}

const grid = container.children


Array.from(grid).forEach((item) => {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = "grey"
    });
    item.addEventListener('mouseout', function() {
        item.style.backgroundColor = "white"
    });
});





