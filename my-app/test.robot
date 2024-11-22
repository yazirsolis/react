*** Settings ***
Library           Selenium2Library

*** Test Cases ***
Open Browser and click component
    Comment    \    Open first browser with application
    Open Browser    http://localhost:3000/    Chrome
    Click Element    //*[@id="root"]/div/header/a
