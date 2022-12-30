
    //=============== START - DECLARATION DU FORMULAIRE ===============//    

    (function() {
        'use strict'

        let form = document.getElementById('lessonForm');

        form.addEventListener('submit', function(event) {
            Array.from(form.elements).forEach((input) => {
                if (input.type !== "submit") {
                    if (!validateFields(input)) {

                        event.preventDefault();
                        event.stopPropagation();
                        
                        input.classList.remove("is-valid");
                        input.classList.add("is-invalid");
                        input.nextElementSibling.style.display = 'block';
                    } 
                    else {
                      
                        input.nextElementSibling.style.display = 'none';
                        input.classList.remove("is-invalid");
                        input.classList.add("is-valid");
                    }
                }
            });
        }, false)
    })()

    // Validation d'un champ REQUIRED
    function validateRequired(input) {
      return !(input.value == null || input.value == "");
  }
  //validation du nombre de caractères : MIN & MAX
  function validateLength(input, minLength, maxLength){
    return !(input.value.length < minLength || input.value.length > maxLength);
  }

  // Validation des caractères : LATIN & LETTRES
  function validateText(input){
    return input.value.match("^[A-Za-a]+$")
  }
  // Validation d'un e-mail
  function valideEmail(input){
    let EMAIL = input.value;
    let POSAT = EMAIL.indexOf("@");
    let POSDOT = EMAIL.lastIndexOf(".");

    return !(POSAT < 1 || (POSDOT - POSAT < 2));
  }

  // Validation Code postal
  function validatePostCode(input){
    return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$");
  }

  // Validation adresse
  function validateAddress(input){
    return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
  }

   // Validation d'un checkbox
  function validateTerms(input) {
    return input.checked;
}


  function validateFields(input) {
    let fieldName = input.name;
    // Validaton de l'input PRENOM
    if (fieldName == "firstName") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateLength(input, 2, 20)) {
          return false;
        }
        return (true);
    }
    if (fieldName == "email"){
      if (!valideEmail(input)){
        return false;
      }
      return (true);
    }
    if(fieldName == "postCode"){
      if(!validatePostCode(input)){
        return false;
      }
      return (true);
    }
    if(fieldName == "address"){
      if(!validateAddress(input)){
        return false;
      }
      return(true);
    }
}
    //=============== END - DECLARATION DU FORMULAIRE ===============//

    
    //=============== START - VALIDATION DES CHAMPS DU FORMULAIRE ===============//

    function validateFields(input) {

        let fieldName = input.name;

        // Validaton de l'input PRENOM
        if (fieldName == "firstName") {
            if (!validateRequired(input)) {
                return false;
            }

            if (!validateLength(input, 2, 20)) {
                return false;
            }

            if (!validateText(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input NOM
        if (fieldName == "lastName") {
            if (!validateRequired(input)) {
                return false;
            }

            if (!validateLength(input, 2, 20)) {
                return false;
            }

            if (!validateText(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input EMAIL
        if (fieldName == "email") {

            if (!validateRequired(input)) {
                return false;
            }

            if (!validateEmail(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input NUMERO DE TELEPHONE
        if (fieldName == "phoneNumber") {
            if (!validateRequired(input)) {
                return false;
            }

            if (!validatePhoneNumber(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input ADRESSE
        if (fieldName == "address") {

            if (!validateRequired(input)) {
                return false;
            }

            if (!validateAddress(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input VILLE
        if (fieldName == "city") {
            if (!validateRequired(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de l'input CODE POSTAL
        if (fieldName == "postCode") {

            if (!validateRequired(input)) {
                return false;
            }

            if (!validatePostCode(input)) {
                return false;
            }

            return (true);
        }

        // Validaton de la checkbox CONDTIONS
        if (fieldName == "conditions") {
            if (!validateTerms(input)) {
                return false;
            }

            return (true);
        }
    }

    //=============== END - VALIDATION DES CHAMPS DU FORMULAIRE ===============//



