import React from 'react';
import SHA512 from '../Secure/SHA-512';

function Main() {
    return (
        <div>
            <header>
                <h1 id="head1">File Hasher</h1>
            </header>
            <div className="input">
                <div id="droppable-zone">
                    <div id="droppable-zone-wrapper">
                        <div id="droppable-zone-text">Drag & drop your certificate here OR click to browse</div>
                    </div>
                    <input className="droppable-file" id="input" type="file" onChange={SHA512.Hash} />
                </div>
            </div>
            <div className="output">
                <textarea id="output" placeholder="SHA-512 Checksum" readOnly></textarea>
            </div>
            <div className="remove">
                <button id="remove" onClick={clearInput}>Remove</button>
            </div>
        </div>
    );
}
export default Main;