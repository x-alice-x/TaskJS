
for (var i = 0; i < 50; i++) {
  var row = createRow();
  for (var j = 0; j < 50; j++) {
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
		x = Number(x);
		y = Number(y);
		var elems = document.getElementsByClassName('elem');
		if (number.innerHTML == '1') {
			for (var i = 0; i <= elems.length; i++) {
				var tmp_x = elems[i].getAttribute('x');
				var tmp_y = elems[i].getAttribute('y');
				if (((tmp_x == x - 1)||(tmp_x == x)||(tmp_x == x + 1))
					&&((tmp_y == y - 1)||(tmp_y == y)||(tmp_y == y + 1))){
					elems[i].id = "green";
				}
			}
		}
		else if (number.innerHTML == '2') {
			for (var i = 0; i <= elems.length; i++) {
				var tmp_x = elems[i].getAttribute('x');
				var tmp_y = elems[i].getAttribute('y');
				if ((((tmp_x == x - 2)||(tmp_x == x)||(tmp_x == x + 2))&&((tmp_y == y - 2)||(tmp_y == y)||(tmp_y == y + 2)))
					||((tmp_x == x - 2)||(tmp_x == x + 2))&&((tmp_y == y - 1)||(tmp_y == y + 1))
					||((tmp_x == x - 1)||(tmp_x == x + 1))&&((tmp_y == y - 2)||(tmp_y == y + 2))) {
					elems[i].id = "blue";
				}
			}
		}
		else if (number.innerHTML == '3') {
			for (var i = 0; i <= elems.length; i++) {
				var tmp_x = elems[i].getAttribute('x');
				var tmp_y = elems[i].getAttribute('y');
				if ((((tmp_x == x - 3)||(tmp_x == x)||(tmp_x == x + 3))&&((tmp_y == y - 3)||(tmp_y == y)||(tmp_y == y + 3)))
					||(((tmp_x == x - 3)||(tmp_x == x + 3))&&((tmp_y == y - 2)||(tmp_y == y + 2)))
					||(((tmp_x == x - 3)||(tmp_x == x + 3))&&((tmp_y == y - 1)||(tmp_y == y + 1)))
					||(((tmp_x == x - 1)||(tmp_x == x + 1))&&((tmp_y == y - 3)||(tmp_y == y + 3)))
					||(((tmp_x == x - 2)||(tmp_x == x + 2))&&((tmp_y == y - 3)||(tmp_y == y + 3)))){
					elems[i].id = "red";
				}
			}
		}
	}
}

function getRandomNumber() {
	min = Math.ceil(1);
 	max = Math.floor(4);
 	return Math.floor(Math.random() * (max - min)) + min;
}
