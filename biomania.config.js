const config = {

    url: "https://www.biomania.ro/categorii-produse/produse-promo/produse-alimentare-bio",
    elementsListSelector: '.category-products .products-grid .item',
    extractors:{
        productNameExtractor: ($) => $('.product-image').attr('title'),
        oldPriceExtractor: () => null,
        actualPriceExtractor: () => null,
        idExtractor: () => null
    }
}

module.exports = config;