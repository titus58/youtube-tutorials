# What is Git:
- distributed version control system
- Git only works with text based files
    - computer programs: Java, Python
    - markup languages: HTML, LaTeX, CSS etc
    - text file
- Distributed
    - You can collaborate with other developers
    - If you work by yourself you should still have your repositories uploaded on the internet (Github/Gitbucket)
        - If you're working on a private project, you can create a private repository in Github and use as a backup (in case of data loss for example)
        - Or you can have public repository
            - Build a portfolio
            - Start an open-source project

# Commands

### git init
Initialize a repository
```
$ git init .
```

The `.git` sub-directory contains all the information relevant to the current repository. If you delete it will just like your repository was never initialized (all the history will be lost).

### git status

Print the status of your repository. Lists the current branch, untracked files and files that were changed.
```
$ git status
```

# Workflow
**1. Navigate to a directory, empty or it can already have files**

**2. Initialize the repository**
```
$ git init .
```

**3. Search for a generic .gitignore file specific to our platform. Also add binary file extensions and configuration files with secrets to .gitignore.**

**4. Add new files to repository**
```
$ git add file1
$ git add file*
$ git add dir
$ git add .
$ git status # prints the files that were modified locally and the staged files
```
**5. (conditional) If it's the first time you create a commit on your computer, then you need to configure your  user name and email**

```
# configure only in the current repository
$ git config user.name "Firstname Lastname"
$ git config user.email "john@doe.com"
# configure globally for all repositories on your computer
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email "john@doe.com"
```

**6. (optional) Configure the git editor to VSCode**
```
$ git config --global core.editor "code -n -w"
```
You need to have the `code` command installed in your terminal. Follow the instructions from VSCode website

https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line


**7. Create a new commit (version) for the staged files**


```
$ git commit -m "commit message"
$ git commit
```

**6. Make changes to files already tracked**
```
$ git diff file1 # prints local changes of file1
$ git add file1 # stages the file for commit
$ git diff --staged file1 # prints changes of staged file
$ git restore --staged file1 # un-stages file
$ git restore file1 # discards local changes
$ git commit # creates a new commit
```

**7. Commands for interacting with the git history**
```
$ git log # the entire history of the project
$ git log -- file1
$ git log -- dir
$ git show cf2gs # shows a commit with the given commit id
$ git show cf2gs:file1 # prints the file at a specific commit version
$ git annotate file1 # shows which commit modified each line in one file
```

**8. File deletions and renames (moves)**
```
$ git rm file1 # removes file1 from the repository and local directory
$ git mv file1 file2 # moves (renames) file1 to file2, history is lost in the process
```

**9.  Restoring the entire project to a previous version**
```
$ git revert cf1rgr34 # restore a single commit
$ git revert cf1rgr34^..HEAD # reverts the entire project to the state it had at cf1rgr34
```

**10. Stash away work in progress changes without creating a commit**
```
$ git stash # saves all the modified and staged files into a stash
$ git stash list # prints all the stashes
$ git stash show -p # shows the differences included in the stash from the top
$ git stash show -p stash@{1}
$ git stash apply # applies the stash at the top of the stack
$ git stash drop # removes the stash fromt the top of the stack without applying
$ git stash clear # removes all the stashes
```
