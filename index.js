var fs = require('fs');
let arguments = process.argv;
let fileName = arguments[2]; 
let path = arguments[3];
let stringToReplace = arguments[4];
let rawdata = fs.readFileSync(fileName);
let students = JSON.parse(rawdata);

fs.readdir(path, function (err, items) {
    items.forEach(file => {       
        let fileName = file
                    .replace(stringToReplace, "")
                    .replace("@mymail.nyp.edu.sg_attempt", "");
        let adminNumber =fileName.substring(0,7);
        fileName = fileName.replace(adminNumber,students[adminNumber.toUpperCase()]);

        fs.rename(path + "\\" + file, path + "\\" + fileName, (err) => {
            if (err) throw err;
        });
    })
});