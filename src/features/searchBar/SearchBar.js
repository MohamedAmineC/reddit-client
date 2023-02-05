import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchPostsBySearchTerm } from '../posts/postsSlice';
import './SearchBar.css';
import { setSearchTerm } from './searchBarSlice';

const SearchBar = () => {
    const searchTerm = useRef('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(setSearchTerm(searchTerm.current.value));
    dispatch(fetchPostsBySearchTerm(searchTerm.current.value))
    const searchQuery = new URLSearchParams({
        q: searchTerm.current.value
      }).toString();
      searchTerm.current.value = '';
      navigate(`/search?${searchQuery}`);
      //history.push(`/search?${searchQuery}`);
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