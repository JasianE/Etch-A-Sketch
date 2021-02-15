//get reference for container
const container = document.getElementById('container');
//const button = document.getElementById('button');



//create square divs by looping



function fillGrid(size) {
    for (let i = 0; i < size*size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      //Add hover event Listener
      addEventListener("mouseover", change_color)
        
      container.appendChild(gridElement);
      //Appends element to container
    }
    function change_color(e){
        const randomR = Math.floor(Math.random() *256);
        const randomG = Math.floor(Math.random() *256);
        const randomB = Math.floor(Math.random() *256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }; 
    
  }
  /*function grid_create(){
      const size = prompt("Enter New Size from 16-64");
      if (size !== null){
          size = parseInt(size);
          if (size < 16 || size > 64){
              alert("Please enter a number between 16 to 64");
          }
          else{
              clear_grid();
              fillGrid(size);

          }
      }
  }

function clear_grid(){
    const grid_array = Array.from(container.childNodes);
    grid_array.forEach((element) => {
        container.removeChild(element);
    });
*/

    




  fillGrid(16);
  