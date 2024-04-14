const getElementsList = require("./get-elements-list");
const getHtmlStructure = require("./get-html-structure");
const getProductData = require ("./get-product-data");

const getProductsFromPage = async (url) => {
    //Obtinem structura HTML a paginii
    const html = await getHtmlStructure(url);

    //Traversam structura HTML a paginii si sa obtinem lista de produse

    const elementsList = getElementsList(html);

    //return elementsList;
     //Pt fiecare produs sa se extraga datele dorite

     const productData= getProductData(elementsList);
     return productData;
    }


module.exports = getProductsFromPage;