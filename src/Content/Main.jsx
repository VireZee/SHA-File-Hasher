import React from 'react';
import Load from './Load'
import Hash from './Hash';
import Clear from './Clear';

function Main() {
    return (
        <div>
            <header>
                <h1 id="head">Secure Hash Algorithm (SHA) File Hasher</h1>
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
                <div className="left-output">
                    <textarea id="output256" placeholder="SHA-256 Checksum" readOnly disabled></textarea>
                    <textarea id="output384" placeholder="SHA-384 Checksum" readOnly disabled></textarea>
                    <textarea id="output512" placeholder="SHA-512 Checksum" readOnly disabled></textarea>
                </div>
                <div className="right-output">
                    <textarea id="output3-256" placeholder="SHA3-256 Checksum" readOnly disabled></textarea>
                    <textarea id="output3-384" placeholder="SHA3-384 Checksum" readOnly disabled></textarea>
                    <textarea id="output3-512" placeholder="SHA3-512 Checksum" readOnly disabled></textarea>
                </div>
            </div>
            <div className="remove">
                <button id="remove" onClick={Clear}>Clear</button>
            </div>
        </div>
    );
}
export default Main;