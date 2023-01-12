// @ts-check
const { test } = require("./my-setup.js")

test("Loads dashboard", async ({ webApp }) => {
  await webApp.screenshot({ path: "web-app.jpg" })
})
