const config ={
    url: "https://www.obio.ro/creme/",//"https://www.obio.ro/alimente-bio/pagina/4/",
    elementsListSelector: ".custom-row .product-box-wrapper:not(.product-box-dummy)",
    extractors:{
        productNameExtractor: ($) => $('.product-box').attr('data-product-name'),
        oldPriceExtractor: ($) => parseFloat($('.product_price_old').text().replace("Lei", "")),
        actualPriceExtractor: ($) => parseFloat($('.product_actual_price').text().replace("Lei", "")),
        idExtractor: ($) =>  $('.product-box').attr('data-product-id')
    }
}

module.exports = config;

 