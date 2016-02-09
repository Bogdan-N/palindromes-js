
This solution provides the ability to search, sort and display all
odd and even palindromes in the text. The longest palindromes will be marked bold.

This application looks for palindromes in the words, terms and numbers.

E.g. if you input the phrase "mom mom" firstly full phrase will be displayed
and then other palindromes that are present in this phrase:

mom mom
om mo
m m
mom
mom

How to use
It's easy to include this solution in your project.
For this you must call showPalindromes method. It takes two parameters:
first - container class name where you want to show result,
second - class of the input element from which to take input value.

You should include the file with styles in your project for display the longest palindrome in bold.

Test description.
For testing was used the QUnit library-1.21.0
For testing was chosen searchPalindromes methods.
Function accepts string as parameter. This function was checked on different types of inputting string like empty string or string with whitespace (before and after string). 

Results of testing you can see in 'test' folder => testResult.html