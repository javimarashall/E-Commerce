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
    res.status(500).json(err);//responds with error status 500
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

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
