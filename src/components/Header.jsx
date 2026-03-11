import { Search, User, Heart, ShoppingBag } from 'lucide-react';

export default function Header({ cartCount = 0, onCartClick }) {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    SHDESIGNS
                </div>

                <nav>
                    <ul className="nav-links">
                        <li><a href="#" className="active">NEW</a></li>
                        <li className="nav-item-dropdown">
                            <a href="#">SHOP ALL</a>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="mega-menu-column">
                                        <h4>FEATURED</h4>
                                        <a href="#">Best Sellers</a>
                                        <a href="#">This Just In</a>
                                        <a href="#">Recently Restocked</a>
                                        <a href="#">Viral Products</a>
                                        <a href="#">Festival Dress</a>
                                        <a href="#">Cozy Edit</a>
                                        <a href="#">Cassey's Faves</a>
                                        <a href="#">Swim</a>
                                    </div>
                                    <div className="mega-menu-column">
                                        <h4>COLOR DROPS</h4>
                                        <a href="#">Pine 🌲</a>
                                        <a href="#">Nordic Blue 🫐</a>
                                        <a href="#">Meadow 🍂</a>
                                        <a href="#">Royal Orchid 🧶</a>
                                        <a href="#">Pistachio 🍏</a>
                                        <a href="#">Digital Lavender 🪻</a>
                                        <a href="#">Crimson 🍒</a>
                                        <a href="#">Bubblegum 🎀</a>
                                        <a href="#">Black 🖤</a>
                                        <a href="#">Blue Storm 💧</a>
                                        <a href="#">Buttercream 🧈</a>
                                        <a href="#">Bridal 💍</a>
                                    </div>
                                    <div className="mega-menu-column">
                                        <h4>SALE</h4>
                                        <a href="#">Last Chance</a>
                                        <a href="#">Under ₹1000</a>
                                        <a href="#">Under ₹2500</a>
                                        <a href="#">Gift Cards</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">COMFY</a></li>
                        <li><a href="#">STYLE QUIZ</a></li>
                    </ul>
                </nav>

                <div className="header-icons">
                    <button aria-label="Search"><Search size={22} strokeWidth={1.5} /></button>
                    <button aria-label="Account"><User size={22} strokeWidth={1.5} /></button>
                    <button aria-label="Wishlist"><Heart size={22} strokeWidth={1.5} /></button>
                    <button aria-label="Cart" onClick={onCartClick}>
                        <div style={{ position: 'relative' }}>
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: -5, right: -8,
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    fontSize: 10,
                                    width: 16, height: 16,
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>{cartCount}</span>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
