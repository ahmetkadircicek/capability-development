var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let isAnagram = true;

    sArray = s.split('');
    tArray = t.split('');
    sArray.sort();
    tArray.sort();

    for (let index = 0; index < sArray.length; index++) {
        if (sArray[index] != tArray[index]) {
            isAnagram = false;
        }
    }

    return isAnagram;
};
