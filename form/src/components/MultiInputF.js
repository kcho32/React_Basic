import React, {useState} from 'react';

function MultiInputF(props) {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberofGuests] = useState(2);

  return (
    <div>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={isGoing}
              onChange={(e)=>setIsGoing(e.target.checked)} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={numberOfGuests}
              onChange={(e)=>setNumberofGuests(e.target.value)} />
          </label>
        </form>
      </div>
  );
}

export default MultiInputF;