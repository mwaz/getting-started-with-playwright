import { test, chromium } from "@playwright/test";

test("Search for a term and take a screenshot of the results page", async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the search engine
  await page.goto("https://www.bing.com");

  // Find the search input and type a query
  // await page.getByLabel("Enter your search term").click();
  await page.locator('[type="search"]').fill("Playwright");
  await page.locator('[type="search"]').press("Enter");

  // Click the search button
  // await page.getByLabel("Search the web").click();

  // Wait for the results page to load and display the results
  await page.waitForSelector("#b_results", { timeout: 60000 });

  // Take a screenshot of the results page
  await page.screenshot({ path: "search-results.png" });

  // Close the browser
  await browser.close();
});
