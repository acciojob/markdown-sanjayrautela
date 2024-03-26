import React, { useState, useEffect } from 'react';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <textarea className="textarea">
      <h2>Write Markdown</h2>
      <textarea className="textarea" value={markdownText} onChange={handleChange} />
    </textarea>
  );
};

export default MarkdownEditor;
