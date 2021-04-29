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
* Inquirer - Used to prompt user questions
* Console.table - Used to print mysql rows to the console

## Code Snippet
This code snippet represents the code that runs the function to be able to view employees. Just as important, this code also represents the query used to be able to join the employee table, the role table, and the department table. 

```javascript
const viewEmployees = () => {
    const query =
        `
    SELECT
		employee.id,
        employee.first_name,
        employee.last_name,
        employee_role.title,
        employee_role.salary,
        department.name AS department,
        CONCAT(manager.first_name," ",manager.last_name) AS manager
    FROM
		employee 
	LEFT JOIN employee_role ON employee.role_id = employee_role.id
    LEFT JOIN department ON employee_role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id
    `;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runStart();
    });
};
```

## Starting the Application
In order to start the application from the command line, the user needs to run: node server.js

## Repository Link
https://github.com/javimarashall/Employee-Management-System

## Video Link
https://drive.google.com/file/d/1gRLCINZI5QFbGv9AMPGNnGhS-M6HJqVR/view

## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)
