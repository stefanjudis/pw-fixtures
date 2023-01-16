/**
 * To learn more about Playwright Test visit:
 * https://www.checklyhq.com/docs/browser-checks/playwright-test/
 * https://playwright.dev/docs/writing-tests
 */

const { expect, test } = require("@playwright/test")
const { login } = require("./login")
// You can use test.describe to declare a group of related test cases
test.describe("Playwright home page", () => {
  // The callback in test.beforeEach will be executed before each test.
  test.beforeEach(async ({ page }) => {
    // Each test will be given a new page instance navigated to the this URL
    // For deployments Checkly will inject the deployment url as ENVIRONMENT_URL
    await login(page)
  })
  // Other useful hooks: test.beforeAll, test.afterEach, test.afterAll

  test("has a page title containing Playwright", async ({ page }) => {
    // Expect a title "to contain" a substring.
    page.screenshot({ path: "login.png" })
    await expect(page).toHaveTitle(/Playwright/)
  })
})
