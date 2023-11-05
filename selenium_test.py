from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

# generation_text = "2 story victorian house"
sleep_factor = 1.2

def generate_asset(text):
    # Enter prompt
    textbox = driver.find_element(By.CLASS_NAME, "emptyText_c03d90")
    textbox.send_keys("/genie")
    sleep(1*sleep_factor)
    genie = driver.find_element(By.CLASS_NAME, "infoWrapper__1d10f")
    genie.click()
    sleep(1*sleep_factor)
    textbox = driver.find_element(By.CLASS_NAME, "emptyText_c03d90")
    textbox.send_keys(text)
    textbox.send_keys(Keys.ENTER)
    sleep(21*sleep_factor)

    # Click option 4
    buttons = driver.find_elements(By.CLASS_NAME, "emoji")
    buttons[-2].click()
    sleep(3*sleep_factor)

    # Download to downloads/
    driver.switch_to.window(driver.window_handles[1])
    # driver.refresh()
    sleep(6*sleep_factor)
    buttons = driver.find_elements(By.CLASS_NAME, "lucide")
    buttons[0].click()
    sleep(1*sleep_factor)
    driver.close()
    driver.switch_to.window(driver.window_handles[0])

# Open browser
options = webdriver.ChromeOptions()
options.headless = False
driver = webdriver.Chrome(options=options)
driver.get("https://discord.com/channels/991613372439212142/1169029227123839028")
sleep(6*sleep_factor)

# buttons = driver.find_elements(By.TAG_NAME, "button")
# buttons[1].click()
# sleep(1)

# Log in
email_field = driver.find_element(By.NAME, "email")
email_field.send_keys("wangxiaoanjoseph@gmail.com")
password_field = driver.find_element(By.NAME, "password")
password_field.send_keys("2cyjcRN6&!TUfoum")
buttons = driver.find_elements(By.TAG_NAME, "button")
buttons[1].click()

# sleep(9*sleep_factor)

# !! TODO Currently manually click on an option first and select "Trust lumalabs.ai links from now on"

while True:
    text = input()
    generate_asset(text)