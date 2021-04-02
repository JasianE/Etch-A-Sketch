//get reference for container
const container = document.getElementById('container');
//const button = document.getElementById('button');



//create square divs by looping



function fillGrid(size) {
    for (let i = 0; i < size*size - 4; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      //Add hover event Listener
      gridElement.addEventListener("mouseover", change_color)
        
      container.appendChild(gridElement);
      //Appends element to container
    }
    //Change grid_element's colour to black to mimic writing or drawing or sketching tomato tomato11

    function change_color(e){
        e.target.style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
    }
    
  }

function clearGrid(){
    container.innerHTML = '';
    fillGrid(48)
}

    
fillGrid(48);
