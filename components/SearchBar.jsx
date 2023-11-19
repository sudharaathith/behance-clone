import Search from "@/SVG/Search"
import { words } from "@/utils/Autocommplet";
import { useEffect, useRef, useState } from "react"

function SearchBar() {
    const [text, setText] = useState("");
    const [autocomplet, setAutocomplet] = useState([]);
    const [open, setOpen] = useState(false);
    const ref = useRef(0);
    useEffect(() => {
        var reg = new RegExp(text)
        setAutocomplet(words.filter(function (term) {
            if (term.match(reg)) {
                return term;
            }
        }).slice(0, 5))
    }, [text])
    return (
        <div className={` flex w-full py-2 gap-2 border-r items-center relative rounded-l-full border`}>
            <div className="flex items-center pl-4 w-full">

                <Search className="w-5 h-5 fill-gray-500" />
                <input
                    className="w-full self-end font-semibold text-lg outline-none"
                    type="text"
                    placeholder="Search the creative world at work"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    onFocus={(e) => {
                        setOpen(true);
                        const c = document.querySelector("summa");
                        console.log(c)
                    }}

                />
            </div>
            {
                open && <div  className="flex flex-col pl-4 top-0 absolute w-full border rounded-tr-none pt-2 bg-white rounded-2xl">
                    <div className="flex items-center">

                        <Search className="w-5 h-5 fill-gray-500" />
                        <input
                            id="summa"
                            className="w-full self-end font-semibold text-lg summa outline-none"
                            type="text"
                            placeholder="Search the creative world at work"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                            onFocus={(e) => {
                                setOpen(true);
                            }}
                            onBlur={() => {
                                setOpen(false);
                            }}
                        />
                    </div>
                    <div>
                        hi
                    </div>
                </div>
            }

        </div>
    )
}

export default SearchBar