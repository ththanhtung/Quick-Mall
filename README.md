# Report

## 1 : Introduction
### Team member
- Nguyễn Thanh Long - ITITWE18034
- Nguyễn Thanh Thanh Tùng – ITITIU19236
- Đinh Nho Phú Thịnh – ITITIU19216

### Topic : COMMERCIAL WEB APP
- A web application that helps users electronically buy or sell goods over the internet is called an e-commerce web app. 
- Payment integration and transaction integration are essential parts of e-commerce web apps. 
- E-commerce draws on technologies like electronic funds, inventory management systems, mobile commerce, internet market, and supply chain management.
- Today, with the advancement of technology, shopping platform have gradually turned to online. We decided to choose the Commercial Web Application for our project because we were interested in how the online shopping system works. We have many products in our system and Companies to manage product easily. We also want to dig deeper into how the system interacts with users and develop a commercial website online. And most importantly is apply the useful of the website into daily life, especially this dangerous COVID-19 duration when people just stay at home for defending pandemic.
- Nowadays, it is still common to use the website to manage the product and sell them. Customers do not need going directly to the mall to choose these products that they want to buy. Our app is based on some huge commercial website likely Amazon or eBay and developed the features needed for more customer interaction. Customers can save time and money by buying these products through website. Especially in this complicated situation of COVID-19, student cannot go to mall to test the product directly, then they can go to the Commercial website to search product and buy online, the product will be delivered to the address of the customer. Our application provides all the information about the products in the mall, students can open the web at home and choose the product they want.



![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/282338661_3293016664313085_5677063540372904293_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=gOnbMWQ8kbkAX-u8nIW&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVLUISnSRYnGO4sy68HpOYu_QKiAEasPMrshwCoXbNUOXw&oe=62C3A2A1)

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Open [http://localhost:3000/admin](http://localhost:3000/admin) to open admin page in your browser.


The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Motivation or why this topic
### Task allocation for each team member.

## 2 : Discuss about your technology stack selection (language/library/framework)

- ### Reactjs 

- ### Nodejs

- ### MongoDB (Nosql)

## 3 : Show all required diagrams and explain them.

## 4 : Show your github project page
### README (the report)

### Team Commits in github

## 5 : Feature

### Which features are completed

Our project is built on the inspiration from some big commercial website with some similar modules, such as:

-	In the Home page, we have a lot of information about the product and the producer. Along with that, we have a search box based on title, author in the middle of the page to help us easily find the desired product information. 

-	Search Feature: In our project, this function will work directly on the main page with the resources sorted. It uses key word, title, author to search. It returns a list of related results and attachments.

-	Login & Register Module: Customers must go directly to the register page and enter their email, username and password to get an account. By having an account, customers can buy product easily by shopping online. 

-	Add to Cart Feature: After choosing these products customers add them to cart and tend to the payment process. In cart part, customers could add a new product or delete these customers don’t want to buy.

-	Order Feature: After adding these products to cart, customers will tend to the set Order process. In this process, customers must fill in their information likely: name, address, phone number, etc. After that, customers will choose the payment and shipping method. 

-	Authentication & Verify Feature: After signing in into the system, the system will identify who you are. Are you Admin or a customer? 

   	- If you are a customer: You just have permission to add, remove or update your product and profile.

 	- If you are an administrator: You have permission to control all features in this website like add or remove the customers. Checking the stat of product through months or view the overview of the products, orders, and analytics.


#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### Which features are incompleted
- Payment

- Verify order by email 

- Login with Facebook/Email 

### Future features if you want to developer further after the course
The future work part show our efforts to improve the application more in the near future. Specifically, we will add a few more features to make it easier for users to use which will be mentioned below:

-     More payment method: Payment with Paypal will be added to the website since paying with PayPal gives you an extra level of security and fraud prevention. If you pay for a purchase using PayPal that ends up being fraudulent, PayPal can help get your money back.
-     Verify order by email: In order to confirm that your order was successful, confirmation and important information will be sent directly to your email and gives you directions for the next steps just with one click.

-     Login with Facebook/Email: To save time for users not having to create new accounts. Login by Facebook or Email will be allowed. Really simple, fast and secured. Users wont need to remember another username/password

## 6 : Discuss challenges in the project.

## 7 : Result and Conclusion
### Screenshots/Videos/GIF of your topic to showcase all features.

### Sign in or login 

![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/282338661_3293016664313085_5677063540372904293_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=gOnbMWQ8kbkAX-u8nIW&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVLUISnSRYnGO4sy68HpOYu_QKiAEasPMrshwCoXbNUOXw&oe=62C3A2A1)

### Sign up or Register

![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/280932344_1083161262294323_8659534074833768830_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cnMPFVMI8kEAX9U1GY_&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVKbCji3Bk3lRWv2TUZ9XcMH4zvw_P9votQOwyuNCGFnZw&oe=62C56F18)

### Main page

![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/280282192_428532362425904_8965117067527444163_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q0flrHAE7B8AX_95E7H&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVLj4_lm4GanZ-8r6Z35ohEuj0QaiWt8rxPe_ChQJNPLvA&oe=62C3CE95)


![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/284229649_762073521458889_8471187354095223672_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IeM3MhWNMDsAX_tJymA&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVLxhWcfJjZechm3iGEZ6d4Ui0lcwYEflmeZQNoNzbNcFA&oe=62C35B3D)


![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/284830269_1091041298428531_7452827778480059989_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pJkuft7NW3gAX_dfdu5&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVIf892OTDoD09A7IgomdAs9mxh7gJWdDK9Z_W1xbNZ9Pg&oe=62C4826F)

### Admin page 

![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/282260999_342735077943890_2525174012081437927_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=C07YP8ZsIa4AX-FGEzZ&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVIoKzx7GUFZWPQGOjtt9SHNtgQgvlR_WWgG2DE0XSNhYA&oe=62C5FBD4)


![Tên ảnh](https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.15752-9/282412753_589305979069779_1086888434600058471_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SWnH-pEhtLsAX_eP3xV&_nc_ht=scontent.fsgn16-1.fna&oh=03_AVI-YI-Kjw3UuuKNDFTfwp0UAo99F49NECS8Kk9Tp3cKJQ&oe=62C4C9D8)


## 8 : What have you learned?

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
