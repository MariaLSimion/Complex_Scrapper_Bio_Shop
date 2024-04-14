const fs = require('fs');

const saveData = (data) => {
    fs.writeFile('output.json', JSON.stringify(data, null, 3), (err)=>{
        if(err){
            console.error('Eroare!');
            return console.error(err);
        }
        console.log("Datele au fost scrise cu succes in fisier! ");
    })
}

module.exports = saveData;