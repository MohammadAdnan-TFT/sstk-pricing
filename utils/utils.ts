import { Page, expect } from '@playwright/test';
import { locators } from './selectors/locators';

export async function hoverAndVerifyTooltip(page: Page, hoverSelector: string, tooltipSelector: string, expectedText: string) {
  await page.locator(hoverSelector).hover();
  await page.waitForSelector(locators.toolTipMain);
  await page.waitForSelector(tooltipSelector, { state: 'visible' });

  const hoverBox = await page.$(tooltipSelector);

  expect(hoverBox).not.toBeNull();

  if(hoverBox){
    const hoverText = await hoverBox.textContent();
    expect(hoverText).toContain(expectedText);
  }

}

export async function clickAndVerifyDialog(page: Page, linkSelector: string, dialogSelector: string, expectedText: string) {
  const linkElement = await page.$(linkSelector);
  expect(linkElement).not.toBeNull();

  if(linkElement){
    await page.locator(linkSelector).first().click();
  }
  

  await page.waitForSelector(dialogSelector);
  const dialogboxVerifText = await page.$(dialogSelector); 
  expect(dialogboxVerifText).not.toBeNull();
  
  if(dialogboxVerifText){
    const dialogText = await dialogboxVerifText.textContent();
    expect(dialogText).toContain(expectedText);
  }

  await page.click(locators.linkDialogBox.closeButton);
}

export async function clickAndVerifyNewPage(page: Page, linkSelector: string, expectedUrl: string) {
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator(linkSelector).click(),
  ]);

  await newPage.waitForLoadState('load');
  const newPageUrl = newPage.url();
  expect(newPageUrl).toBe(expectedUrl);
  await newPage.close();

  const pageUrl = page.url();
  expect(pageUrl).toBe(locators.baseUrl);
}
