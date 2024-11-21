window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const nav = document.querySelector("nav.navbar");

    // Lấy chiều cao của header để làm mốc
    const headerHeight = header.offsetHeight;

    // Nếu cuộn vượt qua chiều cao của header, cố định nav
    if (window.scrollY >= headerHeight) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});




function validateForm() {
    // Lấy giá trị input
    const name = document.getElementById("name").value.trim();
    const telephone = document.getElementById("phone").value.trim();
    // Xóa lỗi cũ
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    //document.getElementById("emailError").textContent = "";

    let isValid = true;

    // Kiểm tra Name
    if (name.length < 2) {
        document.getElementById("nameError").textContent = "Họ và Tên không hợp lệ";
        isValid = false;
    }

    // Kiểm tra Telephone
    if (!/^\d{10}$/.test(telephone)) {
        document.getElementById("phoneError").textContent = "Số điện thoại không hợp lệ";
        isValid = false;
    }

    var toastMessage = "";
    if (isValid) {
        // Nếu hợp lệ
        toastMessage = "Đăng ký thành công!";
        document.getElementById('myToast').classList.remove('text-bg-danger'); // Xóa màu đỏ nếu có lỗi
        document.getElementById('myToast').classList.add('text-bg-success'); // Thêm màu xanh cho thông báo thành công
    } else {
        // Nếu có lỗi
        toastMessage = "Đăng ký không thành công!";
        document.getElementById('myToast').classList.remove('text-bg-success'); // Xóa màu xanh nếu thành công
        document.getElementById('myToast').classList.add('text-bg-danger'); // Thêm màu đỏ cho thông báo lỗi
    }

    document.querySelector('#myToast .toast-body').textContent = toastMessage;
    var toast = new bootstrap.Toast(document.getElementById('myToast'), {
        delay: 3000 // Thời gian hiển thị Toast là 3 giây
    });

    toast.show();
    // Hiển thị kết quả
    if (isValid) {
        $('#exampleModal').modal('hide');
    }
}



function validateForm2(){
    document.querySelector('#myToast .toast-body').textContent = "Đăng ký thành công";
    var toastElement = document.getElementById('myToast');
    toastElement.classList.add('bg-success', 'text-white');
    var toast = new bootstrap.Toast(document.getElementById('myToast'), {
        delay: 3000 // Thời gian hiển thị Toast là 3 giây
    });

    toast.show();
}   