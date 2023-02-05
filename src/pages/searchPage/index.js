import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
    const {search} = useLocation();
    const queryParams = useMemo(()=> {
        return new URLSearchParams(search)
    },[search]);
    useEffect(()=> {

    })

    return(
        <div>
            your search Results
        </div>
    )
}
export default SearchPage;