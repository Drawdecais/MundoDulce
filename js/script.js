document.addEventListener("DOMContentLoaded", (x => {
    const navbar = document.getElementById('navbar')
    const footer = document.getElementById('footer')

    if (navbar){
        fetch("components/navbar.html")
            .then(r => r.text())
            .then(nav => {navbar.innerHTML = nav})
    }
    
    if(footer){
        fetch("components/footer.html")
            .then(r => r.text())
            .then(ft => {footer.innerHTML = ft})
    }
}))