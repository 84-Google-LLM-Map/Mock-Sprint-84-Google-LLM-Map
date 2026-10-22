# Task 8 — Edge-Case Test Script

**Tester:** Cameron Nguyen
**Role:** Developer 2
**Date:** Monday, 17 August 2026
**Website:** https://mock-sprint-84-google-llm-map-frontend-5wzx0psyo.vercel.app

## Test 1 — Incorrect Login Details

**Steps:**

1. Open the Login page.
2. Enter an incorrect email and password.
3. Click Sign in.

**Expected result:** An error message appears and the user remains on the Login page.

**Actual result:** The message “Invalid email or password” appeared and the user remained on the Login page.

**Status:** Pass

## Test 2 — Google Sign-In Failure or Cancellation

**Steps:**

1. Click Continue with Google.
2. Close or cancel the Google login window.
3. Observe how the website responds.
4. Repeat the test in different browsers.

**Expected result:** The website remains on the Login page and does not crash.

**Actual result:** The website remained on the Login page, displayed an error and did not crash. Google login did not work correctly in Brave and Edge.

**Status:** Pass with browser compatibility issue

## Test 3 — Direct Team Page Access While Logged Out

**Steps:**

1. Log out of the website.
2. Enter the `/team` address directly.
3. Observe the redirect.

**Expected result:** The logged-out user is redirected to the Login page.

**Actual result:** The user was redirected to the Login page.

**Status:** Pass

## Test 4 — Long-Blurb Layout

**Steps:**

1. Log in and open the Team Page.
2. Temporarily replace one member’s blurb with a long paragraph using the browser’s Developer Tools.
3. Check the member card and page layout.

**Expected result:** The long text remains inside the card without overlapping or breaking the layout.

**Actual result:** The text wrapped inside the card correctly. Nothing overlapped, overflowed or broke the Team Page layout.

**Status:** Pass

## Bug Logged — Browser-Specific Google Login Failure

**Bug ID:** BUG-01
**Description:** Google login did not work correctly in Brave and Edge.
**Expected result:** Google login succeeds and redirects the user to the Team Page.
**Actual result:** Google login failed or displayed an error in Brave and Edge.
**Priority:** Medium
**Next action:** Investigate the Firebase Google authentication and browser compatibility settings.

## Overall Result

The incorrect-login, cancelled-login, logged-out Team Page access and long-blurb tests passed. The Google login issue in Brave and Edge requires further investigation.
