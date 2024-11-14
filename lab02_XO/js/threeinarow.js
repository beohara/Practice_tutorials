//by including the following line of code, we ensure that the javascript is only executed when the HTML is fully loaded
$(document).ready(function () {
    console.log("Ready");


    //-------------Variables---------------------------------
    let table = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]; //will hold the current values on board
    let player = 0; // will track whose turn it is
    const playerSymbols = ['X', 'O']; //array holding symbols for each player
    const cellDim = 150; //dimension of cell in pixels
    let selectedRow = 0; //the row the user just picked
    let selectedCol = 0; //the col the user just picked



    //-------------Functions---------------------------------
    function checkForWin() {
        return false;
    }




    function takeTurn() {
        console.log("Mouse was Clicked in the table!");
    }


    /*Remember Javascript does not check the parameter type, so wo do not have to tell the function that row and col are ints */
    function isFree(row, col) {
        return true;
    }


    //-------------Event Listener---------------------------------
    //when the table is clicked execute the function 'take turn!'  


    $('table').on('click', function (event) {


        takeTurn();
    });






}); // end document ready