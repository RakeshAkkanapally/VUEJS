const { sum, compileAndroidCode}=require('./sum');
const puppeteer = require('puppeteer');

test('addition of two numbers',()=>{
    const addTwoNumbers=sum(10,20);
    expect(addTwoNumbers).toEqual(30);
});

test('Compiling Andriod',()=>{
    expect(()=>compileAndroidCode()).toThrow('you are using the wrong JDK');
});


test('application launch',async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080','--no-sandbox']
    });
    const page=await browser.newPage();
    await page.goto('https://google.com');
    await page.screenshot({ path: 'example.png' });
    await page.type("input[title='Search']",'Anna');
    await page.keyboard.press('Enter');
   // await page.waitForTimeout(10000);
});




