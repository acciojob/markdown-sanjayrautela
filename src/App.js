import React from 'react';
import MarkdownEditor from './components/MarkDownEditor';
import MarkdownPreview from './components/MarkDownPreview';

const App = () => {
  return (
    <div className="app">
      <MarkdownEditor />
      <MarkdownPreview />
    </div>
  );
};

export default App;
