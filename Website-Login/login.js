    function ktra(){

        const user = document.querySelector("#user");
        const pass = document.querySelector("#pass");
        var status = true;

        var user_error = /^(?=.*[a-z])(?=.*\d).+$/;
        if(user.value.length == 0 || !user_error.test(user.value)){
            alert ("Vui lòng nhập đúng định dạng User!");
            status = false;
        }

        var pass_error = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(pass.value.length < 8 || !pass_error.test(pass.value)){
            alert ("Vui lòng nhập đúng định dạng Password!");
            status = false;
        }
        if(status){
            alert ("Đăng nhập thành công!");
        }
        return status;


    }