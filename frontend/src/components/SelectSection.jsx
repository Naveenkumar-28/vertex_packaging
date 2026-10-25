import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function SelectSection({ sort, setSort }) {
    return (
        <Select value={sort} onValueChange={setSort}>
            <SelectTrigger
                data-testid="sort-select"
                className="w-[160px] bg-[#0a0f25]/60 border border-white/10 px-4 py-2 text-sm text-white focus:border-primary focus:ring-0 focus:outline-none"
            >
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent position="popper" className="bg-[#0a0f25] border-white/10 text-white">
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="az">A–Z</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectSection