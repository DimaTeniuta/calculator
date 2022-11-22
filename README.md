1. Task: [Level 0: Custom Calculator](https://mail.google.com/chat/u/2/#chat/space/AAAAg3mEYtY)
---
![image](https://user-images.githubusercontent.com/93836691/203250913-31d3ac87-64f1-409e-a9f7-38f7a0888082.png)

![image](https://user-images.githubusercontent.com/93836691/203250828-b51e94b0-3772-4008-8de0-b24bf837c694.png)

![image](https://user-images.githubusercontent.com/93836691/203250999-d3da985c-52e2-448b-b0ae-510dc0701db6.png)

2. Deploy: https://custom-calculator-innowise.netlify.app/
3. How to run the app: 
- You should use command in the terminal ```git clone https://github.com/DimaTeniuta/calculator.git```
- Next, use the ```cd calculator``` command to go to the calculator folder
- use command ```npm i```
- after successful installation use command ```npm run build``` for create build
- others command you can find in package.json file
4. folder structure:
- public has font and svg file for logo.
- components
1. app (consists of 3 files. It's: app.js, appController.js, appView.js )
2. calculator (consists of calculator.js file and folder with executors for working calculator (pattern Command))
3. memento (consists of memento.js, creator.js, caretaker.js) used to saving calculations in history (pattern Memento)
4. switch (folder with files for working switch for change theme)
- utils (consists of 3 files for mathematical operations, keep variables and validation)
- test has files for test mathematical functions
And index.js, index.html, style.css in src folder
