const toaster = document.querySelector('.toaster');
const annuaireTableBody = document.querySelector('.table tbody');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const fonctionInput = document.getElementById('fonction');

var emailValue = emailInput.value.trim();

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorFonction = document.getElementById('error-fonction');

let employees = [];
let annuaireActuel;
let employeeToDeleteId = null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ouverture du modal d'ajout
function ouvrirModalAjout() {
    document.getElementById('modalAjout').style.display = 'flex';
}

// Fermeture du modal d'ajout
function fermerModalAjout() {
    document.getElementById('modalAjout').style.display = 'none';
}

// Ouverture du modal suppression (avec l'ID pour la suppression)
function ouvrirModalDelete(employeeId) {
    employeeToDeleteId = employeeId;
    document.getElementById('modaldelete').style.display = 'flex';
}

// Fermeture du modal suppression
function fermerModalDelete() {
    document.getElementById('modaldelete').style.display = 'none';
}


// Sauvegarde le tableau employees
function enregistreEmployer() {
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Charge le tableau employees
function chargerEmployer() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
    }
    afficherEmployees();
}

//validation de champs


//validation de l'email
function validateEmail() {
    const emailValue = inputElement.value.trim();
    if (emailValue === "") {
        emailInput.classList.add("error-input");
        errorEmail.innerHTML = "Veuillez saisir l'email.";
        return false;
    } else if (!EMAIL_REGEX.test(emailValue)) {
        emailInput.classList.add("error-input");
        errorEmail.innerHTML = "Veuillez saisir une email valide.";
        return false;
    } else {
        emailInput.classList.remove("error-input");
        errorEmail.innerHTML = '';
        return true;
    }
}


// Affichele tableau des employés
function afficherEmployees() {
    annuaireTableBody.innerHTML = '';

    employees.forEach(employee => {
        const nouvelleLigne = document.createElement('tr');
        nouvelleLigne.dataset.id = employee.id;

        const celluleName = document.createElement('td');
        celluleName.innerText = employee.name;

        const celluleEmail = document.createElement('td');
        celluleEmail.innerText = employee.email;

        const celluleFonction = document.createElement('td');
        celluleFonction.innerText = employee.fonction;

        const celluleAction = document.createElement('td');
        const boutonDelete = document.createElement('button');
        boutonDelete.innerText = 'Supprimer';
        boutonDelete.className = 'delete';

        boutonDelete.addEventListener('click', () => ouvrirModalDelete(employee.id));

        celluleAction.appendChild(boutonDelete);

        nouvelleLigne.appendChild(celluleName);
        nouvelleLigne.appendChild(celluleEmail);
        nouvelleLigne.appendChild(celluleFonction);
        nouvelleLigne.appendChild(celluleAction);

        annuaireTableBody.appendChild(nouvelleLigne);
    });
}

function ajouterannuaire() {

    var name = nameInput.value;
    var email = emailInput.value;
    var fonction = fonctionInput.value;

     //verification du nom
    if(name ===""){
        name.className = "error-input";
        errorName.innerHTML = "Veillez saisir le nom";
    }else if(name.length < 3){
        name.className = "error-input";
        errorName.innerHTML = "Le nom doit avoir au moins 3 caractères";
    }else{
        name.className = "";
        errorName.innerHTML = '';
    }

    if(fonction ===""){
        fonction.className = "error-input";
        errorFonction.innerHTML = "Veillez saisir le nom";
    }else if(fonction.length < 3){
        fonction.className = "error-input";
        errorFonction.innerHTML = "Le fonction doit avoir au moins 3 caractères";
    }else{
        fonction.className = "";
        errorFonction.innerHTML = '';
    }

    //verification de l'email
    if(email ===""){
        email.className = "error-input";
        errorEmail.innerHTML = "Veillez saisir l'email";
    }else{
        email.className = "";
        errorEmail.innerHTML = '';
    }

    if ((name.length >= 3) && (fonction.length >= 3 ) && (email.length !== 0 )) {
        const newEmployee = {
            id: Date.now(),
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            fonction: fonctionInput.value.trim()
        };

        employees.push(newEmployee);
        enregistreEmployer();
        afficherEmployees();
        
        

        fermerModalAjout();
        message.className = 'succes';
        message.innerText = "Le Contact a bien été ajouter";

            //temps d'apparution du toaster
        setTimeout(()=>{
            const items = toaster.getElementsByTagName('div');
            let index = 0;

            const removeitem = () =>{
                if(index < items.length){
                    toaster.removeChild(items[index]);
                    index++;
                    setTimeout(removeitem, 5000);
                }
            };
            removeitem();
        }, 5000);

        nameInput.value = '';
        emailInput.value = '';
        fonctionInput.value = '';

    }
}

function supprimer() {
    if (employeeToDeleteId !== null) {
        employees = employees.filter(emp => emp.id !== employeeToDeleteId);
        enregistreEmployer();
        afficherEmployees();
        fermerModalDelete();
    }
}





document.addEventListener('DOMContentLoaded', chargerEmployer);
