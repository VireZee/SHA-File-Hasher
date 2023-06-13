import SHA3 from 'js-sha3';

const Hash = () => {
    const input = document.getElementById("input").files[0];
    const output = document.getElementById("output3-256");
    const reader = new FileReader();
    reader.onload = function (e) {
        const wordArray = Array.from(new Uint8Array(e.target.result));
        const hash = SHA3.sha3_256(wordArray);
        output.value = hash;
    };
    reader.readAsArrayBuffer(input);
    return;
};
export default Hash;