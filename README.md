# *NodeJS/React*

Attention, ceci n'est pas un checkpoint "de saison", ayant été donné à l'origine pour une promo d'hiver :smile:.

![yeah christmas](https://media.giphy.com/media/11EjiLDatd0syA/giphy.gif)

## Fais ta liste au Père Noël !

![type](https://media.giphy.com/media/RRerwvHrb0nxm/giphy.gif)

## Instructions

**Forker** le repo.

Une fois que tu as fini, il faut faire une **PR**.

Le dépôt contient les répertoires suivants :

* `front/` : Le projet en React (généré _via_ `create-react-app`)
* `back/` : Le projet Node.js / Express

**Dans VSCode**, tu peux ouvrir tous les dossiers via le menu _File > Open Workspace..._, et choisir le fichier `workspace.code-workspace` à la racine du dépôt.

## Étape 1 - le back

Pour la partie back tu auras trois routes principales sur le `/` :

* `GET /gifts` : Récupération des cadeaux
* `POST /gifts` : Création du cadeau
* `DELETE /gifts/:giftId` : Suppression du cadeau

Pour stocker les données, plusieurs alternatives s'offrent à toi :

* Une base MySQL avec le module `mysql` ou `mysql2`. **Merci d'inclure un "dump"** de ta BDD dans le repo (= le fichier `.sql` avec la définition des tables)
* Un fichier json qui tu iras éditer _via_ le module `fs`

## Étape 2 - le front

Pour le front tu devras :

* Afficher l'ensemble des cadeaux (le composant `Gift` t'est déjà fourni)
* Ajouter la possibilité d'ajouter un cadeau _via_ le formulaire présent
* Au clic sur la croix du cadeau, pouvoir le supprimer

## Étape 3 (BONUS) Sympa une belle liste, mais l'idée, c'est quand même que Santa la reçoive non ?

* En utilisant NodeMailer, envoie un mail à tes Santa préférés, voici leurs adresses : benoit.hubert[at]wildcodeschool.com, thomas.paoli[at]wildcodeschool.com

![joy](https://media.giphy.com/media/26n62j7cS0aZOYCu4/giphy.gif)
