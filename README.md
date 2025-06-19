Cet annuaire des employés est une application web simple conçue pour gérer une liste d'employés. 
Elle permet d'ajouter de nouveaux employés avec leur nom, fonction et adresse e-mail, 
de les visualiser dans un tableau et de supprimer des entrées existantes.

Les données des employés sont persistantes grâce au localStorage du navigateur, 
ce qui signifie que la liste reste intacte même si l'utilisateur ferme ou rafraîchit la page.

Fonctionnalités
Ajout d'employés : Interface intuitive pour ajouter de nouveaux membres au répertoire.
Validation des entrées : Vérification du nom (min. 3 caractères), de la fonction (min. 3 caractères) et du format de l'e-mail.
Affichage dynamique : Les employés sont affichés dans un tableau HTML mis à jour en temps réel.
Suppression d'employés : Possibilité de retirer des employés de la liste.
Persistance des données : Utilisation de localStorage pour sauvegarder et charger les données, assurant que la liste est conservée entre les sessions.

HTML5 : Structure de base de la page web.
CSS3 : Stylisation de l'interface utilisateur.
JavaScript (ES6+) : Logique de l'application, gestion des données, interactions utilisateur et persistance via localStorage.

Comment Utiliser
Pour utiliser cet annuaire, suivez les étapes ci-dessous :

Cloner le dépôt ou télécharger les fichiers :
Si c'est un dépôt Git :

Bash

git clone <URL_DU_DEPOT>
cd annuaire-employes
Sinon, téléchargez simplement le dossier du projet.

Ouvrir le fichier index.html :
Naviguez jusqu'au répertoire du projet et ouvrez le fichier index.html dans votre navigateur web préféré (Google Chrome, Mozilla Firefox, etc.). Vous pouvez simplement double-cliquer dessus.

├── index.html          # Structure HTML de l'application
├── style.css           # Styles CSS pour l'interface
└── script.js           # Logique JavaScript principale
