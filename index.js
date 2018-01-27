module.exports = (robot) => {
  let default_config = require('defaults.js')
  let user_config = await context.config('autotagger.yml')
  let config = Object.assign({}, default_config, user_config)
  // Your code here
  console.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  const body_events = [
    'issues',
    'pull_request'
  ]

  const comment_events = [
    'issue_comment'
  ]

  const labelAddition = /\+\[(.+)\]/
  const labelRemoval = /-\[(.+)\]/

  robot.on(body_events, async context => {
    // Search for removal -[labelname]
    // Replace with nothing in modified body variable
    // Add log
    // Search for addition +[labelname]
    // Replace with nothing
    // Replace body
    // Add log
  })

  robot.on(comment_events, async context => {
    if (config.ownerEditingOnly && (context.payload.issue.user.login != context.payload.comment.user.login)) {
      return
    }

    if (!config.comments) {
      return
    }

    if (userAllowed(context.payload.comment.user.login)) {
      let removeLabels = context.payload.comment.body.match(labelRemoval)
      context.github.issues.addLabels(context.issue({remove_labels}))

      let new_labels = context.payload.comment.body.match(labelAddition)
      removeLabels.forEach((label) => {
        context.github.issues.removeLabel(context.issue({label}))
      })


    }
    // Search for removal
    // replace
    // Add log
    // Search for addition
    // Replace with nothing
    // If comment is empty, delete
    // Otherwise, replace
  })

  function userAllowed(userName) {
    if (config.disallowedUsers.includes(userName)) {
      return false
    } else {
      return config.everyone || config.allowedUsers.includes(userName)
    }
  }

  function labelAllowed(label) {
    if (config.disallowedLabels.includes(label)) {
      return false
    } else if (!config.allowNewLabels && !labelExists(label)) {
      return false
    } else {
      return config.allowAllLabels || config,allowedLabels.includes(label)
    }
  }

  function labelExists(label) {
    context.github.issues.getLabel(context.issue({label})).then((res, err) => {
      if (err) {
        return false
      } else {
        return true
      }
    })
  }
}
