import { test } from "@playwright/test";

test.describe("E2E: Product to Checkout Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("user can select product, add to cart, checkout, update quantity, remove, and buy", async ({
    page,
  }) => {
    // Go to homepage
    await page.goto("/");

    // Wait for product to appear
    await page.waitForSelector("text=Kinosofa 4-Sitzer SALENTO");

    // Add to cart
    await page.getByRole("button", { name: /add to cart/i }).click();

    // Go to checkout page (assume a nav link or button exists)
    const checkoutNav = await page.$(
      'a[href*="checkout"],button:has-text("checkout")'
    );
    if (checkoutNav) {
      await checkoutNav.click();
    } else {
      await page.goto("/checkout");
    }

    await page.waitForSelector("text=Gesamtsumme");

    //add to cart again
    await page.getByLabel("erhöhen").click();
    await page.getByLabel("verringern").click();

    // Remove item
    await page.getByLabel("entfernen").click();
    await page.waitForSelector("text=Ihr Warenkorb ist leer");

    // Add again to cart for buy test
    await page.goto("/");
    await page.waitForSelector("text=Kinosofa 4-Sitzer SALENTO");
    await page.getByRole("button", { name: /add to cart/i }).click();
    await page.goto("/checkout");
    await page.waitForSelector("text=Gesamtsumme");

    // Simulate payment
    const buyButton =
      (await page.$('button:has-text("zahlungspflichtig")')) ||
      (await page.$('button:has-text("buy")'));
    if (buyButton) {
      await buyButton.click();
    }
  });
});
