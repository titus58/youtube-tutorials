# Selenium Quickstart

## URLs
- [Selenium](https://www.selenium.dev/)
- [ChromeDriver](https://chromedriver.chromium.org/getting-started)
- [Hacker News - the website we are scraping](https://news.ycombinator.com/)
- [selenium/standalone-chrome Docker image](https://hub.docker.com/r/selenium/standalone-chrome)

## Start the docker image
```shell
docker run  -p 4444:4444 -p 7900:7900 -e SE_NODE_SESSION_TIMEOUT=3600 --shm-size="2g" selenium/standalone-chrome:latest
```

## Python code
Install the package
```shell
pip install selenium
```
The code
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Remote(
    command_executor=f'http://localhost:4444/wd/hub',
    options=webdriver.ChromeOptions(),
)

driver.get("https://news.ycombinator.com")

# Find the titles on the initial page
elements = driver.find_elements(By.CSS_SELECTOR, 'span.titleline')
print(elements[0].text)

# Type text in the search bar and submit
inputs = driver.find_elements(By.TAG_NAME, 'input')
inputs[0].send_keys('react')
forms = driver.find_elements(By.TAG_NAME, 'form')
forms[0].submit()

# Scrape titles from the results page
elements = driver.find_elements(By.CSS_SELECTOR, '.Story_title span')
titles = [e.text for e in elements]
```