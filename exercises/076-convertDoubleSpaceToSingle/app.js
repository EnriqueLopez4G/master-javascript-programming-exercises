function convertDoubleSpaceToSingle(str) {
    // your code here
    console.log(str);
    str = str.replaceAll("  ",' ');
    console.log(str);
    return str;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
