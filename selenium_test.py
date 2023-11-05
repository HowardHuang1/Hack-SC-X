from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

generation_text = "2 story victorian house"
multiplier = 0.8


def generate_asset(text):
    # textbox = driver.find_element(By.CLASS_NAME, "emptyText_c03d90")
    # textbox.send_keys("/genie")
    # sleep(1*multiplier)
    # genie = driver.find_element(By.CLASS_NAME, "infoWrapper__1d10f")
    # genie.click()
    # sleep(1*multiplier)
    # textbox = driver.find_element(By.CLASS_NAME, "emptyText_c03d90")
    # textbox.send_keys(text)
    # textbox.send_keys(Keys.ENTER)
    # sleep(21)

    buttons = driver.find_elements(By.CLASS_NAME, "emoji")
    buttons[-2].click()
    sleep(6*multiplier)

    if text == "download":
        # action = webdriver.common.action_chains.ActionChains(driver)

        # action.move_to_element_with_offset(first_img, -40, 750)
        # action.click()
        # action.perform()

        # download_btn = driver.find_element(By.XPATH, '//div/*[name()="svg"][@class="lucide"]')
        download_btn = driver.find_element(By.XPATH, '//svg[@class="lucide lucide-arrow-down-to-line"]')
        
        # # download_btn = driver.find_element(By.CSS_SELECTOR, "svg.lucide.lucide-arrow-down-to-line")
        download_btn.click()

# Need to open first and login to be prepared for new prompts
options = webdriver.ChromeOptions()
options.headless = False

driver = webdriver.Chrome(options=options)
driver.get("https://discord.com/channels/991613372439212142/1169029179413643325")

sleep(6*multiplier)

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

# sleep(9*multiplier)

# Enter prompt

# Manually click on something first and select "Trust lumalabs.ai links from now on"

while True:
    text = input()
    generate_asset(text)

sleep(1*multiplier)

# checkbox = driver.find_element(By.CLASS_NAME, "backdrop__7e89b withLayer__1fe9d")
# checkbox = driver.find_element(By.TAG_NAME, "svg")
# # checkbox.click()
# # driver.execute_script("arguments[0].click();", checkbox)
# webdriver.ActionChains(driver).move_to_element(checkbox).click(checkbox).perform()

# buttons = driver.find_elements(By.TAG_NAME, "button")
# buttons[0].click()

# print(driver.page_source)

sleep(100)
driver.quit()