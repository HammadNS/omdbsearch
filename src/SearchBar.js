const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search movie names</span>
        </label>
        <input
            type="text"
      id="header-search"
         name="OMDB" 

            placeholder="Search MOVIES"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;