$(".menu-toggle").on("click", function(event) {
    event.preventDefault();
    $(".menu-vertical").toggleClass("hidden");
})