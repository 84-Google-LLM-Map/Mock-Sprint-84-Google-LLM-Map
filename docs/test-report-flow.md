# Task 6 — Login to Team Page Test Report

**Tester:** Cameron Nguyen
**Role:** Developer 2
**Date:** Monday, 17 August 2026

## Test Results

| Test                                  | Expected Result                                                      | Actual Result                        | Status      |
| ------------------------------------- | -------------------------------------------------------------------- | ------------------------------------ | ----------- |
| Open the login page                   | Login page loads correctly                                           | Login page loaded correctly          | Pass        |
| Google login in other tested browsers | User successfully logs in                                            | Google login worked                  | Pass        |
| Redirect after login                  | User is redirected to the Team Page                                  | User was redirected to the Team Page | Pass        |
| Team Page display                     | Member cards display names, roles, blurbs and images or placeholders | Team Page displayed correctly        | Pass        |
| Google login in Brave                 | User successfully logs in                                            | Google login did not work in Brave   | Issue found |

## Summary

The Google login and Team Page redirect worked correctly in the other tested browsers. The Team Page displayed the member information and image placeholders correctly. Google login did not work in Brave, so this browser compatibility issue requires further investigation.

## Evidence

A screenshot was captured showing the Team Page after a successful Google login.
