<script>
    function toggleTheme() {
        constbody = document.body;
        const toggleIcon = document.getElementById("theme-toggle");

        body.classList.toggle("dark-mode");

        // Change the icon based on the theme
        if (body.classList.contains("dark-mode")) {
            toggleIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            toggleIcon.classList.replace("fa-sun", "fa-moon");
        }
    }
</script>
