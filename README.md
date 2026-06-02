# Safora Contact Us Form Automation - Playwright

## Project Overview

This repository contains a Playwright automation test for the Safora website Contact Us form.

The test verifies the form validation behavior when the **Name** field is left blank. The script fills the Email Address, Phone Number, and Message fields, allows manual reCAPTCHA completion, clicks the Send Message button, and verifies that a validation error is displayed for the blank Name field.

## Website Under Test

https://safora.se/en/

## Automation Framework

| Item        | Details                                 |
| ----------- | --------------------------------------- |
| Framework   | Playwright                              |
| Language    | JavaScript                              |
| Test Runner | Playwright Test                         |
| Browser     | Chromium                                |
| Test Type   | UI Automation / Form Validation Testing |

## Test Scenario

**Scenario:** Verify Contact Us form validation when the Name field is left blank.

## Test Flow

The automation script performs the following steps:

1. Opens the Safora homepage.
2. Navigates to the Contact Us page.
3. Verifies that the Contact Us page loads successfully.
4. Scrolls to the Contact Us form.
5. Leaves the Name field blank intentionally.
6. Fills the Email Address field.
7. Fills the Phone Number field.
8. Fills the Message field.
9. Scrolls to the reCAPTCHA section.
10. Allows the tester to manually complete reCAPTCHA.
11. Clicks the Send Message button.
12. Verifies that a validation error is displayed for the blank Name field.

## Test Data

| Field         | Test Data                                                                            |
| ------------- | ------------------------------------------------------------------------------------ |
| Name          | Blank / Empty                                                                        |
| Email Address | john.tester@example.com
| Phone Number  | +94 77 123 4567                                                                      |
| Message       | Hello, I am interested in learning more about the Safora safety management platform. |

## Prerequisites

Before running the automation test, make sure the following are available:

| Requirement         | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| Node.js             | Required to run the JavaScript-based Playwright project.                |
| npm                 | Required to install project dependencies. npm is included with Node.js. |
| Git                 | Required to clone the GitHub repository.                                |
| Playwright          | Automation framework used for the UI test.                              |
| Playwright Browsers | Browser binaries required by Playwright, such as Chromium.              |
| Internet Connection | Required to access the live Safora website.                             |
| Code Editor         | Visual Studio Code or any preferred editor to view/edit the test files. |

## Installation Instructions

Clone the repository:

```bash
git clone <your-github-repository-link>
```

Navigate to the project folder:

```bash
cd irusri-qa-intern-assignment
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## How to Run the Test

Run the Contact Us form automation test in headed mode:

```bash
npx playwright test tests/safora-contact-form-validation.spec.js --headed
```

During the test execution, the browser will scroll to the reCAPTCHA section. The tester should manually click the **I am not a robot** checkbox when prompted. After the manual reCAPTCHA step, the test continues automatically.

## View Test Report

After the test execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

## Expected Result

The form should not be submitted because the Name field is blank. A validation error should be displayed for the Name field.

## Actual Result

The automation test passed successfully. The script opened the Safora website, navigated to the Contact Us page, filled the Email Address, Phone Number, and Message fields, left the Name field blank intentionally, allowed manual reCAPTCHA verification, clicked the Send Message button, and verified that the validation error was displayed for the blank Name field.

## Reason for Manual reCAPTCHA Assistance

The Safora Contact Us form includes Google reCAPTCHA verification. reCAPTCHA is a security feature designed to prevent automated bot submissions, so it should not be bypassed or automated in a Playwright test running against the live production website.

Because this test is executed on the public Safora website, the automation was implemented as a manual-assisted Playwright test. Playwright automated the page navigation, form field entry, submit action, and validation assertion. The only manual step was completing the reCAPTCHA checkbox.

In a real QA environment, this type of test would usually be executed in a staging or test environment where reCAPTCHA is disabled, mocked, or configured with test keys.



