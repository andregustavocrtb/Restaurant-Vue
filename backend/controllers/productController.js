const db = require("../models")
const Products = db.products

exports.create = (req, res) => {
    if (!req.body.Url) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    const {
        Url,
        Name,
        Price,
        Description
        } = req.body;
    
      Products.create({
        Url : Url,
        Name: Name,
        Price: Price,
        Description: Description
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Product coud not be added."
          });
        });
}

exports.findAll = (req, res) => {
  
    Products.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Products.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Product with id= ${id}`
        });
      });
  };