// Create the required functions here
/**
 * Returns an array of phone numbers in xxx xxx xxxx format
 * @param {string} input - A string of text with phone numbers
 * @returns {Array} An array of phoneNumbers
 */
function matchPhoneNumbers(input) {}

/**
 * Replaces a valid url with "URL_REPLACED"
 * @param {string} input - A string of text with URLs
 * @returns {string}
 */
function replaceURLs(input) {}

/**
 * Returns a count of number of words available in the give string
 * @param {string} input - A string of text
 * @returns {number}
 */
function countWords(input) {}

/**
 * Returns the original string with a single space between words
 * @param {string} input - A string of text with extra spaces
 * @returns {string} cleaned string without any extra spaces
 *
 */
function removeExtraSpaces(input) {}

// Sample Test Cases
console.log(
	matchPhoneNumbers(
		"My old phone number was 123 456 7890 but now you can reach me at 987 654 3210."
	)
);
console.log(
	matchPhoneNumbers("The store number is 555 321 9876, please call us.")
);

console.log(
	replaceURLs(
		"Find more info at https://example.com or contact us at http://help.example.com"
	)
);
console.log(
	replaceURLs(
		"The website http://mysite.com has been moved to https://newsite.com"
	)
);

console.log(countWords("This string has five words."));
console.log(countWords("Counting words is easy!"));

console.log(removeExtraSpaces("This   string    has   extra spaces."));
console.log(
	removeExtraSpaces(
		"     Too many    spaces    at the beginning and end.     "
	)
);
