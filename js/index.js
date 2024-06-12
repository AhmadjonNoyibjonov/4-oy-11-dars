// Stringlarda `at`, `charAt`, `charCodeAt`, va `length` metodlariga oid 5 ta masala funksiyalar bilan ishlaydigan qilib ishlanadigan masalalar shartlari:
// 1-masala
// function getLastCharstr(arg) {
//     let res =  arg.at(-1);

//     return res;

// }
// console.log(getLastCharstr('hello'));

// 2-masala

// function getMiddleChars(arg) {
//   let res;

//   if (arg.length % 2 == 1) {
//     let middleindex = Math.floor(arg.length / 2);
//     res = arg.substring(middleindex, middleindex + 1);
//   } else {
//     let middleindex = Math.floor(arg.length / 2) - 1;
//     res = arg.substring(middleindex,middleindex + 2);
//   }

//   return res;
// }

// console.log(getMiddleChars('Boburbek'));

// 3-masala
// function getFirstCharCode(arg) {
//     let res;
//     res = arg.charCodeAt(0);

//     return res;
// }

// console.log(getFirstCharCode("good"));

// 4-masala

// let arg = "Noyibjonov.A";
// function getStringLengthDescription(arg) {
//   let res;
//   if (arg.length > 10) {
//     res = "long string";
//   } else {
//     res = "short string";
//   }

//   return res;
// }
// console.log(arg.length);
// console.log(getStringLengthDescription(arg));

// 5-masala

// let arg = "hello";
// function getCharCodes(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     console.log(arg.charCodeAt(i));
//   }

//   return;
// }
// getCharCodes(arg);

// Stringlarda `slice`, `substring`, va `substr` metodlariga oid 7 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:
// 1-masala
// function getFirstThreeChars(arg) {
//   let res;
//   res = arg.slice(0, 3);

//   return res;
// }

// console.log(getFirstThreeChars("hello"));

// 2-masala
// function getLastFiveChars(arg) {
//   let res;
//   res = arg.slice(arg.length - 5);

//   return res;
// }

// console.log(getLastFiveChars("uzbekiston"));

// 3-masala
// function getMiddleChars(arg) {
//   let res;

//   if (arg.length % 2 == 1) {
//     let middleindex = Math.floor(arg.length / 2);
//     res = arg.substring(middleindex, middleindex + 1);
//   } else {
//     let middleindex = Math.floor(arg.length / 2) - 1;
//     res = arg.substring(middleindex,middleindex + 2);
//   }

//   return res;
// }
// console.log(getMiddleChars('Ahmadjon'));

// 4-masala
// function getThreeCharsFromFifthIndex(arg) {
//   let res;
//   res = arg.substr(5, 3);

//   return res;
// }

// console.log(getThreeCharsFromFifthIndex("FIFAWorldCup"));

// 5-masala
// function getFirstTenChars(arg) {
//   let res;
//   res = arg.substr(0, 10);

//   return res;
// }

// console.log(getFirstTenChars("FranseFootboll"));

// 6-masala
// function getLastThreeChars(arg) {
//   let res;
//   res = arg.slice(arg.length - 3, arg.length);

//   return res;
// }

// console.log(getLastThreeChars("footboll"));

// 7-masala
// function getSubstringFromSecondIndex(arg) {
//   let res;
//   res = arg.substring(2);

//   return res;
// }

// console.log(getSubstringFromSecondIndex("hello"));

// Stringlarda `toUpperCase`, `toLowerCase`, `concat`, `trim`, `padStart`, `trimEnd`, va `padEnd` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:
// 1-masala
// function convertToUpperCase(arg) {
//   let res;
//   res = arg.toUpperCase();

//   return res;
// }

// console.log(convertToUpperCase("ahmadjon"));

// 2-masala
// function convertToLowerCase(arg) {
//   let res;
//   res = arg.toLowerCase();

//   return res;
// }

// console.log(convertToLowerCase("NOYIBJONOV"));

// 3-masala
// function concatStrings(arg1,arg2) {
//     let res;
//     res = arg1.concat(arg2);

//     return res;
// }

// console.log(concatStrings("hello", " children"));

// 4-masala

// function trimString(arg) {
//     let res;
//     res = arg.trim();

//     return res;
// }

// console.log(trimString("      salom      "));

// 5-masala
// function padStringStart(arg) {
//   let res;
//   res = arg.padStart(7, "good");

//   return res;
// }

// console.log(padStringStart("bye"));

// 6-masala
// function padStringEnd(arg) {
//   let result;
//   result = arg.padEnd(7, "bye");

//   return result;
// }
// console.log(padStringEnd("good"));

// 7-masala
// function trimEndString(arg) {
//   let res;
//   res = arg.trimEnd();

//   return res;
// }

// console.log(trimEndString("   salom         "));

// 8-masala
// function trimStartString(arg) {
//   let res;
//   res = arg.trimStart();

//   return res;
// }

// console.log(trimStartString("       salom"));

// 9-masala
// function padStringWithZerosStart(arg) {
//   let res;

//   res = arg.padStart(10, "0");

//   return res;
// }
// console.log(padStringWithZerosStart(" salom"));

// 10-masala
// function padStringWithSpacesEnd(arg) {
//     let res;

//     res = arg.padEnd(12," ");

//     return res;
// }

// console.log(padStringWithSpacesEnd("hello"));

// Stringlarda `repeat`, `replace`, `replaceAll`, va `split` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:
// 1-masala
// function repeatString(arg) {
//   let res;
//   res = arg.repeat(`${n}`);

//   return res;
// }

// let n = +prompt("n soni kirirtilsin");

// console.log(repeatString("hello"));

// 2-masala
// function replaceAppleWithOrange(arg) {
//   let res;
//     res = arg.replace("apple", "orange")

//   return res;
// }

// console.log(replaceAppleWithOrange("apple fruits"));

// 3-masala
// function replaceFirstSmallAToBigA(arg) {
//   let res;
//   res = arg,replace("a", "A");

//   return res;
// }
// console.log(replaceFirstSmallAToBigA("salom"));

// 4-masala
// function replaceAllCatsWithDogs(arg) {
//   let res;
//   res = arg.replaceAll("cat", "dog")

//   return res;

// }
// console.log(replaceAllCatsWithDogs("cat   cat  cat  animal"));

// 5-masala
// function replaceAllSmallEToBigE(arg) {
//   let res;
//   res = arg.replaceAll("e", "E");

//   return res;
// }
// console.log(replaceAllSmallEToBigE("energetika"));

// 6-masala
// function splitBySpaces(arg) {
//   let res;
//   res = arg.split(" ");

//   return res;
// }

// console.log(splitBySpaces("hello uzbekistan"));

// 7-masala
// function splitByCommas(arg) {
//   let res;
//   res = arg.split(",")

//   return res;
// }
// console.log(splitByCommas("who , are , you"));

// 8-masala
// function splitByEachCharacter(arg) {
//   let res;
//   res = arg.split("");

//   return res;
// }
// console.log(splitByEachCharacter("good"));

// 9-masala
// function splitByDelimiter(arg) {
//   let res;
//   res = arg.split("-");

//   return res;
// }

// console.log(splitByDelimiter("how-old-are-you"));

// 10-masala
// function processString(arg) {
//   let res;
//   res = arg.replaceAll("a"," * ");
//   res = res.repeat(3);
//   res = res.split(" ")

//   return res;
// }
// console.log(processString("animal"));

// Massiv va stringlarni birlashtirib ishlatiladigan va funksiyalar yordamida yechiladigan 10 ta masala:
// 1-masala
// function processString(arg) {
//   let res;
//   res = arg.split(" ");
//   let arg1 = arg.toUpperCase();
//   let arr1 = arg1.split(" ");

//   let result = arr1.join(" ");
//   return result;
// }

// console.log(processString("hello uzbekistan wats up"));

// 2-masala
// function joinArrayWithLength(arg) {
//     let res;
//     res = arg.join("");
//     let L = res.length;

//     return L;
// };
// console.log(joinArrayWithLength(["very","good"]));

// 3-masala
// function cleanArrayToString(arg) {
//   let res;
//   res = arg.join(" ");
//   res = res.trim(" ");

//   return res;
// }
// console.log(cleanArrayToString(["salom", "bolalar"]));

// 4-masala
// function stringToUnicodeArray(arg) {
//   let res;
//   res = arg.split("");

//    let a = res.map(function (value) {
//     return value.charCodeAt(0);
//   });

//   return a;
// }

// console.log(stringToUnicodeArray("hello"));

// 5-masala
// function reverseArrayToString(arg) {
//   let res;
//   res = arg.reverse();
//   res = res.join(" ");

//   return res;
// }
// console.log(reverseArrayToString(["hello", "uzbekistan"]));

// 6-masala
// function padArrayElementsWithZeros(arg) {
//   let res;
//   let result;
//   res = arg.split(" ");

//   let a = res.map(function (value) {
//     return "0" + value;
//   });

//   let N = a.join(" ");

//   return N;
// }
// console.log(padArrayElementsWithZeros("how old are you"));

// 7-masala
// function lowercaseArrayToString(arg) {
//     let res;

//     res = arg.join(" ");
//     res = res.toUpperCase();
//     let arr = res.split(" ");

//     let result = arr.join("-");

//     return result;
// }
// console.log(lowercaseArrayToString(["salom", "bolalar"]));

// 8-masala
// function joinArrayElementsWithXYZ(arg) {
//     let res;
//     res = arg.split(",");
//     let result = res.map(function(value) {
//         return value + "XYZ"
//     })

//     return result;
// }
// console.log(joinArrayElementsWithXYZ("how,are,you"));

// 9-masala
// function sumArrayElementsLength(arg) {
//   let res;
//   let summ = 0;
//   res = arg.forEach(function (value) {
//     summ = summ + value.length;
//   });

//   let result = summ + ""

//   return result;
// }

// console.log(sumArrayElementsLength(["hello", "children"]));

// 10-masala
// function squareCharactersOfString(arg) {
//   let res;
//   res = arg.split("");
//   let a = Math.floor(Math.random() * 10);
//   let arr = res.forEach(function (value, index) {
//     res.splice(index, 1, `${a}`);
//   });

//   return arr;
// }
// console.log(squareCharactersOfString("hello"));
