const getElementsList = require("./get-elements-list");
const getHtmlStructure = require("./get-html-structure");

const getProductsFromPage = async (url) => {
    //Obtinem structura HTML a paginii
    const html = await getHtmlStructure(url);

    //Traversam structura HTML a paginii si sa obtinem lista de produse

    const elementsList = getElementsList(html);

    console.log("Au fost identificate", elementsList.length, "elemente in pagina");
    //Pt fiecare produs sa se extraga datele dorite
}

const test = async (url) => {
    await getProductsFromPage(url);
};

test("https://www.obio.ro/alimente-bio");

module.exports = getProductsFromPage;