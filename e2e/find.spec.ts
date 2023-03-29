import { test, expect } from "@playwright/test";

const find = "http://localhost:3000/find";

test.describe("Find page", () => {
  test("should be a div with class search-container", async ({ page }) => {
    await page.goto(find);
    const searchContainer = await page.$("div.search-container");
    expect(searchContainer).toBeTruthy();
  });

  test("should have a search bar", async ({ page }) => {
    await page.goto(find);
    const searchBar = await page.$("input");
    expect(searchBar).toBeTruthy();
  });

  test("should have a search button as span with class ant-input-group-addon", async ({
    page,
  }) => {
    await page.goto(find);
    const searchButton = await page.$("span.ant-input-group-addon");
    expect(searchButton).toBeTruthy();
  });

  test("the placeholder of the search bar should be Search for pets", async ({
    page,
  }) => {
    await page.goto(find);
    const searchButton = await page.$("input");
    expect(await searchButton.getAttribute("placeholder")).toBe(
      "Search for pets"
    );
  });
});
