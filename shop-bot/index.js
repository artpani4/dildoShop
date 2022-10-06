const validSecret = require("./utils/devops")
const token = process.env["TOKEN"] || null
validSecret(token)


