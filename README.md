Image Processing API : This is a simple api it's main function is to size an image and view it by entering : image name , width and height  in the url and the API process the URL and view the image ,the API applies caching as if a image was processed before by the same dimensions the API will preview the image without creating a new one 


How to run this project:

Fist of all you will need to install the node_modules by running : npm install 

Then to start the project you will have to run : npm start 


To test the functionailty try using the following URL (For an existed processed photo): http://localhost:3000/resize?filename=daydream.jpg&width=600&height=200 

Or try to enter this URL (to resize an new photo): http://localhost:3000/resize?filename=daydream.jpg&width=400&height=600

You can change the width and the height to your desired dimensions 

To build the app typescript to javascript: npm run build


To run the tests : npm run test

For formatting you can run these two scripts :

For prettier : npm run prettier 

For Eslint : npm run lint 
