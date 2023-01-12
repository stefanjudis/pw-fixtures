const { test, expect } = require("@playwright/test")
const { CHECKLY_USER, CHECKLY_PW } = process.env

test("Loads dashboard", async ({ page }) => {
  await page.goto("https://www.checklyhq.com/")
  await page.getByRole("link", { name: "Log in" }).click()
  await page.getByPlaceholder("yours@example.com").click()
  await page.getByPlaceholder("yours@example.com").fill(CHECKLY_USER)
  await page.getByPlaceholder("yours@example.com").press("Tab")
  await page.getByPlaceholder("your password").fill(CHECKLY_PW)
  await page.getByPlaceholder("your password").press("Enter")
  await page.waitForURL("https://app.checklyhq.com/")

  await expect(page.getByTestId("home-dashboard-table")).toBeVisible()
  await page.screenshot({ path: "web-app.jpg" })
})
