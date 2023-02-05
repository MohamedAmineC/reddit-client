import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectSearchTerm } from "../../features/searchBar/searchBarSlice";

const SearchPage = () => {
    const search = useSelector(selectSearchTerm)
    

    return(
        <div>
            your  Results for {search}
        </div>
    )
}
export default SearchPage;