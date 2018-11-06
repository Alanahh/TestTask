$(function() {
    $("#form").validate({
        rules: {
            name: {
                required: true,
                rangelength: [4, 11]
            },
            secondname: {
                required: true,
                rangelength: [3, 21]
            },
            email: {
                required: true,
                email: true 
            },
            gender: {
                required: true
            },
            pass: {
                required: true,
                minlength: 6
            },
            pass2: {
                equalTo: "#pass"
            }
        }
    });
});