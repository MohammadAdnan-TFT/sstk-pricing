export const locators = {
    baseUrl: 'https://www.shutterstock.com/pricing',
    
    licensing: {
      standard: '//div[@role="button"]//span[text()="Standard License"]',
      standardHvr: '//div[@role="tooltip"]//span[contains(text(), "The Standard License is designed to work")]',
      standardHvrLink: '//div[@role="tooltip"]//div//span//span[contains(text(), "See more details")]',
      enhanced: '//div[@role="button"]//span[text()="Enhanced License"]',
      enhancedHvr: '//div[@role="tooltip"]//span[contains(text(), "The Enhanced License offers many more usage rights")]',
      enhancedHvrLink: '//div[@role="tooltip"]//div//span//span[contains(text(), "See more details")]',
    },
  
    ai: {
      aiImages: '//div[@role="button" and contains(text(), "Search and download")]',
      aiImagesHvr: '//div[@role="tooltip"]//span[contains(text(), "AI-generated images represent new content")]',
      editingTools: '//div[@role="button"]//span[text()= "Creative AI editing tools"]',
      editingToolsHvr: '//div[@role="tooltip"]//span[contains(text(), "Magic brush, Expand image")]',
      editingToolsHvrLink: '//div[@role="tooltip"]//div//span//a[contains(text(), "Click here")]',
      aiURL: 'https://www.shutterstock.com/discover/ai-features',
    },
  
    designTools: {
      basicTools: '//div[@role="button"]//span[text()= "Basic image editing tools"]',
      basicToolsHvr: '//div[@role="tooltip"]//span[contains(text(), "Crop, text, filters, and much")]',
      premiumTools: '//div[@role="button"]//span[text()= "Premium image editing tools"]',
      premiumToolsHvr: '//div[@role="tooltip"]//span[contains(text(), "All basic image editing tools")]',
    },
  
    toolTipMain: '//div[@role="tooltip"]',
  
    linkDialogBox: {
      licensing1: '//th[text()="Standard Image License"]',
      licensing2: '//th[text()="Enhanced Image License"]',
      closeButton: '//button[@aria-label="Close"]',
    },
  };
  