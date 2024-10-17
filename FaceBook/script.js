$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
                fname:{
                    required:true,
                    minlength:4
                },
                sname:{
                    required:true,
                    minlength:4
                },
                emailAddress:{
                    required:true,
                    email:true
                },
                password:{
                    minlength:8,
                    required:true
                },
                day:{
                    required:true
                },
                month:{
                    required:true
                },
                year:{
                    required:true
                },
                gen:{
                    required:true
                }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter minimum 4 characters"
            }
        }
    })
})