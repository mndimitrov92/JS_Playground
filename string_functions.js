"use strict";

// Function reversing a string
var test_string = "Hello";

function reverseString(stringInput) {
  let temp_rr = stringInput.split('');
  temp_rr.reverse();
  console.log(temp_rr.join(''));
}

//reverseString(test_string);

// Function checking if the brackets are put correctly
var expression1 = "(x+y/2)";
var expression2 = ")x+(y/2)";

function bracketCheck(input) {
  let temp_rr = input.split('');
  let brackets = 0;
  
  for (let i in temp_rr) {
    if (temp_rr[i] === "(") {
      brackets += 1;
    }
    else if (temp_rr[i] === ')') {
      brackets -= 1;
    }

    if (brackets < 0) {
      return "Incorrect";
    }
  }
  if (brackets > 0) return "Incorrect";

  return "Correct";
}

// console.log(bracketCheck(expression1));
// console.log(bracketCheck(expression2));


// Function finding occurances of s string in a text
let text = "Hello , Hello , Hello , Hello ,Hello";
let str = "He";

function subStringFinder(str, text) {
  var re = new RegExp(str, "gim");
  let count = (text.match(re) || []).length;
  return count;

}

//console.log(subStringFinder(str,text));

// Function switching to upper/lower case based on the tag  
var testText = [ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ];

function parseTag(inputText) {
  var input = inputText.join();
  var upCase = /<upcase>.*?<\/upcase>/gmi;
  var lowCase = /<lowcase>.*?<\/lowcase>/gmi;
  var upcaseTag = /<\/?upcase>/gmi;
  var lowcaseTag = /<\/?lowcase>/gmi;
  var orgcaseTag = /<\/?orgcase>/gmi;
  var output = input.replace(upCase, input.match(upCase)[0].toUpperCase())
                    .replace(lowCase, input.match(lowCase)[0].toLowerCase())
                    .replace(upcaseTag, '')
                    .replace(lowcaseTag, '')
                    .replace(orgcaseTag, '');
  return output;

}
//console.log(parseTag(testText));

// Function replacing whitespace characters with their escaped version
var testInput1 = [ 'hello world' ];
var testInput2 = [ 'This text contains 4 spaces!!' ];
function whiteSpaceReplace(input) {
  var text = input.join().replace(/ /g,'&nbsp;');
  return text;
}

//console.log(whiteSpaceReplace(testInput1));
//console.log(whiteSpaceReplace(testInput2));


//Function extracting the content of an html page as text
var html_test_text = [
                      '<html>',
                      '  <head>',
                      '    <title>Sample site</title>',
                      '  </head>',
                      '  <body>',
                      '    <div>text',
                      '      <div>more text</div>',
                      '      and more...',
                      '    </div>',
                      '    in body',
                      '  </body>',
                      '</html>'
                    ]; 
function extractor(html_text) {
  var tagCapturer = /<[a-zA-Z0-9]{1,}>|<\/.+>/gmi;
  var output = html_text.map(e => e.replace(tagCapturer,"").trim()).join().replace(/,/g,'');
  return output;
}

//console.log(extractor(html_test_text));



// Function parsing an url and extracting the protocol  server and resource elements
var test_url = ['http://hello_world.com/resource1/resource2/2433'];
function url_parser(url){
  let url_parse = url.join();
  let url_arr = url_parse.split('/').filter(Boolean);

  let protocol = url_arr[0].replace(":","");
  let server = url_arr[1];
  let resources = "/" + url_arr.filter(element => url_arr.indexOf(element) > 1).join("/");
  
  return `URL protocol: ${protocol}\nURL server: ${server}\nURL resources: ${resources}`;
}
//console.log(url_parser(test_url));
