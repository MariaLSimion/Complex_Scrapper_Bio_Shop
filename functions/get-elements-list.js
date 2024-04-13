const cheerio = require('cheerio');
//pt asta pornim de la structura html
const getElementsList = (html) => {
    // initializare cheerio pe baza  structurii html obtinute
    const $ = cheerio.load(html);

    //identificarera tiparului utilizat pentru elementele dorite 

    const selector = ".custom-row .product-box-wrapper:not(.product-box-dummy)";


    //extragere efectiva  a listei de tari pe baza tiparelor identificate

    const elementsList = $(selector);

    return elementsList;
};

module.exports = getElementsList;
