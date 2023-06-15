import CryptoJS from 'crypto-js';

const Hash = () => {
    const input = document.getElementById('input').files[0];
    const text = document.getElementById('droppable-zone-text');
    const output = document.getElementById('output256');
    const CHUNK_SIZE = 2 * 1024 * 1024;
    const chunks = Math.ceil(input.size / CHUNK_SIZE);
    let currentChunk = 0;
    let hashBuffer = CryptoJS.lib.WordArray.create();
    text.innerText = 'Loading 0.00%';
    const processNextChunk = () => {
        const start = currentChunk * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, input.size);
        const blobSlice = input.slice(start, end);
        const fileReader = new FileReader();

        fileReader.onload = function (e) {
            let chunkArray = CryptoJS.lib.WordArray.create(e.target.result);
            hashBuffer.concat(chunkArray);
            currentChunk++;
            if (currentChunk < chunks) {
                const percentLoaded = (currentChunk / chunks) * 100;
                text.innerText = `Loading file... ${percentLoaded.toFixed(2)}%`;
                setTimeout(processNextChunk, 0);
            } else {
                const hash = CryptoJS.SHA256(hashBuffer);
                output.value = hash;
                text.innerText = input.name;
            }
        };
        fileReader.readAsArrayBuffer(blobSlice);
    };
    processNextChunk();
};
export default Hash;