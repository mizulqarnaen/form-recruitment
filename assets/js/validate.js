function showErrorText(idElem, text, add, remove) {
    const errorTextElement = document.getElementById(idElem);
    errorTextElement.innerHTML = text;
    errorTextElement.classList.add(add);
    errorTextElement.classList.remove(remove);
}

function checkQuota() {

    const selectElement = document.getElementById('position');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const vacancyName = '<strong>' + selectedOption.text + '</strong>';
    const vacancyQuota = selectedOption.getAttribute("data-value");

    if(vacancyQuota == 0) {
        let text = 'Mohon maaf, rekrutasi untuk '+ vacancyName + ' sudah penuh. dan tidak dapat dipilih.';
        showErrorText('positionErrorText', text, 'danger', 'success');
    } else if (vacancyQuota > 0 && vacancyQuota <= 2) {
        let text = 'Kuota tersisa untuk '+ vacancyName + ' hanya ' + vacancyQuota + ' pendaftar.';
        showErrorText('positionErrorText', text, 'danger', 'success');
    } else {
        let text = 'Anda dapat memilih lowongan '+ vacancyName + '.';
        showErrorText('positionErrorText', text, 'success', 'danger');
    }

}