import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { setSearchTerm } from './searchBarSlice';


const SearchBar = () => {
    const searchTerm = useRef('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(setSearchTerm(searchTerm.current.value));
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