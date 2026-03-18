let darkmode = document.querySelector("#darkmode");
 
darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
}};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const elementos = document.querySelectorAll(".hidden");

elementos.forEach((el)=> observer.observe(el));
