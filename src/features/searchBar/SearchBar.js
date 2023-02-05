import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { setSearchTerm } from './searchBarSlice';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const searchTerm = useRef('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(setSearchTerm(searchTerm.current.value));
    const searchQuery = new URLSearchParams({
        q: searchTerm.current.value
      }).toString();
      history.push(`/search?${searchQuery}`);
    searchTerm.current.value = '';
    }
    return (
        <form className="searchBar" onSubmit={handleSubmit}>
                <button type="submit">
                    <i class="bi bi-search"></i>
                </button>
                <input type="search" ref={searchTerm} placeholder="Search Reddit" />
        </form>
    )
}
export default SearchBar;