import { test, chromium } from "@playwright/test";

test("Search for a term on Google and take a screenshot of the results page", async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Google
  await page.goto("https://www.google.com");

  await page.getByRole("link", { name: "English" }).click();
  // Find the search input and type a query
  await page.getByLabel("Search", { exact: true }).fill("Playwright");

  // Verifying cursor is within the  search input
  await page.getByLabel("Search", { exact: true }).click();

  // Press Enter to search
  await page.keyboard.press("Enter");

  // Wait for the results page to load and display the results
  await page.waitForSelector("#search");

  // Take a screenshot of the results page
  await page.screenshot({ path: "google-search-results.png" });

  // Close the browser
  await browser.close();
});
