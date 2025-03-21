document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const form = document.getElementById("gigForm");
    const backBtn = document.querySelector(".back-btn");
    const publishBtn = document.querySelector(".publish-btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simple Form Validation
        const pay = document.getElementById("pay").value;
        const vacancies = document.getElementById("vacancies").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;
        const gigDescription = document.getElementById("gig-description").value;

        if (!pay || !vacancies || !startDate || !endDate || !startTime || !endTime || !gigDescription) {
            alert("Please fill out all fields.");
            return;
        }

        alert("Gig successfully published!");
        window.location.href = "success.html"; // Redirect to success page
    });

    backBtn.addEventListener("click", function () {
        window.location.href = "step2.html"; // Navigate to previous step
    });
});
