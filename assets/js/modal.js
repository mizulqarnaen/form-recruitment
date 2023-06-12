function openModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    const selectPosition = document.getElementById('position');
    const vacancyForm = document.getElementById("vacancy");
    modal.style.display = 'none';
    
    document.getElementById('formRecruitment').reset();
    vacancyForm.value = "";
    removeSelectOptions(selectPosition);
}

window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        return;
    }
};  