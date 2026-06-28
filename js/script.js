document.addEventListener("DOMContentLoaded", (x => {
    const header = document.getElementById('header')
    const footer = document.getElementById('footer')

    if (header){
        fetch("components/navbar.html")
            .then(r => r.text())
            .then(nav => {header.innerHTML = nav})
    }
    
    if(footer){
        fetch("components/footer.html")
            .then(r => r.text())
            .then(ft => {footer.innerHTML = ft})
    }
}))