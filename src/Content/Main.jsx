import React from 'react';
import SHA256 from '../Secure/SHA-256';
import SHA384 from '../Secure/SHA-384';
import SHA512 from '../Secure/SHA-512';

function Main() {
    const Hash = (e) => {
        SHA256(e);
        SHA384(e);
        SHA512(e);
      };
    const Clear = () => {
        document.getElementById("input").value = "";
        document.getElementById("droppable-zone-text").innerText = "Drag & drop your file here OR click to browse";
        document.getElementById("output256").value = "";
        document.getElementById("output384").value = "";
        document.getElementById("output512").value = "";
        return;
    };
    return (
        <div>
            <header>
                <h1 id="head1">Secure Hash Algorithm (SHA) File Hasher</h1>
            </header>
            <div className="input">
                <div id="droppable-zone">
                    <div id="droppable-zone-wrapper">
                        <div id="droppable-zone-text">Drag & drop your file here OR click to browse</div>
                    </div>
                    <input className="droppable-file" id="input" type="file" onChange={Hash} />
                </div>
            </div>
            <div className="output">
                <textarea id="output256" placeholder="SHA-256 Checksum" readOnly disabled></textarea>
            </div>
            <div className="output">
                <textarea id="output384" placeholder="SHA-384 Checksum" readOnly disabled></textarea>
            </div>
            <div className="output">
                <textarea id="output512" placeholder="SHA-512 Checksum" readOnly disabled></textarea>
            </div>
            <div className="remove">
                <button id="remove" onClick={Clear}>Clear</button>
            </div>
        </div>
    );
}
export default Main;