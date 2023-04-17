import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      placeholder="Type you search"
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  );
};
