document.addEventListener("DOMContentLoaded", function() {
    function toggleDropdown(id) {
        let element = document.getElementById(id);
        if (element) {
            element.classList.toggle("show");
        }
    }

    // Attach event listeners dynamically to prevent errors
    document.querySelectorAll(".more-btn").forEach(button => {
        button.addEventListener("click", function() {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleDropdown(targetId);
        });
    });

    document.querySelectorAll(".price-btn").forEach(button => {
        button.addEventListener("click", function() {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleDropdown(targetId);
        });
    });
});
