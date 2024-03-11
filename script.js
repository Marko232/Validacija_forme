let inputs = document.querySelectorAll('input');
let errors = {
        "ime_prezime": [],
        "korisnicko_ime": [],
        "email": [],
        "lozinka": [],
        "ponovi_lozinku": []
};

inputs.forEach(element => {
    element.addEventListener('change', e=> {
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttributeNames('name');

        if(inputValue.length > 4) {
            errors[inputName] = [];

            switch (inputName) {
                case 'ime_prezime':
                    let validation = inputValue.trim();
                    validation = validation.split (" ");
                    if(validaion.length < 2) {
                        errors[inputName].push('Moras napisati i ime i prezime');
                    }
                    break;
                case 'email':
                    if (!validateEmail(inputValue)) {
                        errors[inputName].push('Neispravna emial adresa');
                    }
                    break;
                case 'ponovi lozinku':
                    let lozinka = document.querySelector('input[name="lozinka"]').value;
                    if (inputValue !==lozinka) {
                        errors[inputName].push('Lozinke se ne poklapaju');
                    }
                    break;
            }

        } else {
            errors[inputName] =  ['Polje ne moze imat manje od 5 karaktera']
        }
        populateErrors();
    });
});

const populateErorrs = () => {
    for (let element of document.querySelectorAll('ul')) {
        element.remove();
    }

    for (let key of Object.keys(errors)){
        let input = document.querySelector('input[name="${key}"]');
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error => {
            let li =document.createElement('li');
            li.innerText = error;

            errorElement.appendChild(li);

        });
    }
}

const validateEmail = email => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

}