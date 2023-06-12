function openModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    let vacancyForm = document.getElementById("vacancy");
    modal.style.display = 'none';
    document.getElementById('formRecruitment').reset();
    vacancyForm.value = "";
    vacancyForm.dispatchEvent(new Event('change'));
}

window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        return;
    }
};  