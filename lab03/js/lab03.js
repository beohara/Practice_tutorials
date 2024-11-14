$(document).ready(function () {
    console.log("Ready");
}); // end document ready

//This code is makes an asynchronous AJAX request
//in jQuery that fetches data from our JSON file named idm.json
$.ajax({
    url: "data/idm.json",
    success: function (data) {
        console.log(data);

        // Clear previous content before appending new ones
        $('.modules').html('');

        // Loop through the 5 modules 
        for (var i = 0; i < data.module.length; i++) {
            // Append each lecturer's name instead of replacing it
            $('.modules').append('<p>' + data.module[i].id + '<br>' + data.module[i].name + '<br>' + data.module[i].lecturer + '</p>');
        }
    },

});
