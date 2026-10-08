import React from 'react';

function GoogleDocEmbedment({ type, docId, width = '100%', height = '600px' }) {
    let src = '';
    if (type == 'doc') {
        src = `https://docs.google.com/document/d/e/${docId}/pub?embedded=true`;
    } else if (type == 'form') {
        src = `https://docs.google.com/forms/d/e/${docId}/viewform?embedded=true`;
    } else {
        console.error("Invalid type provided. Please use 'doc' or 'form'.");
        return null;
    }
    return(
        <div className="google-doc-embedment">
            <iframe
                src={src}
                width={width}
                height={height}
                frameBorder="0"
                title="Embedded Google Doc"
            />
        </div>
    );
}

export default GoogleDocEmbedment;