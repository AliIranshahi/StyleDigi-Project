
//=======> مشکلات  در import بالا
const visibleActionElement = document.getElementById("turevisible");
const passwordInput = document.querySelector("#password");
let isPasswordVisible = false;
visibleActionElement.addEventListener('click', (a) => {
    a.preventDefault();
    isPasswordVisible = !isPasswordVisible;
    if (isPasswordVisible) {
        // visibleActionElement.src = `${location.origin}/asset/icons/visible.png` خطا;
        visibleActionElement.src = "asset/icons/visible.png";
        passwordInput.setAttribute("type", "text");
    } else {
        // visibleActionElement.src = `${location.origin}/asset/icons/invisible.png` خطا;
        visibleActionElement.src = "asset/icons/invisible.png";
        passwordInput.setAttribute("type", "password");
    }
});
formsub.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Username.value == "" || password.value == "") {
        Swal.fire({
            title: "خطا",
            text: "نام کاربری یا رمز عبور اشتباه است",
            icon: "error"
        });
    };
});
// چیکار میکند؟---------------------------
formsub.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const [Username, password] = [
        elements.namedItem("Username").value || "",
        elements.namedItem("password").value || ""
    ];
    console.log("fafaf");

});
