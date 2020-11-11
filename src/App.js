import React, { useState } from 'react';
import data from './Data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section'>
      <h1>lorem ipsum Generator</h1>
      <form className='form' onSubmit={Submit}>
        <label htmlFor='amount'>Paragraphs : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>Generate</button>
      </form>
      <article className='text'>
        {text.map((item, index) => {
          return <><p key={index}>{item}</p></>;
        })}
      </article>
    </section>
  );
}

export default App;