import { useEffect, useRef } from "react";

function AutoFocusForm() {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <form>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button>Send</button>
    </form>
  );
}

export default AutoFocusForm;
