
QUnit.test( "searchPalindromes", function() {
	QUnit.deepEqual(PalindromeTools.searchPalindromes('   aba  '), ['aba'], "Returns rigth palindrome");
	QUnit.notOk(PalindromeTools.searchPalindromes('').length !== 0, 'On empty input value method returns empty array');
	QUnit.ok(PalindromeTools.searchPalindromes('vdhd  ')[0].length % 2 !== 0, 'Method returns right odd palindrome');
	QUnit.ok(PalindromeTools.searchPalindromes('  aa')[0].length % 2 === 0, 'Method returns right even palindrome');
	QUnit.ok(PalindromeTools.searchPalindromes('a').length === 0, 'Method returns an empty array on single symbol');
	QUnit.ok(PalindromeTools.searchPalindromes('qwe rty').length === 0, 'Method returns an empty array if string does not contain a palindrome');

})