const container = document.getElementById("container");

const btn = document.getElementById("btn");

let size = 16;
let draw = false;

adjustSize(size);

btn.addEventListener('click', function() {
    size = prompt("Enter number between 5 and 100");
    adjustSize(size);
})

function adjustSize(size) {

    let grid = container.children;
    console.log(grid)
    Array.from(grid).forEach((item) => {
        container.removeChild(item)
    })
        
    container.style.gridTemplateRows = 'repeat(' + size + ", auto)"
    container.style.gridTemplateColumns = 'repeat(' + size + ", auto)"

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.className = "container X-" + i + " " +  "Y-" + j;
            container.appendChild(box);
            box.style.backgroundColor = 'white';
        }
    }

    grid = container.children;

    Array.from(grid).forEach((item) => {
        item.addEventListener('mousedown', function() {
            draw = true;
        });
        item.addEventListener('mouseup', function() {
            draw = false;
        });
        item.addEventListener('mouseover', function() {
            if (draw == true) {
                item.style.backgroundColor = "grey";
            }
           
        });
    });
}








