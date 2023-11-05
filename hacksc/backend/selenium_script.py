from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

import socket
import shutil

# Create a socket server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 1234))
server_socket.listen(1)

# Accept incoming connections
client_socket, address = server_socket.accept()
print('Connected by', address)


# Process the received data as needed

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

    # Specify the source file path
    source_file = f'C:\Users\josep\Downloads\{text}.glb'

    # Specify the destination folder path
    # TODO Incomplete
    destination_folder = f'C:\Users\josep\OneDrive - University of Southern California\hacksc\Hack-SC-X\hacksc\src\components\assets\{text.split()[0] + text.split()[1]}.glb'

    # Move the file
    shutil.move(source_file, destination_folder)

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
    # Receive and process data
    data = client_socket.recv(1024).decode()
    print(data)

    # text = input()
    generate_asset(text)

# Close the connection
client_socket.close()