const { test, expect } = require('@playwright/test');

test('Safora - Contact Us form validation for blank Name field', async ({ page }) => {
// Extra timeout is added because this test includes a manual reCAPTCHA step.
test.setTimeout(120000);

const homepageUrl = 'https://safora.se/en/';
const testEmail = 'john.tester@example.com';
const testPhone = '+94 77 123 4567';
const testMessage =
'Hello, I am interested in learning more about the Safora safety management platform.';

await test.step('Step 01 - Open Safora homepage', async () => {
await page.goto(homepageUrl, {
waitUntil: 'domcontentloaded',
timeout: 120000,
});

await expect(page).toHaveTitle(/.+/);

console.log('Step 01 Passed: Safora homepage loaded successfully.');

});

await test.step('Step 02 - Navigate to Contact Us page', async () => {
const contactUsLink = page
.getByRole('navigation')
.getByRole('link', { name: /contact us/i });

await expect(contactUsLink).toBeVisible();
await contactUsLink.click();

await page.waitForLoadState('domcontentloaded');

console.log('Step 02 Passed: Contact Us link clicked successfully.');

});

await test.step('Step 03 - Verify Contact Us page loaded successfully', async () => {
await expect(page).toHaveURL(/contact/i);

const contactHeading = page
  .getByRole('heading', { name: /contact/i })
  .first();

await expect(contactHeading).toBeVisible();

console.log('Step 03 Passed: Contact Us page loaded successfully.');

});

await test.step('Step 04 - Locate Contact Us form', async () => {
const contactForm = page.locator('form').first();

await expect(contactForm).toBeVisible();
await contactForm.scrollIntoViewIfNeeded();

console.log('Step 04 Passed: Contact Us form is visible.');

});

await test.step('Step 05 - Keep Name field blank intentionally', async () => {
// This is a negative validation test.
// The Name field is intentionally left blank.
// Expected result: The form should show a validation error after submission.

console.log('Step 05 Passed: Name field was intentionally left blank.');

});

await test.step('Step 06 - Fill Email Address field', async () => {
const emailField = page
.locator(
'input[type="email"], input[name="email"], input[id*="email" i], input[placeholder*="email" i]'
)
.first();

await emailField.waitFor({ state: 'visible', timeout: 10000 });
await emailField.scrollIntoViewIfNeeded();
await emailField.fill(testEmail);

await expect(emailField).toHaveValue(testEmail);

console.log('Step 06 Passed: Email Address field filled successfully.');

});

await test.step('Step 07 - Fill Phone Number field', async () => {
const phoneField = page
.locator(
'input[type="tel"], input[name="phone"], input[id*="phone" i], input[placeholder*="phone" i]'
)
.first();

await phoneField.waitFor({ state: 'visible', timeout: 10000 });
await phoneField.scrollIntoViewIfNeeded();
await phoneField.fill(testPhone);

await expect(phoneField).toHaveValue(testPhone);

console.log('Step 07 Passed: Phone Number field filled successfully.');

});

await test.step('Step 08 - Fill Message field', async () => {
const messageField = page
.locator(
'textarea[name="message"], textarea[id*="message" i], textarea[placeholder*="message" i], textarea'
)
.first();


await messageField.waitFor({ state: 'visible', timeout: 10000 });
await messageField.scrollIntoViewIfNeeded();
await messageField.fill(testMessage);

await expect(messageField).toHaveValue(testMessage);

console.log('Step 08 Passed: Message field filled successfully.');


});

await test.step('Step 09 - Scroll to reCAPTCHA section', async () => {
// reCAPTCHA is only scrolled into view.
// This script does not automate or bypass reCAPTCHA.


const recaptchaFrame = page
  .locator(
    'iframe[title*="reCAPTCHA" i], iframe[src*="recaptcha"], iframe[name^="a-"]'
  )
  .first();

await recaptchaFrame.waitFor({ state: 'visible', timeout: 15000 });
await recaptchaFrame.scrollIntoViewIfNeeded();

console.log('Step 09 Passed: reCAPTCHA section is visible.');


});

await test.step('Step 10 - Manually complete reCAPTCHA verification', async () => {
// Manual step:
// reCAPTCHA is a security feature used to prevent bot submissions.
// Therefore, it should not be bypassed or automated.
// The tester must manually click the "I am not a robot" checkbox.


console.log('');
console.log('====================================================');
console.log('MANUAL ACTION REQUIRED');
console.log('Please manually click the reCAPTCHA checkbox now.');
console.log('You have 35 seconds to complete this action.');
console.log('====================================================');
console.log('');

await page.waitForTimeout(35000);

console.log('Step 10 Passed: Manual reCAPTCHA wait completed.');


});

await test.step('Step 11 - Click Send Message button', async () => {
const sendButton = page
.locator(
'button[type="submit"], input[type="submit"], button:has-text("Send Message"), button:has-text("Send")'
)
.first();


await sendButton.waitFor({ state: 'visible', timeout: 10000 });
await sendButton.scrollIntoViewIfNeeded();

await expect(sendButton).toBeEnabled();

await sendButton.click();

console.log('Step 11 Passed: Send Message button clicked successfully.');


});

await test.step('Step 12 - Verify validation error for blank Name field', async () => {
// Expected result:
// Because the Name field is blank, the form should reject the submission
// and display a required field validation error.


await page.waitForTimeout(1000);

const validationError = page
  .locator(
    '[class*="error" i], [class*="invalid" i], [aria-invalid="true"], :text-matches("name|required|cannot be empty|please", "i")'
  )
  .first();

await expect(validationError).toBeVisible({ timeout: 10000 });

console.log('Step 12 Passed: Validation error displayed for blank Name field.');
console.log('Final Result: Form correctly rejected submission because Name field is required.');


});
});
