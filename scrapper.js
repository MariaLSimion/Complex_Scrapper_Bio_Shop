const config= require ('./config');
const getProductsFromPage = require ("./functions/get-products-from-page");
const saveData = require("./functions/save-data");
const scrapper = async (url) => {
    const products= await getProductsFromPage(url);

    console.log("Au fost identificate", products.length, "elemente in pagina");
  

    saveData(products);
};

scrapper(config.url);
