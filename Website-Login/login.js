function ktra(event) {
    event.preventDefault(); // Chặn hành vi submit mặc định của form

    const user = document.querySelector("#user");
    const pass = document.querySelector("#pass");
    var status = true;

    var user_error = /^(?=.*[a-z\d])[a-zA-Z\d]+$/;

    if (user.value.length == 0 || !user_error.test(user.value)) {
        alert("Vui lòng nhập đúng định dạng User!");
        status = false;
    }

    var pass_error = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$|(?=.*[a-z\d@$!%*?&])[a-z\d@$!%*?&]{8,}$/;

    if (pass.value.length < 8 || !pass_error.test(pass.value)) {
        alert("Vui lòng nhập đúng định dạng Password!");
        status = false;
    }

    if (status) {
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 2500
        });
        setTimeout(() => {
            event.target.submit(); // Gửi form khi đăng nhập thành công
        }, 2500); // Gửi sau 2.5 giây để hiển thị thông báo success
    }
}

document.querySelector('.form').addEventListener('submit', ktra);
