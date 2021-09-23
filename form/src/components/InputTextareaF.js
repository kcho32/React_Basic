import React, {useState} from 'react';

function InputTextareaF(props) {
  const [value, setValue] = useState('Please write down an essay about yourself!');

  const handleChange = (e)=>{
    setValue(e.target.value)
  }

  const handleSubmit = (e)=>{
    alert("Your Essay: " + value)
    e.preventDefault();
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
            Essay:
          </label>
          <textarea value={value} onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default InputTextareaF;