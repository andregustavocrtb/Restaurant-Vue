module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      Url: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.STRING
      },
      Descrtiption: {
        type: Sequelize.STRING 
      }
    });
  
    return Product;
  };