const cheerio = require('cheerio');

const getProductData = (elementsList) => {
    //parcurgem intreaga lista de elemente analizand fiecare element pe rand
    const data = [];
    for (let i = 0; i < elementsList.length; i++) {
        
        //pentru fiecare element din lista de elemente extragem datele despre produs
        //id nume pret pret redus
        const currentElement = elementsList[i];

        const $ = cheerio.load(currentElement);

        const name = $('.product-box').attr('data-product-name');
        const oldPrice = parseFloat($('.product_price_old').text().replace("Lei", ""));
        const actualPrice = parseFloat($('.product_actual_price').text().replace("Lei", ""));
        const id = $('.product-box').attr('data-product-id');
        data.push({
            name,
            oldPrice,
            actualPrice,
            id,
        });
    }
    return data;
};
module.exports = getProductData;
