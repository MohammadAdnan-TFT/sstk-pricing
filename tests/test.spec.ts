import { test } from '@playwright/test';
import { locators } from '../utils/selectors/locators';
import { hoverAndVerifyTooltip, clickAndVerifyDialog, clickAndVerifyNewPage } from '../utils/utils';

test('Hover over elements and validate text and links', async ({ page }) => {
  await page.goto(locators.baseUrl);

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });

  await hoverAndVerifyTooltip(
    page,
    locators.licensing.standard,
    locators.licensing.standardHvr,
    'The Standard License is designed to work'
  );

  await clickAndVerifyDialog(
    page,
    locators.licensing.standardHvrLink,
    locators.linkDialogBox.licensing1,
    'Standard Image License'
  );

  await hoverAndVerifyTooltip(
    page,
    locators.licensing.enhanced,
    locators.licensing.enhancedHvr,
    'The Enhanced License offers many more usage rights'
  );

  await clickAndVerifyDialog(
    page,
    locators.licensing.enhancedHvrLink,
    locators.linkDialogBox.licensing2,
    'Enhanced Image License'
  );

  await hoverAndVerifyTooltip(
    page,
    locators.ai.aiImages,
    locators.ai.aiImagesHvr,
    'AI-generated images represent new content'
  );

  await hoverAndVerifyTooltip(
    page,
    locators.ai.editingTools,
    locators.ai.editingToolsHvr,
    'Magic brush, Expand image'
  );

  await clickAndVerifyNewPage(
    page,
    locators.ai.editingToolsHvrLink,
    locators.ai.aiURL
  );

  await hoverAndVerifyTooltip(
    page,
    locators.designTools.basicTools,
    locators.designTools.basicToolsHvr,
    'Crop, text, filters, and much'
  );

  await hoverAndVerifyTooltip(
    page,
    locators.designTools.premiumTools,
    locators.designTools.premiumToolsHvr,
    'All basic image editing tools'
  );
});
