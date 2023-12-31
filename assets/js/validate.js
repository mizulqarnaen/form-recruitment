function showErrorText(idElem, text, add, remove) {
    const errorTextElement = document.getElementById(idElem);
    errorTextElement.innerHTML = text;
    errorTextElement.classList.add(add);
    errorTextElement.classList.remove(remove);
}

function validate(input, type = 'input') {
    let nameInput = document.getElementById(input);

    if(type == 'select') {
        let selectedValue = nameInput.value;
      
        if (selectedValue === '') {
            let text = input + ' wajib dipilih!';
            showErrorText(input + 'ErrorText', text, 'danger', 'success');
        } else {
            showErrorText(input + 'ErrorText', '', 'success', 'danger');
        }
    } else {
        let nameValue = nameInput.value.trim();
    
        if (nameValue === '') {
            let text = input + ' tidak boleh kosong!';
            showErrorText(input + 'ErrorText', text, 'danger', 'success');
        } else {
            showErrorText(input + 'ErrorText', '', 'success', 'danger');
        }

        if(input == 'email') {
            if(!checkEmail(nameValue)) {
                let text = 'Email sudah terdaftar!';
                showErrorText('emailErrorText', text, 'danger', 'success');
            }
        }
    }
}

function validateInput() {
    const arrayInput = ['fullname', 'email', 'phonenumber'];
    const arraySelect = ['vacancy', 'position'];
    let isValid = true;

    arrayInput.forEach(input => {
        let nameInput = document.getElementById(input);
        let nameValue = nameInput.value.trim();
      
        if (nameValue === '') {
            let text = input + ' tidak boleh kosong!';
            showErrorText(input + 'ErrorText', text, 'danger', 'success');
            isValid = false;
        } else {
            showErrorText(input + 'ErrorText', '', 'success', 'danger');
        }

        if(input == 'email') {
            if(!checkEmail(nameValue)) {
                let text = 'Email sudah terdaftar!';
                showErrorText('emailErrorText', text, 'danger', 'success');
                isValid = false;
            }
        }

    });

    arraySelect.forEach(input => {
        let selectElement = document.getElementById(input);
        let selectedValue = selectElement.value;
      
        if (selectedValue === '') {
            let text = input + ' wajib dipilih!';
            showErrorText(input + 'ErrorText', text, 'danger', 'success');
            isValid = false;
        } else {
            showErrorText(input + 'ErrorText', '', 'success', 'danger');
        }

    });

    return isValid;
  }

function checkQuota() {

    const selectElement = document.getElementById('position');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const vacancyName = '<strong>' + selectedOption.text + '</strong>';
    const vacancyQuota = selectedOption.getAttribute("data-value");
    const btnSubmit = document.getElementById('btnSubmit');

    if(vacancyQuota == 0) {
        let text = 'Mohon maaf, rekrutasi untuk '+ vacancyName + ' sudah penuh. dan tidak dapat dipilih.';
        showErrorText('positionErrorText', text, 'danger', 'success');
        btnSubmit.disabled = true;
    } else if (vacancyQuota > 0 && vacancyQuota <= 2) {
        let text = 'Kuota tersisa untuk '+ vacancyName + ' hanya ' + vacancyQuota + ' pendaftar.';
        showErrorText('positionErrorText', text, 'danger', 'success');
        btnSubmit.disabled = false;
    } else {
        let text = 'Anda dapat memilih lowongan '+ vacancyName + '.';
        showErrorText('positionErrorText', text, 'success', 'danger');
        btnSubmit.disabled = false;
    }

}

function checkEmail(email) {
    let isAvailable = true;

    dataVacancies.forEach(vacancy => {
        if(vacancy.email == email) {
            isAvailable = false;
        }
    });

    return isAvailable;
}