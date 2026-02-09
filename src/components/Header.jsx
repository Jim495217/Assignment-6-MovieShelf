import { useState } from "react";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </header>
  );
}

export default Header;
