# Scraper Obio - scraper de complexitate relativ ridicata
A more complex scrapper that extracts the country data from the following website: https://www.obio.ro/alimente-bio
## To-DO
1. Identificarea adreselor URL ale paginilor existente in cadrul unei categorii
2. Pentru fiecare adresa URL identificata:
- Trimite un request de tip HTTP GET pentru a obtine structura HTML a paginii
- Traverseaza structura HTML a paginii si obtine lista de produse. 
- Pentru fiecare produs in parte vom extrage datele dorite

3. Stocare date local 