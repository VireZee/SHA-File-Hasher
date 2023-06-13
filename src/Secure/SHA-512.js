import CryptoJS from 'crypto-js';

const Hash = () => {
    const input = document.getElementById("input").files[0];
    const output = document.getElementById("output512");
    const reader = new FileReader();
    reader.onload = function (e) {
        const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
        const hash = CryptoJS.SHA512(wordArray);
        output.value = hash;
    };
    reader.readAsArrayBuffer(input);
    return;
};
export default Hash;