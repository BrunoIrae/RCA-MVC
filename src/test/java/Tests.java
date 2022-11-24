import org.junit.Assume;
import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class Tests {
    WebDriver driver;

    @BeforeAll
    public void setupDriver() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver_win32/chromedriver.exe");
    }

    @BeforeEach
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterEach
    public void close() {
        driver.close();
    }

    @Test
    public void esperaAbrirPaginaHomeTest() {
        driver.get("http://localhost:3000/home");
        Assertions.assertEquals("http://localhost:3000/home", driver.getCurrentUrl());
    }

    @Test
    public void esperaClicarNaOpcaoVoluntariarTest() {
        driver.get("http://localhost:3000");
        driver.findElement(By.xpath("/html/body/div/div/ul/li[2]/a")).click();
        Assertions.assertTrue(driver.getTitle().equals("PetHunt"));
    }

    @Test
    public void esperaAbrirPaginaDeLoginTest() {
        driver.get("http://localhost:3000/login");
        Assertions.assertTrue(driver.getCurrentUrl().contains("login"));
    }

    @Test
    public void esperaNaoRealizarLoginTest() {
        driver.get("http://localhost:3000/login");

        // Procura e insere e-mail inválido no campo de e-mail (formato incompatível).
        driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("admin");

        // Procura e insere senha no campo de senha.
        driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("admin");

        Assertions.assertFalse(driver.getCurrentUrl().contains("logado"));
    }

    @Test
    public void esperaRealizarLoginTest() {
        driver.get("http://localhost:3000/login");

        // Procura e insere e-mail no campo de e-mail.
        driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("admin@rca.com");

        // Procura e insere senha no campo de senha.
        driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("admin");

        // Procura e clica no botão login.
        driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/div/input")).click();

        Assertions.assertTrue(driver.getCurrentUrl().contains("logado"));
    }
}
