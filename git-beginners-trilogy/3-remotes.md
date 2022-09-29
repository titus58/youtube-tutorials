# Initialize the repository
```
# pull repository from the internet to localhost
$ git clone repository_url [directory_name]
# add a remote to our repository named "origin"
$ git remote add origin repository_url
# list the remotes of our repository
$ git remote
```

# Pushing and pulling commits from remotes
```
(... add commits)
# push changes from local repository to origin
$ git push
# it fetches all the changes from origin, the branch names will be remote/origin/main
$ git fetch
# fetches the changes for a single branch
$ git fetch origin main
# transfer changes from remote branches to local
$ git checkout main
$ git merge remote/origin/main

# combines fetch and merge
$ git pull
```

```
# if git push fails, then to a pull and then a push
$ git pull
$ git push
```

# Transfer feature branch to main
```
$ git checkout main
$ git merge feature-branch
$ git push
```
