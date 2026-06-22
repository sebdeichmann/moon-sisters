from pathlib import Path
import json
import time
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

OUT = Path('docs/screenshots/responsive-check')
OUT.mkdir(parents=True, exist_ok=True)

viewports = [
    ('mobile-390', 390, 844),
    ('mobile-375', 375, 812),
    ('tablet-768', 768, 1024),
    ('desktop-1440', 1440, 1000),
]
paths = ['/', '/datenschutz', '/impressum']

options = Options()
options.binary_location = '/snap/firefox/8107/usr/lib/firefox/firefox'
options.add_argument('--headless')

driver = webdriver.Firefox(options=options)
results = []
try:
    for name, width, height in viewports:
        driver.set_window_size(width, height)
        for path in paths:
            url = f'http://127.0.0.1:5177{path}'
            driver.get(url)
            time.sleep(0.8)
            scroll_width = driver.execute_script('return document.documentElement.scrollWidth')
            client_width = driver.execute_script('return document.documentElement.clientWidth')
            scroll_height = driver.execute_script('return document.documentElement.scrollHeight')
            body_text = driver.find_element(By.TAG_NAME, 'body').text
            key = path.strip('/') or 'home'
            screenshot = OUT / f'{name}-{key}.png'
            driver.save_screenshot(str(screenshot))
            results.append({
                'viewport': name,
                'size': [width, height],
                'path': path,
                'scroll_width': scroll_width,
                'client_width': client_width,
                'horizontal_overflow': scroll_width > client_width + 1,
                'scroll_height': scroll_height,
                'screenshot': str(screenshot),
                'text_sample': body_text[:180],
            })

    # Functional language toggle check on mobile and desktop
    for name, width, height in [('mobile-390', 390, 844), ('desktop-1440', 1440, 1000)]:
        driver.set_window_size(width, height)
        driver.get('http://127.0.0.1:5177/')
        time.sleep(0.5)
        en_button = driver.find_element(By.XPATH, "//button[normalize-space()='EN']")
        en_button.click()
        time.sleep(0.5)
        h1 = driver.find_element(By.TAG_NAME, 'h1').text
        html_lang = driver.execute_script('return document.documentElement.lang')
        screenshot = OUT / f'{name}-english.png'
        driver.save_screenshot(str(screenshot))
        results.append({
            'viewport': name,
            'size': [width, height],
            'path': '/#language-toggle-en',
            'html_lang': html_lang,
            'h1_after_click_en': h1,
            'language_toggle_ok': html_lang == 'en' and 'A space for women' in h1,
            'screenshot': str(screenshot),
        })
finally:
    driver.quit()

print(json.dumps(results, ensure_ascii=False, indent=2))
