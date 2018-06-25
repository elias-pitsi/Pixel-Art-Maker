// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () { // will only run once the DOM is ready for javascript code to execute
    //when the size if pick we call makeGrid function 
    $("#sizePicker").submit( function makeGrid(grid){
        $("table tr").remove(); // clear the grid after submit is hit
            //selecting the rows and cols of the grid
            var rows = $("#inputHeight").val();
            var cols = $("#inputWeight").val();

            for(var i = 1; i <= rows;i++)
            {
                $("table").append("<tr></tr>");
                for( var j = 1; j <= cols; j++)
                {
                    $("tr:last").append("<td></td>");
                   $('td').attr("class", 'grids') // for every td a class of grids is created 
                }
            }
            grid.preventDefault(); // prinds the grid from being deleted after they are created 

            // when  the user pick a color and used it in each grid execute this function 
            $(".grids").click(function (event){
                var color = $("#colorPicker").val();
                $(event.target).css("background-color", color);// adds the chosen color to the cell
            });
    });
});




