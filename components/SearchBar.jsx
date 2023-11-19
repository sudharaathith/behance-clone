import Search from "@/SVG/Search"
import { useState } from "react"

function SearchBar() {
    const [text, setText] = useState("");
  return (
    <div className="flex w-full items-center py-2 gap-2 border-r">
          <Search className="w-5 h-5 fill-gray-500" />
          <input
            className="w-full self-end font-semibold text-lg outline-none"
            type="text"
            placeholder="Search the creative world at work"
          />
        </div>
  )
}

export default SearchBar