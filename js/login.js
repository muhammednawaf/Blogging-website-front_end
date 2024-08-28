$(document).ready(function(){
    $("#login").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
                password:true
            }
        },
        messages:{
            email: {
                required: "<br><br> Enter email address",
                email: "<br><br> Enter proper email"
            },
            password: {
                required: "<br><br>Enter password",
                minlength:"<br><br>Enter more than 6 numbers",
            },
        }
    });
});


