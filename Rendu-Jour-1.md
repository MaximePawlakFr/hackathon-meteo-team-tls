# Nom de l’équipe/du projet
TEAM TLS


# Défi choisi
ACCÈS ET COMPREHENSION DES DONNEES


# Objectif du projet et problématique résolue
Faciliter l’accés à la données via une interface web. 

La problématique résolue est la complexité et la disparité dans la récupération et le pré-traitement des données météo , spécifiques selon chaque donnée et chaque modèle.


# Approche adoptée
Dans une application web, l’utilisateur rentre les infos : période, couverture géographique et données recherchées

Pour chaque donnée, un descriptif sera disponible.

En retour l’application web montre un rendu 3D des données sélectionnées et propose le téléchargement du fichier généré aux formats interopérables JSON et CSV.

L’application propose ainsi la donnée juste nécessaire pour une utilisation ultérieure et ainsi minimiser la quantité de donnée à manipuler, tout en simplifiant le processus de récupération de données


Technologies : gdal, pandas, duckdb, react, cesium.js
  

# Usagers pressentis et bénéfices
Les acteurs non-spécialistes de la météo et des formats associés, recherchant rapidement et facilement de la donnée sur une zone pendant une période donnée :
* Souscripteurs et Courtiers en Assurance Paramétrique
* Métiers de l'aéronautique ( facilitation pilotage automatique des ballon / drones, Optimisation du temps vol/durée batteries )
* Service public (pompiers...) dans la prévision et la planification des risques (crues, canicules, feux de forêt, ...)
* Grand public ( curieux voulant visualiser en 3D les données météorologiques ),
* Scientifiques ne souhaitant pas télécharger l’ensemble complet des données d’un modèle mais uniquement un ensemble de sous-paramètres.

Tous ces usagers ont rarement besoin de tous les paramètres sur les périodes complètes disponibles. Par exemple, les agents du service public vont s'intéresser aux températures maximale sur une semaine sur une zone donnée. 

Par exemple en prenant les données des stations Météo France, si la zone étudiée est comprise sur deux départements et sur deux années différentes, il devrait télécharger : 
- QUOT_departement_78_periode_1950-2022_RR-T-Vent.csv.gz
- QUOT_departement_78_periode_2023-2024_RR-T-Vent.csv.gz
- QUOT_departement_75_periode_1950-2022_RR-T-Vent.csv.gz
- QUOT_departement_75_periode_2023-2024_RR-T-Vent.csv.gz

En plus de télécharger des données inutiles (les paramètres non-utilisés comme le vent, et les stations hors de la zone), cela ajoute des étapes de préparation fastidieuses.


# Membres de l’équipe et leurs compétences
- Sébastien Bourgeois - Data engineer
- Maxime  Pawlak - Développeur
- Thomas Sigward - Project management / Développeur front-end
