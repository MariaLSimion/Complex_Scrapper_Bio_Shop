const config= require ('./config');
const getCategoryPagesUrls = require('./functions/get-category-pages-urls');
const getProductsFromPage = require ("./functions/get-products-from-page");
const saveData = require("./functions/save-data");
const scrapper = async (url) => {

    //PAGINARE
    //obtinem toate url-urile paginilor din interiorul categoriei
const urls = await getCategoryPagesUrls(url);

    //traversare vector si obtinere de produse de pe fiecare pagina in parte

    //const products= await getProductsFromPage(url);

    const products =[];
    for(let i=0; i<urls.length; i++){
        const currentUrl = urls[i];
        const pageProducts = await getProductsFromPage(currentUrl);

        products.push(...pageProducts);
    }



    console.log("Au fost identificate", products.length, "elemente in pagina");
  

    saveData(products);
};

scrapper(config.url);
