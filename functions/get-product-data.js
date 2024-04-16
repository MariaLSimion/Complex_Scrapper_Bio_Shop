const cheerio = require('cheerio');
const config = require ('../config');
const getProductData = (elementsList) => {
    //parcurgem intreaga lista de elemente analizand fiecare element pe rand
    const data = [];
    for (let i = 0; i < elementsList.length; i++) {
        
        //pentru fiecare element din lista de elemente extragem datele despre produs
        //id nume pret pret redus
        const currentElement = elementsList[i];

        const $ = cheerio.load(currentElement);

        const name = config.extractors.productNameExtractor($)
        const oldPrice = config.extractors.oldPriceExtractor($);
        const actualPrice = config.extractors.actualPriceExtractor($);
        const id = config.extractors.idExtractor($);
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
