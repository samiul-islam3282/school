//header dropdown menubar///////////
document.addEventListener("click", elv=>{
    const dpd = elv.target.matches("[clickbutton]");
    if(!dpd && elv.target.closest("[wrapperdropdown]")!= null)
    return;
    let cdpd;
    if(dpd){
        cdpd = elv.target.closest("[wrapperdropdown]");
        cdpd.classList.toggle("active");
    }
    document.querySelectorAll("[wrapperdropdown].active").forEach(
        dn =>{
            if(dn === cdpd)
            return;
            dn.classList.remove("active");
        }
    )
});
//header dropdown menubar///////////

//sidebar menu dropdown////////////
$(".menu-switch > a").click(function() {
  $(".submenu").slideUp(210);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".menu-switch").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".menu-switch").removeClass("active");
    $(this)
      .next(".submenu")
      .slideDown(210);
    $(this)
      .parent()
      .addClass("active");
  }
});
//sidebar menu dropdown////////////
///sidebar side in out//////////

$(document).ready(function(){
 $("#switch").click(function(){
    $(".aside").toggleClass("active");
    $(".main").toggleClass("active");
    $(".footer").toggleClass("active");
 });
 
});

shutteroff.onclick = () =>{
    const el=document.querySelector(".aside");
    const elv=document.querySelector(".main");
    const evt=document.querySelector(".footer");
    if(el.classList.contains("active")){
        el.classList.remove("active");
    }
    if(elv.classList.contains("active")){
        elv.classList.remove("active");
    }
    if(evt.classList.contains("active")){
      evt.classList.remove("active");
  }
}
///sidebar side in out//////////

shutteroffcons.onclick = () =>{
  const el=document.querySelector(".aside");
  const elv=document.querySelector(".main");
  const evt=document.querySelector(".footer");
  if(el.classList.contains("active")){
      el.classList.remove("active");
  }
  if(elv.classList.contains("active")){
      elv.classList.remove("active");
  }
  if(evt.classList.contains("active")){
    evt.classList.remove("active");
}
}
shutteroffconss.onclick = () =>{
  const el=document.querySelector(".aside");
  const elv=document.querySelector(".main");
  const evt=document.querySelector(".footer");
  if(el.classList.contains("active")){
      el.classList.remove("active");
  }
  if(elv.classList.contains("active")){
      elv.classList.remove("active");
  }
  if(evt.classList.contains("active")){
    evt.classList.remove("active");
}
}
