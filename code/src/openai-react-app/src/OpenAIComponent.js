import React, { useState } from 'react';
import axios from 'axios';

const OpenAIComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: input,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OpenAIComponent;