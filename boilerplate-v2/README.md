# Expensify App
## Deploy to Heroku
Since the `expensify-app` is in its own folder inside the root folder of this git repository, we need to run an specific command to deploy only that folder to the heroku app.

First, add the remote heroku git repository as:

```console
git remote add heroku-expensify-app <HEROKU-GIT_LINK>
```

Then, when you want to deploy to heroku (and also, when deploying for the first time), you have to run the following command:

```console
git subtree push --prefix expensify-app heroku-expensify-app master
```

Using `subtree` with the argumen `--prefix <FOLDER-NAME>`, git will pushe only changes inside the `<FOLDER-NAME>` folder (in our example, `expensify-app`).

If by any chance you get a `Updates were rejected because the tip of your current branch is behind. Merge the remote changes (e.g. 'git pull')` error, you should run:

```console
git push heroku-expensify-app `git subtree split --prefix expensify-app master`:master --force
```