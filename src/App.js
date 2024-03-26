import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

const App = () => {
  return (
    <div className="app">
      <MarkdownEditor />
      <MarkdownPreview />
    </div>
  );
};

export default App;
