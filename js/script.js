const LINK_INSCRICAO = "https://forms.gle/vd7WSYYuoQjzHo3f8";

    document.querySelectorAll(".js-inscricao").forEach((el)=>{
      el.href=LINK_INSCRICAO;
      el.target="_blank";
      el.rel="noopener noreferrer";
    });

    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
        }
      });
    },{threshold:.12});

    document.querySelectorAll(".reveal").forEach((el,i)=>{
      el.style.transitionDelay=`${Math.min(i*45,320)}ms`;
      observer.observe(el);
    });

    const nav=document.getElementById("nav");
    const toggle=document.getElementById("mobileToggle");
    const navLinks=document.getElementById("navLinks");

    toggle.addEventListener("click",()=>nav.classList.toggle("open"));

    navLinks.querySelectorAll("a").forEach((a)=>
      a.addEventListener("click",()=>nav.classList.remove("open"))
    );
