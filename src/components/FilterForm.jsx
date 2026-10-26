function FilterForm({ value, onChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="title-filter">Filter by title: </label>
      <input
        id="title-filter"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a title..."
      />
    </form>
  );
}

export default FilterForm;