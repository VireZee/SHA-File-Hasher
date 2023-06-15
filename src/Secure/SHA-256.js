import CryptoJS from 'crypto-js';

const Hash = () => {
  const input = document.getElementById('input').files[0];
  const text = document.getElementById('droppable-zone-text');
  const output = document.getElementById('output256');
  const chunkSize = 1024 * 1024;
  const chunks = Math.ceil(input.size / chunkSize);
  let currentChunk = 0;
  let hashBuffer = CryptoJS.lib.WordArray.create();

  text.innerText = 'Loading 0.00%';

  const processNextChunk = async () => {
    const start = currentChunk * chunkSize;
    const end = Math.min(start + chunkSize, input.size);
    const blobSlice = input.slice(start, end);

    await new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        const chunkArray = CryptoJS.lib.WordArray.create(e.target.result);
        hashBuffer.concat(chunkArray);

        currentChunk++;

        if (currentChunk < chunks) {
          const percentLoaded = (currentChunk / chunks) * 100;
          text.innerText = `Hashing... ${percentLoaded.toFixed(2)}%`;
          setTimeout(processNextChunk, 0);
        } else {
          const hash = CryptoJS.SHA256(hashBuffer);
          output.value = hash;
          text.innerText = input.name;
        }

        resolve();
      };

      fileReader.onerror = function () {
        reject(new Error('Error reading file.'));
      };

      fileReader.readAsArrayBuffer(blobSlice);
    });
  };

  processNextChunk().catch((error) => {
    console.error(error);
    text.innerText = 'Error processing file.';
  });
};

export default Hash;
