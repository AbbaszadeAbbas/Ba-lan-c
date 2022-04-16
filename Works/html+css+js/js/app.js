// // Hikmat's codes

// const containerDiv = document.createElement('div');
// containerDiv.style.display = 'flex';

// let arr = [];
// for (let i = 0; i < 30; i++) {
//     arr[i] = document.createElement('div');

//     arr[i].style.width = '200px';
//     arr[i].style.height = '400px';
//     arr[i].style.marginRight = '20px';
//     arr[i].style.backgroundColor = `rgb(20${i}, ${i}, ${i})`;

//     containerDiv.appendChild(arr[i]);

// }
// console.log(containerDiv);

// document.body.appendChild(containerDiv);


// // Samir M. codes

function createGrid(containerWidth, elementCount, columnCount, gap) {
    // div nece yaradabilerem
    let boxContainer = document.createElement('div')
        //
    boxContainer.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`
    boxContainer.style.gap = `${gap}px`


    boxContainer.className = 'box-container'
    boxContainer.style.width = `${containerWidth}px;`

    for (let i = 0; i < elementCount; i++) {
        let randR = Math.floor(Math.random() * 255);
        let randG = Math.floor(Math.random() * 255);
        let randB = Math.floor(Math.random() * 255);
        let box = document.createElement('div')
        box.className = 'box'
        box.style.background = `rgb(${randR},${randG},${randB})`
        boxContainer.appendChild(box)
    }
    document.body.appendChild(boxContainer)
}

createGrid(1500, 100, 3, 10)