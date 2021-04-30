# Employee-Management-System

## Summary 
This software contains an application on the backend side that helps an e-commerce company compete with other companies. This application contains models and routes that help navigate within the application and obtain the desired data. The application is set up for the user to be able to view all the categories or all the products or all the tags. However, the user can also view a specific category by entering the category id and the same for for products and tags. Also, the user can view a category and all the products it contains and view a product with all the associated tags. 

E-commerce companies are constantly adding new products, deleting products, and updating current products. This application addresses those features required for a successful e-commerce company. The user is able to create, update, and delete categories, products, and tags. The user is able to accomplish this because every category, product and tag, have unique identifiers. When a user adds a new category, product, or tag, the application automatically gives the new item a unique id.  

## Site
![site](./assets/site.gif)

## Technologies Used
* Javascript - Used to write in Node
* Package.json - Used to identify the project and the dependencies
* Package-lock.json - Automatically created for operations where npm modifies  package.json
* Node.js - Used to to write server-side application
* Npm - Used to obtain software packages
* GitHub - Used as the repository
* MySQL - A database management system
* Console.table - Used to print mysql rows to the console
* Sequelize - A Mysql framework
* Insomnia - Used to test API routes

## Code Snippet
This code snippet represents the code used for making a route request using a primary key of id. Important to note is the usage of async and await in the function. The application won't continue until the promise is resolved. Also, the application responds with status messages such as a 200, 404, or 500. 
```javascript
router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],//include its associated Products
    });
    if (!categoryData) { //throw error if id does not match the product
      res.status(404).json({message: 'No category found with that ID'});
      return;
    }
    res.status(200).json(categoryData); //responds with a 200 status message and the data
  }catch (err){ //catch error if theres one and responds with a status 500 message
    res.status(500).json(err);
  }  
});
```

## Starting the Application
In order to start the application from the command line, the user needs to run: node server.js

## Repository Link
https://github.com/javimarashall/E-Commerce

## Video Link
https://drive.google.com/file/d/1eiLX9qLtJ1KMwkTSbLyf514ZV4cOZy2C/view
## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)
