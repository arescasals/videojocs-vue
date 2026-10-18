# PixelVault: catàleg de videojocs

## Temàtica i descripció

Aplicació web feta amb Vue que mostra un catàleg de videojocs amb el seu gènere, plataforma, any de llançament i una breu descripció.Els jocs es llegeixen de Cloud Firestore. Inclou cercador per títol, filtre per gènere i ordenació. L'aplicació està publicada amb Firebase Hosting.

## Tecnologies

- Vue 3 i Vite
- Vue Router
- Cloud Firestore (només lectura)
- Firebase Hosting

## Instal·lació i execució

1. Instal·la les dependències: `npm install`
2. Executa l'aplicació en local: `npm run dev`
3. Obre l'adreça que surt al terminal (normalment `http://localhost:5173/`).

## Generar la versió de producció i desplegar-la

1. Genera la versió de producció: `npm run build` (crea la carpeta `dist`).
2. Instal·la l'eina de Firebase si no la tens: `npm install -g firebase-tools`.
3. Inicia sessió: `firebase login`.
4. Desplega la web: `firebase deploy --only hosting`.

El fitxer `firebase.json` publica la carpeta `dist` i redirigeix totes les adreces a `index.html`, perquè les rutes de Vue Router funcionin en recarregar la pàgina o en entrar-hi directament.

## Components propis

- `NavBar.vue`: menú de navegació amb la marca PixelVault i els enllaços `RouterLink` a les tres rutes.
- `GameCard.vue`: fitxa d'un sol videojoc (portada amb icona segons el gènere, títol, gènere, plataforma, any i descripció).
- `GameList.vue`: llista de fitxes; mostra una `GameCard` per cada joc que rep.

## Exemple de comunicació amb props

- **Pare:** `VideojocsView.vue` llegeix la col·lecció `games` de Firestore, aplica la cerca, el filtre i l'ordenació, i passa la llista resultant a `GameList` amb la prop `games`.
- **Fill:** `GameList.vue` rep la prop `games` (un array de jocs) i passa cada joc a `GameCard` amb la prop `game`.
- **Dades que es passen:** els documents de Firestore (`title`, `genre`, `platform`, `year`, `description`).
- Les props estan declarades amb `defineProps` i els fills només les mostren, sense modificar-les.
- `HomeView.vue` fa el mateix amb els quatre jocs destacats de l'inici.

## Rutes

- `/` (Inici): portada, quatre targetes de característiques, quatre jocs destacats llegits de Firestore i una crida a l'acció.
- `/videojocs` (Videojocs): catàleg complet llegit de Firestore, amb cercador per títol, filtre per gènere i ordenació. Mostra un estat de càrrega, un missatge si no hi ha dades i un missatge si la lectura falla.
- `/sobre` (Sobre): descripció del projecte, tecnologies, com funciona i xifres.

## Cloud Firestore

- **Col·lecció:** `games` (12 documents)
- **Camps principals:** `title` (text), `genre` (text), `platform` (text), `year` (número) i `description` (text).
- **Vistes que en mostren les dades:** `/videojocs` (`VideojocsView.vue`) i els jocs destacats de l'inici (`HomeView.vue`).
- **Regles** (fitxer `firestore.rules`): lectura permesa a la col·lecció `games` i escriptura bloquejada.

## Web publicada

https://videojocs-ares.web.app