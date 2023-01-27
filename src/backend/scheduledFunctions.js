const cronJob = require("node-cron")

exports.initScheduledJobs = () => {
  // Executes every day at 11:59 pm
  const scheduledJobFunction = cronJob.schedule("59 23 * * *", () => {
    console.log("I'm executed on a schedule!")

    // Add your custom logic here
  })

  scheduledJobFunction.start()
}
