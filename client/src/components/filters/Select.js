function Select({ type, options, handleSelect }) {
  const createOptions = () => {
    return options.map((element) => {
      return (
        <option key={element} value={element}>
          {element}
        </option>
      );
    });
  };

  return (
    <>
      {" "}
      <select
        id={type}
        onChange={(e) => handleSelect(e.target.value, type)}
        className="stn"
      >
        <option defaultValue>{type}</option>
        <option value={null}></option>
        {createOptions()}
      </select>
    </>
  );
}
export default Select;
