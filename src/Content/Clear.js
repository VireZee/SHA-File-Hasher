const Clear = () => {
    document.getElementById("input").value = "";
    document.getElementById("droppable-zone-text").innerText = "Drag & drop your file here OR click to browse";
    document.getElementById("output256").value = "";
    document.getElementById("output384").value = "";
    document.getElementById("output512").value = "";
    return;
};
export default Clear;