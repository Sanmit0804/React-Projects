import React, { useEffect, useState } from "react";
import "./SearchAutoComplete";

const SearchAutoComplete = () => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      // fetching data using fetch 
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log("this is users", users);
  console.log("this is Filtered users", filteredUsers);

  return (
    <div className="search-container container">
      <input
        type="text"
        value={searchParam}
        onChange={handleChange}
        placeholder="Search users here..."
      />
    </div>
  );
};

export default SearchAutoComplete;
