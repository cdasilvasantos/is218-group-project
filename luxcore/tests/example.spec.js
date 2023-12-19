const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'Luxcore';
const expectedLogoText = 'LuxCore';
const expectedHeroTitle = 'Where culinary craftsmanship meets timeless elegance';
const expectedHeroSubText = 'Join our members club for an all exclusive experience.';
const expectedHeroLinkCount = 1;
const expectedAboutTitle = ' Luxcore Steakhouse';
const expectedMetaDescription = 'Luxury steakhouse at its core';
const expectedNavs = ['Menu', 'About', 'Club'];


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Logo in Header', async ({ page }) => {
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe(expectedLogoText);
});


test('Check Hero Section', async ({ page }) => {
  expect(await page.locator('.calltoaction h1').textContent()).toBe(expectedHeroTitle);
  expect(await page.locator('.calltoaction p').textContent()).toBe(expectedHeroSubText);
});

test('Check Links in Hero Section', async ({ page }) => {
  const linkCount = await page.locator('.calltoaction .btn').count();
  expect(linkCount).toBe(expectedHeroLinkCount);
});



test('Check About Section', async ({ page }) => {
  expect(await page.locator('.about-header').textContent()).toBe(expectedAboutTitle);
});



test('Check SEO Meta Description', async ({ page }) => {
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  expect(metaDescription).toBe(expectedMetaDescription);
});



test('Check All Navigation Links', async ({ page }) => {
  const navLinks = await page.locator('.menu-item');
  const count = await navLinks.count();

  for (let i = 0; i < count; i++) {
    const link = navLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});



test('Check All Footer Links', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link');
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});



