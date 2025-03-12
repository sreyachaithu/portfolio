public class SeleniumTest {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver"); // Update the path
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.google.com");
        System.out.println("Test Successful!");
        driver.quit();
    }
}