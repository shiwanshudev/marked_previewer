import './App.css';
import Editor from './components/Editor.js';
import Preview from './components/Preview.js';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {
  const text = '# This is H1 heading\n\n## This is H2 Heading\n\n### This is H3 heading\n\n**bold text**\n\n*italicized text*\n\n> Some inspirational quotation.\n\n`console.log("Hello World!")`\n\n';
  const [editorInput, setEditorInput] = useState(text)
  const handleUpdate = (e)=>{
    setEditorInput(e.target.value);
  }
  return (
    <div className="App">
      <h1 className='teal-h1'>Marked Previewer</h1>
      <Editor onUpdate={handleUpdate} markdownText={editorInput}/>
      <Preview markdownText={editorInput}/>
      <Footer/>
    </div>
  );
}

export default App;
