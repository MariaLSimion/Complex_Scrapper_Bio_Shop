const cheerio = require ('cheerio');
const getHtmlStructure= require('./get-html-structure');

const getPageUrl = (categoryFromPageUrl, pageNumber) => {
return categoryFromPageUrl + "pagina/" + pageNumber;
};
//nr de produse /nr produse pe pagina - pt a obtine ultimul index al ultimei pagini
const getLastPageIndex = async (url) =>{
    //obtinem structura html
    const html = await getHtmlStructure(url);
    //obtinem numarul total de produse 
    const $ = cheerio.load(html);
    const totalProducts = parseInt($('#content > div.row.title-and-p-list-controls-row > div > h1 > small').text().replace("produse", ""));
    //obtinem numarul de produse per pagina:
    const productsPerPage = parseInt($('#content > div.row.title-and-p-list-controls-row > div > div > div.p-list-controls-left > div.btn-wrapper.d-none.d-lg-block > div > button').text());

    //determinarea numarului de pagini cu rotunjire prin adaos
    const lastPageIndex = Math.ceil(totalProducts/productsPerPage);

    return lastPageIndex;
   


};

const getCategoryPagesUrls = async (categoryFromPageUrl) => {
    //detectarea tiparelor dupa care este construita adresa unei pagini 
    //pagina 1:https://www.obio.ro/alimente-bio
    //pagina 2: https://www.obio.ro/alimente-bio/pagina/2/
    //pagina 3: https://www.obio.ro/alimente-bio/pagina/3/ 
//pe baza tiparului identificat, construim o functie care returneaza adresa paginii, in functie de prima pagina si numarul paginii . 
const lastPageIndex = await getLastPageIndex(categoryFromPageUrl);
const urls = [categoryFromPageUrl];
for (let i=2; i<=lastPageIndex; i++){
    const pageUrl = getPageUrl(categoryFromPageUrl, i);
    urls.push(pageUrl);
}
return urls;
};

module.exports = getCategoryPagesUrls;