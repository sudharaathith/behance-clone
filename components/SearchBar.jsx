import { useState, useRef, useEffect, useCallback } from "react";
import Search from "@/SVG/Search";
import { words } from "@/utils/Autocommplet";

function SearchBar() {
    const [text, setText] = useState("");
    const [autocomplete, setAutocomplete] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
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
            const regStartsWith = new RegExp(`^${searchText}`, 'i');
            const regContains = new RegExp(searchText, 'i');
    
            const startsWith = words.filter(term => term.match(regStartsWith));
            const contains = words.filter(term => term.match(regContains) && !startsWith.includes(term));
    
            let sortedAutocomplete = [...startsWith, ...contains].slice(0, 5);
            sortedAutocomplete = sortedAutocomplete.map((e)=>(e.charAt(0).toUpperCase() + e.slice(1)
        ))
            setAutocomplete(sortedAutocomplete);
        }, 300), [words]
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
        setTimeout(()=>{setOpen(false)},100)
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
        setSelectedOptionIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selectedOptionIndex < autocomplete.length - 1) {
                setSelectedOptionIndex(prevIndex => prevIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selectedOptionIndex > 0) {
                setSelectedOptionIndex(prevIndex => prevIndex - 1);
            }
        } else if (e.key === 'Enter' && selectedOptionIndex > -1) {
            setText(autocomplete[selectedOptionIndex]);
            setSelectedOptionIndex(-1);
        }
    };

    return (
        <div className="flex w-full py-2 gap-2 border-r pr-1 max-sm:rounded-r-full items-center relative rounded-l-full border"
             style={{borderRadius: open ? "12px 12px 0px" : ""}}>
            <div className="flex gap-2 items-center pl-4 w-full">
                <Search className="w-5 h-5 fill-gray-500"/>
                <input
                    ref={inputRef}
                    className="w-full self-end font-semibold text-lg outline-none"
                    type="text"
                    placeholder="Search the creative world at work"
                    value={text}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {open && (
                <div className="flex flex-col top-8 absolute w-full z-[2] border border-t-0 rounded-t-none pt-2 bg-white rounded-2xl">
                    <div className=" text-gray-500 px-4 text-sm font-semibold">Projects</div>
                    <div className="flex flex-col min-h-[100px]">

                    {autocomplete.map((result, index) => (
                        <div
                        key={index}
                        className={` cursor-pointer text-lg px-4 select-none text-gray-800 font-semibold ${selectedOptionIndex === index ? 'bg-gray-200' : ''}`}
                        onClick={() => {
                            setText(result);
                            setSelectedOptionIndex(-1);
                            console.log("Clicked on an option:", result);
                        }}
                        onMouseEnter={() => setSelectedOptionIndex(index)}
                    >
                        {result}
                    </div>
                    
                    ))}
                    <div>

                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
