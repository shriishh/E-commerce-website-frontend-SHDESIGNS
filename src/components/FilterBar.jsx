import { LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

const COLORS = [
    '#000000', '#ffffff', '#e5e5e5', '#a3a3a3',
    '#d2b48c', '#556b2f', '#4a4a4a', '#8b0000'
];

export default function FilterBar({ activeCategory, setCategory, activeColor, setColor }) {

    return (
        <div className="filter-bar">
            <div className="filter-group">
                <select
                    className="sort-select"
                    value={activeCategory}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>All Categories</option>
                    <option>Hoodies</option>
                    <option>T-Shirts</option>
                </select>

                <div className="filter-item">
                    <span className="filter-label" tabIndex="0">
                        Color
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <div className="color-dropdown">
                        {COLORS.map((c) => (
                            <div
                                key={c}
                                className={`color-circle ${activeColor === c ? 'active' : ''}`}
                                style={{ backgroundColor: c }}
                                onClick={() => setColor(activeColor === c ? null : c)}
                                title={c}
                            />
                        ))}
                    </div>
                </div>

                <select className="sort-select border-none">
                    <option>Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <select className="sort-select border-none">
                    <option>Price</option>
                    <option>₹0 - ₹1000</option>
                    <option>₹1000 - ₹2000</option>
                    <option>₹2000+</option>
                </select>
            </div>

            <div className="filter-group">
                <select className="sort-select" style={{ minWidth: '150px' }}>
                    <option>Default Sorting</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                </select>

                <div className="view-style">
                    <button className="view-btn active" aria-label="Grid View">
                        <LayoutGrid size={20} strokeWidth={1.5} />
                    </button>
                    <button className="view-btn" aria-label="List View">
                        <List size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}
