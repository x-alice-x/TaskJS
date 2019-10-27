for (var i = 0; i < 49; i++) {
  var row = createRow();
  for (var j = 0; j < 49; j++) {
    createElement(row, i, j);
  }
}

function createRow() {
  var grid = document.getElementById('grid');
  var row = document.createElement('div');
  row.className = "row";
  grid.appendChild(row);
  return row;
}

function createElement(grid, i, j) {
  var elem = document.createElement('div');
  elem.className = "elem";
  elem.setAttribute('x', i);
  elem.setAttribute('y', j);
  elem.innerHTML = getRandomNumber();
  grid.appendChild(elem);
}

window.onload = function() {
	document.body.onclick = function(elem) {
		number = elem.target;
		var x = number.getAttribute('x');
		var y = number.getAttribute('y');
		var attrs = elem.attributes;
		if (number.innerHTML == '1') {
			// number.className = 'green';
			// for (var i = x--; i <= x; i++) {
			// 	for (var j = y--; j <= y; j++) {

			// 	}
			// }
			// number.nextElementSibling.className = 'green';
		}
		else if (number.innerHTML == '2') {
			number.className = 'blue';
		}
		else if (number.innerHTML == '3') {
			number.className = 'red';
		}
	}
}

// window.onload = function() {
//     document.body.onclick = function(event) {
//          t=event.target; 
//          alert(t.innerHTML);
//     }
// }

function getRandomNumber() {
	min = Math.ceil(1);
 	max = Math.floor(4);
 	return Math.floor(Math.random() * (max - min)) + min;
}
