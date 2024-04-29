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
            document.getElementById("button").addEventListener("click", function (event){
                    event.preventDefault()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Đăng nhập thành công",
                        showConfirmButton: false,
                        timer: 2500
                    });
                })
                document.getElementById('submit').addEventListener('click', function(event) {
                    window.location.href = './index.html'; // Chuyển hướng sang trang mới khi click nút
                });
          }
        
        return status;


    }