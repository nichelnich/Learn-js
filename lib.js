 function dataToBool (data) {
    if (data == null) return false;
    if ((data + '') === "") return false;
    if ((data + '') === '0') return false;
    if ((data + '').toLowerCase() === 'false') return false;
    if ((data + '').toLowerCase() === 'disable') return false;
    return true;
};

function isDataEmpty (data) {
    if (data == null) return true;
    if (data === "") return true;
    return false;
};

// test string format
// const str = 'hello world!';
// const result = /^hello/.test(str); //if(str == null), no excepion
// console.log(result); // true
