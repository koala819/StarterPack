# Installation et Configuration de Next.js

Ce guide vous accompagne dans l'installation et la configuration d'un environnement Next.js sur un PC vierge.

## 📌 Pré-requis

Avant de commencer, assurez-vous d'installer les éléments suivants :

- [Visual Studio Code (VSC)](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/fr) (Vérification : `node -v` en ligne de commande)
- [Git (si Windows)](https://git-scm.com/downloads/win) (Vérification : `git -v` en ligne de commande)

👉 **Pendant l'installation, utilisez les options par défaut** si vous débutez.

## 🚀 Configuration de Git et GitHub

### 1. Créer un compte GitHub
Si ce n'est pas encore fait, inscrivez-vous sur [GitHub](https://github.com/).

### 2. Configurer Git

Ouvrez un terminal (Git Bash ou PowerShell) et entrez ces commandes :

```sh
git config --global user.name "TonNom"
git config --global user.email "TonEmail@exemple.com"
```

Vérifiez la configuration avec :

```sh
git config --global --list
```

Vous devriez voir :

```sh
user.name=TonNom
user.email=TonEmail@exemple.com
```

### 3. Générer une clé SSH

Exécutez la commande suivante :

```sh
ssh-keygen -t ed25519 -C "TonEmail@exemple.com"
```

Appuyez sur **Entrée** pour enregistrer la clé dans le dossier par défaut (`~/.ssh/id_ed25519`). Vous pouvez ajouter une passphrase (optionnel).

Affichez la clé publique avec :

```sh
cat ~/.ssh/id_ed25519.pub
```

Copiez la clé générée (elle commence par `ssh-ed25519`).

### 4. Ajouter la clé SSH à GitHub

1. Connectez-vous sur [GitHub](https://github.com/).
2. Allez dans **Settings** → **SSH and GPG keys** → **New SSH Key**.
3. Collez votre clé publique et donnez-lui un nom (ex. "Mon PC").

### 5. Tester la connexion SSH avec GitHub

```sh
ssh -T git@github.com
```

Si tout est bien configuré, vous verrez un message du type :

```sh
Hi <ton-nom-utilisateur>! You've successfully authenticated...
```

## 📥 Cloner le projet Starter Pack depuis GitHub

Pour récupérer un projet existant depuis GitHub :

1. Copiez l'URL HTTPS du dépôt GitHub :
   - Sur la page du dépôt, cliquez sur **Code** → **HTTPS**.
2. Ouvrez **Visual Studio Code**.
3. Appuyez sur `Ctrl + Maj + P`, puis tapez **git clone**.
4. Collez l'URL du dépôt :

```sh
git clone https://github.com/koala819/StarterPack.git
```

Cela téléchargera le projet dans un dossier local. 🎉 Vous avez maintenant le projet **Starter Pack** entre vos mains ! 🚀


## ❌ Supprimer la connexion au dépôt original 

### 6. Supprimer le lien avec le dépôt distant d'origine

Lorsque tu clones un dépôt, il reste lié au dépôt original comme "remote". Tu dois supprimer ce lien avant de publier ton propre dépôt.

1. Va dans le répertoire cloné :

    ```bash
    cd exemple
    ```

2. Vérifie les "remotes" configurés :

    ```bash
    git remote -v
    ```

    Tu devrais voir quelque chose comme ceci :

    ```
    origin  https://github.com/utilisateur/exemple.git (fetch)
    origin  https://github.com/utilisateur/exemple.git (push)
    ```

3. Supprime le lien avec le dépôt distant :

    ```bash
    git remote remove origin
    ```

4. Vérifie que le lien a bien été supprimé :

    ```bash
    git remote -v
    ```

    Cela ne devrait rien afficher.


### 7. Créer un nouveau dépôt sur GitHub

1. Connecte-toi à ton compte GitHub.
2. Clique sur le bouton **New Repository** ou va sur [Créer un nouveau dépôt](https://github.com/new).
3. Remplis les informations pour créer un dépôt (nom, description, etc.) et clique sur **Create repository**.
4. Ne coche pas les cases pour initialiser le dépôt avec un README, un .gitignore, ou une licence.


### 8. Lier ton dépôt local à ton propre dépôt GitHub

1. Récupère l'URL de ton nouveau dépôt GitHub (elle sera affichée après sa création).
2. Lien ton dépôt local à ce nouveau dépôt :

    ```bash
    git remote add origin <URL_DE_TON_DEPOT>
    ```

    Exemple :

    ```bash
    git remote add origin https://github.com/ton-utilisateur/ton-depot.git
    ```

3. Vérifie que le dépôt distant est bien configuré :

    ```bash
    git remote -v
    ```

    Tu devrais voir :

    ```
    origin  https://github.com/ton-utilisateur/ton-depot.git (fetch)
    origin  https://github.com/ton-utilisateur/ton-depot.git (push)
    ```


### 9. Publier le dépôt sur GitHub

1. Ajoute tous les fichiers (si ce n’est pas encore fait) :

    ```bash
    git add .
    ```

2. Fais un commit :

    ```bash
    git commit -m "Initial commit"
    ```

3. Pousse les fichiers vers ton dépôt GitHub :

    ```bash
    git push -u origin main
    ```

    Remarque : Si ta branche principale s’appelle `master` au lieu de `main`, remplace `main` par `master`.



### 10. Vérification

Va sur ton dépôt GitHub pour vérifier que tous les fichiers sont bien publiés. Si tout est bon, ton dépôt est maintenant hébergé sur ton propre compte GitHub.


## Option : Modifier le contenu du projet avant publication

Si tu souhaites apporter des modifications au code, tu peux les faire dans le répertoire local avant d'exécuter les commandes `git add` et `git push`.


## Attention

Si tu récupères un projet open-source, vérifie bien les termes de la licence (s’il y en a une). Certaines licences imposent des règles spécifiques pour réutiliser ou republier le code. Si le dépôt n’a pas de licence, demande l’autorisation de l’auteur avant de republier. 😊
