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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  console.log('****', req.body)
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData){
      res.status(404).json({message: 'No user with this id'});
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
