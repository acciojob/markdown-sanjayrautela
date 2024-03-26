import React, { useState, useEffect } from 'react';

const MarkdownPreview = ({ markdownText }) => {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview" dangerouslySetInnerHTML={{ __html: markdownText }} />
    </div>
  );
};

export default MarkdownPreview;
