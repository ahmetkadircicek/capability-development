var isPalindrome = function(s) {
    let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
};