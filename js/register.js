$(document).ready(function(){
    $("#register").validate({
        rules:{
            name:{
                required:true
            },
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
            name:{
                required:"<br><br> Enter name",
            },
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