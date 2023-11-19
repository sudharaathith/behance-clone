import { useState, useRef, useEffect, useCallback } from "react";
import Search from "@/SVG/Search";
import { words } from "@/utils/Autocommplet";

function SearchBar() {
    const [text, setText] = useState("");
    const [autocomplete, setAutocomplete] = useState([]);
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const debouncedSearch = useCallback(
        debounce((searchText) => {
            const reg = new RegExp(searchText, 'i');
            setAutocomplete(words.filter(term => term.match(reg)).slice(0, 5));
        }, 300), []
    );

    useEffect(() => {
        if (text !== "") {
            debouncedSearch(text);
        } else {
            setAutocomplete([]);
        }
    }, [text, debouncedSearch]);

    const handleFocus = () => {
        setOpen(true);
    };

    const handleBlur = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="flex w-full py-2 gap-2 border-r items-center relative rounded-l-full border"
        style={{borderRadius: open?"12px 0px 0px":""}}>
            <div className="flex items-center pl-4 w-full">
                <Search className="w-5 h-5 fill-gray-500" />
                <input
                    ref={inputRef}
                    className="w-full self-end font-semibold text-lg outline-none"
                    type="text"
                    placeholder="Search the creative world at work"
                    value={text}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {open && (
                <div className="flex flex-col pl-4 top-8 absolute w-full border border-t-0 rounded-t-none pt-2 bg-white rounded-2xl">
                    {autocomplete.map((result, index) => (
                        <div key={index}>{result}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
