function scrollfunction(){ 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    const nav = document.getElementById("navbar");
    nav.style.background = "#363538";  
    nav.style.transition = "all 0.5s ease-out"
  } else {

    document.getElementById("navbar").style.background = "none";
  }
}
