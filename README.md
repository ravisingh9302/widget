
# Widget
* This is iFrame widget create for Telechatbot integration through this widget CDN 

## Follow step to use this CDN widget in your website
*  These are  CDN links of my widget
```
https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.js
https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.css

```
* paste the below stylesheet CDN in your HTML file HEAD section.
```
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.css">

```

* paste the below javascript CDN in your HTML file at just above the body closing tag.
```
 <script type="text/javascript"src="https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.js"></script>
```

* After this you can paste the below code to your HTML page where you want the chat bot.
* Note:- TelechatbotConfig are optional you can you it if you want some modification.
```
 <div id="TeleChatbot"></div>
    <script>window.TelechatbotId = "your Telegramchat id"
        window.TelechatbotConfig = {
            titleOpen: 'Let\'s chat!',
            chatbgColor: "#00A9E6",
            chatIconcolor: 'black',
            introMessage: 'Hello! How can we help you?',
            autoResponse: 'Looking for the available customer executive.',
            placeholderText: 'Type your message...',
            titlecolor: "black",
            titlebgcolor: "#00A9E6",
            chatbotbgcolor: "#E2E8F0",
            desktopHeight: 480,
            desktopWidth: 360,
            visitorPronoun: 'You'
        };
    </script>
```
* After all you HTML page looks like 
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telechatbot</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.css">
</head>

<body>



    <div id="TeleChatbot"></div>
    <script>window.TelechatbotId = "your Telegramchat id" </script>
    <script type="text/javascript"src="https://cdn.jsdelivr.net/gh/ravisingh9302/widget@main/dist/assets/widget-min-v1.0.3.js"></script>
</body>

</html>
```

