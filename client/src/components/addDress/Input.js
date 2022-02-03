function Input({ type, handleChange, value }) {
  return (
    <input
      className="input"
      type="text"
      onChange={handleChange}
      name={type}
      placeholder={type}
      value={value}
      id={type}
      className="itn"
    />
  );
}
export default Input;
