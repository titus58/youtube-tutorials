# Working with branches
```
# creates a new branch starting from the current commit
$ git branch branch-name
# creates a new branch starting from a specific commit id
$ git branch branch-name2 git_commit_it # ex : sdkajlsd3234
```

```
# lists all the branches
$ git branch
# switches to a different branch
$ git checkout branch-name
# deletes one branch
$ git branch -d branch-name
```

# Git merge worflow

```
$ git branch new-branch
$ git checkout new-branch
(... add commits)
$ git merge master # do this periodically, keep the branch up to date with master
(... once the branch is ready for production)
$ git checkout master
$ git merge new-branch
$ git branch -d new-branch
```

# Git rebase workflow

```
$ git branch new-branch
$ git checkout new-branch
(... add commits)
$ git rebase master # brings the branch up to date with master
( ... when it is ready for production)
$ git rebase master
# IMMEDIATELY
$ git checkout master
$ git rebase new-branch
```


