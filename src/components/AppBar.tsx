import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between">
        <div>
            Youtube
        </div>
        <div>
        <SearchBar></SearchBar>
        </div>
        <div>
            Sign In
        </div>
    </div>
}