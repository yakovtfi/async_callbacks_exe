// function getUserName(callback) {
//     setTimeout(function () {
//         const userName = "Moshe";
//         callback(userName);
//     }, 1000);
// }

// getUserName(function (name) {
//     console.log("User name is: " + name);
// });


// function loadScore(callback) {
//     setTimeout(function () {
//         const score = 85;
//         callback(score);
//     }, 1500);
// }

// loadScore(function (score) {
//     console.log("Loaded score: " + score);
// });

// console.log("End of script");


// function checkLogin(callback) {
//     setTimeout(function () {
//         const isLoggedIn = false;
//         callback(isLoggedIn);
//     }, 2000);
// }

// checkLogin(function (isLoggedIn) {
//     if (isLoggedIn) {
//         console.log("User is logged in");
//     } else {
//         console.log("User is NOT logged in");
//     }
// });

// function getProductPrice(productId, callback) {
//     setTimeout(function () {
//         const price = 99.9;
//         callback(price);
//     }, 1200);
// }

// console.log("Requesting product price...");

// getProductPrice(123, function (price) {
//     console.log("Price for product 123 is: " + price);
// });

// function loadConfig(callback) {
//     setTimeout(function () {
//         const config = {
//             env: "dev",
//             debug: true
//         };
//         callback(config);
//     }, 500);
// }

// loadConfig(function (config) {
//     console.log("Config loaded:", config);
// });

// function addAsync(a, b, callback) {
//     setTimeout(function () {
//         callback(a + b);
//     }, 1000);
// }

// addAsync(5, 7, function (sum) {
//     console.log("Sum is: " + sum);
// });


// function getFirstAsync(array, callback) {
//     setTimeout(function () {
//         callback(array[0]);
//     }, 700);
// }

// getFirstAsync(["a", "b", "c"], function (value) {
//     console.log("First: " + value);
// });


// function isEvenAsync(number, callback) {
//     setTimeout(function () {
//         callback(number % 2 === 0);
//     }, 800);
// }

// isEvenAsync(4, function (result) {
//     console.log("4 is even:", result);
// });

// isEvenAsync(5, function (result) {
//     console.log("5 is even:", result);
// });


// function downloadFile(url, callback) {
//     setTimeout(function () {
//         console.log("Downloading from:", url);
//         callback("Download finished");
//     }, 1500);
// }

// downloadFile("http://example.com/file", function (message) {
//     console.log(message);
// });


// function doubleAsync(value, callback) {
//     setTimeout(function () {
//         callback(value * 2);
//     }, 300);
// }

// doubleAsync(10, function (result) {
//     console.log("Result: " + result);
// });


// 2.0



const fs = require("fs");


// fs.writeFile("note.txt", "Hello from async writeFile", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File written successfully");
//     }
// });


// fs.readFile("note.txt", "utf8", function (err, data) {
//     if (err) {
//         console.log("Error reading file");
//         console.error(err);
//     } else {
//         console.log("Content:", data);
//     }
// });


// fs.appendFile("note.txt", "\nNew line added", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Line appended");
//     }
// });


// fs.mkdir("logs", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Directory 'logs' created");
//     }
// });


// fs.writeFile("logs/log.txt", "First log line", function (err) {
//     if (err) {
//         console.log("Error creating log file");
//         console.error(err);
//     } else {
//         console.log("Log file created");
//     }
// });


// fs.readdir("logs", function (err, files) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Files in logs:");
//         files.forEach(function (file) {
//             console.log(file);
//         });
//     }
// });


// fs.stat("note.txt", function (err, stats) {
//     if (err) {
//         console.log("Error getting stats");
//         console.error(err);
//     } else {
//         console.log("Is file:", stats.isFile());
//         console.log("Size:", stats.size);
//     }
// });


// fs.unlink("logs/log.txt", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("log.txt deleted");
//     }
// });


// fs.writeFile("note.txt", "New content here", function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log("note.txt overwritten");

//     fs.readFile("note.txt", "utf8", function (err, data) {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("New content:", data);
//         }
//     });
// });


fs.mkdir("data", function (err) {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile("data/info.txt", "Data file created", function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("data/info.txt created");
        }
    });
});