document.getElementsByClassName("email")[0].addEventListener("click", ()=>{
    let copyText = document.getElementsByClassName("email-text")[0];
    navigator.clipboard.writeText(copyText.innerText);
    alert('email copied');
});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


