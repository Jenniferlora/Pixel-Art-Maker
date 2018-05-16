// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	// Your code goes here!
	
	let submit = $('input[type="submit"]');
	let canvas = $('#pixelCanvas');
	let colorPicker = $('#colorPicker');

	submit.on('click', function(e){
		e.preventDefault();
		canvas.empty();
		let height = $('#inputHeight').val();
		let width = $('#inputWeight').val();
		console.log(height);
		console.log(width);
		addRows(height, width);
	});
	
	function addRows(height,width){
		for(var i=0; i < height; i++) {
			canvas.append('<tr></tr>');
		}addColumns(width);
	}
	
	function addColumns(width){
		for(var i=0; i <width; i++) {
			let cell=$('<td></td>',{class:'cells'});
		
			cell.on('click',function(e){
				e.preventDefault()
				let color = colorPicker.val();
				$(this).css('background-color', color);
			});

			$('tr').append(cell);
		}
	}

	$('#clear').on('click', function(e){
		e.preventDefault();
		$('.cells').css('background-color','');
	})
}

makeGrid();