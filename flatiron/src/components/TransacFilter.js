import React, { useState } from "react";

function TransacFilter({ onSearching }) {
  const [search, setSearch] = useState("");

  function handleDescriptionSearch(event) {
    const searchTerm = event.target.value;
    setSearch(searchTerm); // Update the local state
    onSearching(searchTerm); // Call the parent component's onSearching function
  }

  return (
    <div className="descriptions">
      <form>
        <input
          value={search}
          type="text"
          placeholder="Search recent transactions"
          onChange={handleDescriptionSearch}
        />
      </form>
    </div>
  );
}

export default TransacFilter;
