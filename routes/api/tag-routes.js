const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ //using await to wait to store results in categoryData
      include: [{ model: Product}],//includes its associated Products
    });
    res.status(200).json(tagData);// if it resolves correctly, send data
  } catch (err) { //catch error
    res.status(500).json(err);//responds with error status 500
  }  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {//find a product by ID
      include: [{ model: Product }],//include its associated Products
    });
    if (!tagData) { //throw error if id does not match the product
      res.status(404).json({message: 'No Tag found with that ID'});
      return;
    }
    res.status(200).json(tagData); //responds with a 200 status message and the data
  }catch (err){ //catch error if theres one and responds with a status 500 message
    res.status(500).json(err);
  }  
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body); //creates a new category and puts it in the categoryData var
    res.status(200).json(tagData);  //displays the data
  }
  catch (err) {
    res.status(400).json(err);//if there's an error, catch the error
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, { //update tag by id
      where: {
        id: req.params.id, 
      },
    });
    if (!tagData){ //if there's an error, throw error and message
      res.status(404).json({message: 'No user with this id'});
      return;
    }
    res.status(200).json(tagData); //if there's no error, send over data
  }
  catch (err) { //if there's a server error, throw error
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {//delete tag by id
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({ //use the await to wait for the promise to be resolved
      where: {
        id: req.params.id
      }
    });

    if (!tagData) { //if there's an error, throw error and display message
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(tagData);//if there's no error, send over data
  } catch (err) {//if there's a server error, throw error
    res.status(500).json(err);
  }
});

module.exports = router;
