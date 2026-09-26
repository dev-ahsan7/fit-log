import { ChevronDown } from 'lucide-react';
import React from 'react';

export type SortOption = 'duration' | 'calories' | 'rating' | 'name';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'duration', label: 'Duration' },
  { value: 'calories', label: 'Calories' },
  { value: 'rating', label: 'Rating' },
  { value: 'name', label: 'Name' },
];

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Sort By</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="appearance-none rounded-lg border border-[#232834] bg-[#0d0f14] py-2 pl-4 pr-9 text-sm font-medium text-white outline-none cursor-pointer"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
      </div>
    </div>
  );
};

export default SortDropdown;
