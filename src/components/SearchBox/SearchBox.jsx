import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectNameFilter } from "../../redux/selectors.js";
function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor="searchBar" className={css.searchBoxLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.searchBoxInput}
        id="searchBar"
        placeholder="Search...."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
