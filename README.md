# Programmation avancée (BUT3 R5A05)

Le cours de programmation avancée présente la stratégie de développement d'applications Web prêtes pour la production. Il s'agit d'une introduction aux concepts développés lors du [projet proposé](https://github.com/Wallerand/R5A05-projet-xyz) en TD et TP.

Ce cours est conçu pour être dispensé en 6 heures auprès d'étudiants en 3ème année de BUT informatique à l'Institut universitaire de technologie (IUT).

[Cliquez ici](https://wallerand.github.io/R5A05-CM) pour afficher le support de présentation.

### Table des matières

1. [Propos introductif](https://wallerand.github.io/R5A05-CM/index.html#/6)
2. [Gestion des dépendances](https://wallerand.github.io/R5A05-CM/index.html#/12)
3. [Cycle de vie des requêtes](https://wallerand.github.io/R5A05-CM/index.html#/18)
4. [Authentification et autorisation](https://wallerand.github.io/R5A05-CM/index.html#/24)
5. [Qualité et conformité](https://wallerand.github.io/R5A05-CM/index.html#/25)

- [Bibliographie](https://wallerand.github.io/R5A05-CM/index.html#/26)

## Mise à jour du support

Le support de présentation a été réalisé en s'appuyant sur les projets suivants :
- [RevealJS](https://revealjs.com/)
- [Astro](https://astro.build/)

### Commandes

Toutes les commandes sont exécutées depuis la racine du projet, à partir d'un terminal :

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Docker

Pour utiliser Astro avec Docker, la commande suivante peut être utilisée :

```bash
$ docker run -it --rm --name astro -v "$PWD":/usr/src/app -w /usr/src/app -p 4321:4321 node npm run dev
```