# Initialisation du projet

avec la commande `ng new awesome-components --style=scss --skip-tests=true --routing`
qui permet d'avoir des fichiers style SCSS, pas de test unitaires et des fichiers de routing.

## ajout de angular matérial

`ng add @angular matérial`

le terminal nous retourne plusieurs questions :
  - est-ce que l'on veut l'ajouter au projet : yes
  - le choix du thème: 'Deep Purple/Amber'
  - est-ce que l'on veut les style de typography de angular matérial: yes
  - est-ce que l'on veut les animation de angular matérial : yes

## création des modules et du premier component

`ng g m core`
`ng g m shared`
`ng g m social-media --routing`
`ng g c core/components/header`
