import CryptoJS from 'crypto-js';

function SHA512() {
    const Hash = () => {
        const input = document.getElementById("input").files[0];
        const text = document.getElementById("droppable-zone-text");
        const output = document.getElementById("output");
        const validExtension = ["image/jpeg", "image/png", "application/pdf"];
        const validSignature = [
            { type: "image/jpeg", signature: [0xFF, 0xD8, 0xFF] },
            { type: "image/png", signature: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A] },
            { type: "application/pdf", signature: [0x25, 0x50, 0x44, 0x46] }
        ];
        const maxSize = 4 * 1024 * 1024;

        if (input.size > maxSize) {
            alert("The selected certificate exceeds the maximum file size of 4 MB.");
            clearInput();
            return;
        } else if (!validExtension.includes(input.type)) {
            alert("Invalid certificate format. Please select a JPEG, PNG, or PDF extension.");
            clearInput();
            return;
        } else {
            const reader = new FileReader();
            reader.onload = function (e) {
                const fileSignature = new Uint8Array(e.target.result).slice(0, 8);
                const validType = validSignature.find((item) => {
                    for (let i = 0; i < item.signature.length; i++) {
                        if (item.signature[i] !== fileSignature[i]) {
                            return false;
                        }
                    }
                    return true;
                });
                if (!validType) {
                    alert("Invalid certificate format. Please select a JPEG, PNG, or PDF file.");
                    clearInput();
                    return;
                } else {
                    const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
                    const hash = CryptoJS.SHA512(wordArray);
                    output.value = hash;
                    text.innerText = input.name;
                }
            };
            reader.readAsArrayBuffer(input);
        }
    };
}
export default SHA512;