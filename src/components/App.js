import React from 'react';
import MarkdownEditor from './MarkDownEditor';
import MarkdownPreview from './MarkDownPreview';

const App = () => {
  return (
    <main className="app">
      <MarkdownEditor />
      <MarkdownPreview />
    </main>
  );
};

export default App;
