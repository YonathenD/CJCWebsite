document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#fafafa";
    var logoVideo = document.getElementById("logoVideo");
    var homeScreen = document.getElementById("homeScreen");

    logoVideo.addEventListener("ended", function() {
        // Video has ended, hide the logo and display the home screen
        logoVideo.style.display = "none";
        homeScreen.style.display = "block";
    });
});
