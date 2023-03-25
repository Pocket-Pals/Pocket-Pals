import { test, expect } from "@playwright/test";

const tutorialPage = "http://localhost:3000/tutorial";

test.describe("Tutorial page", () => {
  test("should have a main image", async ({ page }) => {
    await page.goto(tutorialPage);
    const image = await page.$("img");
    expect(image).toBeTruthy();
  });

  test("should have description in p", async ({ page }) => {
    await page.goto(tutorialPage);
    const description = await page.$("p");
    expect(description).toBeTruthy();
  });

  test("should have back, next, and skip buttons", async ({ page }) => {
    await page.goto(tutorialPage);
    const buttons = await page.$$("button");
    expect(buttons.length).toBe(3);
  });
});
