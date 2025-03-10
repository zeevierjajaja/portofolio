// Sticky Header dengan Shadow saat Scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Efek Smooth Scroll ke Bagian Tertentu
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Sesuaikan dengan tinggi header
                behavior: "smooth"
            });
        }
    });
});