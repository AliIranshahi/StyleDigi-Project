bars.addEventListener('click',(e)=>{
    e.preventDefault();
    const isMenuVisible = mobiledesign.classList.contains('d-block');
    if(isMenuVisible){
        mobiledesign.classList.remove("fadeInRight");
        mobiledesign.classList.remove("position-fixed");
        mobiledesign.classList.remove("start-0");
        mobiledesign.classList.remove("z-3");
        mobiledesign.classList.remove("top-0");
        mobiledesign.classList.add("d-none");
        mobiledesign.classList.remove("d-block");
        mobiledesign.classList.remove("w-75");
        mobiledesign.classList.remove("h-100");
        mobiledesign.classList.remove("bg-white");
        mobiledesign.classList.remove("d-md-flex");
        ssawe.classList.remove("d-flex");
        bacaeaw.classList.remove("d-flex");
        bacaeaw.classList.remove("line-hight-bmast");
        bacaeaw.classList.remove("top-0")
        bacaeaw.classList.remove("position-fixed");
        bacaeaw.classList.remove("w-75");
        mobiledesign.classList.remove("fadeInRight");
        swiperdemos.remove();
        navbartop.remove();
        document.removeEventListener('click', handleClickOutside); //+-+-+-+-+--+-+-+-+--+-+-+-+--+-+-+-+-//
        menuOpen = false;
    }else{
        mobiledesign.classList.add("fadeInRight");
        mobiledesign.classList.toggle("position-fixed");
        mobiledesign.classList.add("bg-white");
        mobiledesign.classList.toggle("start-0");
        mobiledesign.classList.toggle("z-3");
        mobiledesign.classList.toggle("top-0");
        mobiledesign.classList.remove("d-none");
        mobiledesign.classList.toggle("d-block");
        mobiledesign.classList.toggle("w-75");
        mobiledesign.classList.toggle("h-100");
        ssawe.classList.toggle("flex-column");
        mobiledesign.classList.add("h-100");
        mobiledesign.classList.remove("d-md-flex");
        ssawe.classList.remove("d-flex");
        bacaeaw.classList.remove("d-flex");
        bacaeaw.classList.toggle("line-hight-bmast");
        bacaeaw.classList.toggle("top-0");
        bacaeaw.classList.toggle("position-fixed");
        bacaeaw.classList.add("w-75");
        swiperdemos.remove();
        navbartop.remove();
        document.addEventListener('click', handleClickOutside); //+-+-+-+-+--+-+-+-+--+-+-+-+--+-+-+-+-//
        menuOpen = true;
    };
});
closes.addEventListener('click',(wes)=>{
    wes.preventDefault();
    mobiledesign.classList.remove("position-fixed");
    mobiledesign.classList.remove("start-0");
    mobiledesign.classList.remove("z-3");
    mobiledesign.classList.remove("top-0");
    mobiledesign.classList.add("d-none");
    mobiledesign.classList.remove("d-block");
    mobiledesign.classList.remove("w-75");
    mobiledesign.classList.remove("h-100");
    mobiledesign.classList.remove("bg-white");
    mobiledesign.classList.remove("d-md-flex");
    ssawe.classList.remove("d-flex");
    bacaeaw.classList.remove("d-flex");
    bacaeaw.classList.remove("line-hight-bmast");
    bacaeaw.classList.remove("top-0")
    bacaeaw.classList.remove("position-fixed");
    bacaeaw.classList.remove("w-75");
    mobiledesign.classList.remove("fadeInRight");
    swiperdemos.remove();
    navbartop.remove();
    document.removeEventListener('click', handleClickOutside); //+-+-+-+-+--+-+-+-+--+-+-+-+--+-+-+-+-//
    menuOpen = false;
});