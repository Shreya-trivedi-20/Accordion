import React from 'react';
import './App.css';
import Accordion from './newcomponents/accordion'

const items = [
   {
      title: "Section 1",
      content: "This is the content of section 1"
   },
   {
      title: "Section 2",
      content: "This is the content of section 2"
   },
   {
      title: "Section 3",
      content: "This is the content of section 3"
   }
]

function App() {
   return (
      <div className="container">
         <Accordion items={items} />
      </div>
   );
}

export default App;
