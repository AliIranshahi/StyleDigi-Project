formsub.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(Passwordrepeat.length<5 && Password.length<5){
        Swal.fire({
            icon: "error",
            title: "خطا",
            text: "نام کاربری و رمز عبور شما کوتاه است",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
});