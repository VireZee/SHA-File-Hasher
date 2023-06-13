import React from 'react';

const Load = () => {
    const [loadingText, setLoadingText] = React.useState('Drag & drop your file here OR click to browse');
    const [loadingProgress, setLoadingProgress] = React.useState(0);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setLoadingText(`Loading... 0%`);
        const reader = new FileReader();
        reader.onprogress = (progressEvent) => {
            if (progressEvent.lengthComputable) {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setLoadingText(`Loading... ${progress}%`);
                setLoadingProgress(progress);
            }
        };
        reader.onloadend = () => {
            setLoadingText(file.name);
        };

        reader.readAsArrayBuffer(file);
    };
};
export default Load;