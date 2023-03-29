import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000";

test.describe("Home page", () => {
  test("should have an image", async ({ page }) => {
    await page.goto(homePage);
    const image = await page.$("img");
    expect(image).toBeTruthy();
  });

  test("should have a title", async ({ page }) => {
    await page.goto(homePage);
    const title = await page.$("p");
    expect(title).toBeTruthy();
  });

  test("should have 2 buttons", async ({ page }) => {
    await page.goto(homePage);
    const buttons = await page.$$("button");
    expect(buttons.length).toBe(2);
  });
});
