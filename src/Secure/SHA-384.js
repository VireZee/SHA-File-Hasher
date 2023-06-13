import CryptoJS from 'crypto-js';

const Hash = () => {
    const input = document.getElementById("input").files[0];
    const output = document.getElementById("output384");
    const reader = new FileReader();
    reader.onload = function (e) {
        const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
        const hash = CryptoJS.SHA384(wordArray);
        output.value = hash;
    };
    reader.readAsArrayBuffer(input);

};
export default Hash;