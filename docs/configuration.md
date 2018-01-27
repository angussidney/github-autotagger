# Configuration

In order to activate this app, a `autotagger.yml` configuration file must be added to the `.github/` directory.

To use the default settings below, leave the file blank, or use this template as a guide to configure as necessary.

```yml
# Github-Autotagger configuration
# -------------------------------

# Allow labels to be applied in the issue body
issues: true
# Allow labels to be applied in the pull request body
pullRequests: true
# Allow labels to be applied through comments
comments: false


# True: Allow everyone to add labels, False: Only allow specified users to add labels
everyone: true
# Explicit whitelist of users who can add labels (not necessary if everyone = true)
allowedUsers: []
# Explicit blacklist of users who can't add labels (not necessary if everyone = false)
disallowedUsers: []
# Only allow the issue/PR creator to edit the labels via comments (not needed if comments = false)
ownerEditingOnly: true


# Allow new labels to be created automatically
allowNewLabels: false
# True: Allow all labels to be added, False: Only allow specified labels to be added
allowAllLabels: true
# Exlicit whitelist of allowed labels which can be added (not necessary if allowAllLabels = true)
allowedLabels: []
# Explicit blacklist of labels which can't be added automatically (not necessary if allowAllLabels = false)
disallowedLabels: []


# Create a changelog of automatic label additions/removals in a HTML comment inside the issue/PR body
changeLog: true
# Create a changelog of automatic label additions/removals in a comment
commentLog: false
```
