import CryptoJS from 'crypto-js';

const Hash = () => {
    const input = document.getElementById("input").files[0];
    const text = document.getElementById("droppable-zone-text");
    const output = document.getElementById("output256");
    const reader = new FileReader();
    reader.onload = function (e) {
        const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
        const hash = CryptoJS.SHA256(wordArray);
        output.value = hash;
        text.innerText = input.name;
    };
    reader.readAsArrayBuffer(input);

};
export default Hash;