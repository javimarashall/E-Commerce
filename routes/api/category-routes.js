const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => { //Added an async to be able to use await later
  // find all categories
  try {
    const categoryData = await Category.findAll({ //using await to wait to store results in categoryData
      include: [{ model: Product}],//include its associated Products
    });
    res.status(200).json(categoryData);// if it resolves correctly, send data
  } catch (err) { //catch error
    res.status(500).json({message: 'Bad Route'});//responds with error status 500
  }  
});

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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body); //creates a new category and puts it in the categoryData var
    res.status(200).json(categoryData);  //displays the data
  }
  catch (err) {
    res.status(400).json(err);//if there's an error, catch the error
  }
});

router.put('/:id', async (req, res) => { //This is the route to get categories by id
  // update a category by its `id` value
  console.log('****', req.body) //console log the req.body
  try {
    const categoryData = await Category.update(req.body, { //updates the category but also waits until the promise is resolved to move on
      where: {
        id: req.params.id, //The id entered by the user to be deleted
      },
    });
    if (!categoryData){ //If the id is not found, throw error
      res.status(404).json({message: 'No user with this id'}); //display this message if there's an error
      return;
    }
    res.status(200).json(categoryData); //if there's no error, send over the data
  }
  catch (err) {
    res.status(500).json(err); //if there's a server error, send status 500
  }
});

router.delete('/:id', async (req, res) => { //the route to delete a category depending on id
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({ //the destroy means to delete the category
      where: {
        id: req.params.id //where the user enters the id of the category to be deleted
      }
    });

    if (!categoryData) { //if no id found, throw error and display error message
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);//No error, send over the data
  } catch (err) {
    res.status(500).json(err);//server error, show status 500
  }
});

module.exports = router;
