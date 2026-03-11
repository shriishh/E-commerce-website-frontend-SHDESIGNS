import { products } from '../data/products';
import { Heart, Maximize2, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

export default function ProductGrid({ categoryFilter, colorFilter, onAction }) {
    const filteredProducts = products.filter(product => {
        const matchCategory = categoryFilter === 'All Categories' || product.category === categoryFilter;
        const matchColor = colorFilter === null || product.colors.includes(colorFilter);
        return matchCategory && matchColor;
    });

    const [activeActions, setActiveActions] = useState({});

    const handleAction = (product, actionType, message) => {
        setActiveActions(prev => ({ ...prev, [`${product.id}-${actionType}`]: true }));
        onAction(actionType, message, product);

        // Reset visual feedback after a second
        setTimeout(() => {
            setActiveActions(prev => ({ ...prev, [`${productId}-${actionType}`]: false }));
        }, 1000);
    };

    if (filteredProducts.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
                No products match your current filters.
            </div>
        );
    }

    return (
        <div className="product-grid">
            {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                    <div className="product-image-wrap">
                        {product.badge && <span className="product-badge">{product.badge}</span>}
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-actions">
                            <button
                                className="action-btn"
                                title="Add to Wishlist"
                                onClick={() => handleAction(product, 'wishlist', `Added ${product.name} to Wishlist`)}
                            >
                                {activeActions[`${product.id}-wishlist`] ? <Check size={20} color="#e5e5e5" /> : <Heart size={20} strokeWidth={1.5} />}
                            </button>
                            <button
                                className="action-btn"
                                title="Quick View"
                                onClick={() => handleAction(product, 'view', `Opening Quick View for ${product.name}...`)}
                            >
                                {activeActions[`${product.id}-view`] ? <Check size={20} color="#e5e5e5" /> : <Maximize2 size={20} strokeWidth={1.5} />}
                            </button>
                            <button
                                className="action-btn"
                                title="Add to Cart"
                                onClick={() => handleAction(product, 'cart', `Added ${product.name} to Cart for ₹${product.price.toFixed(2)}`)}
                            >
                                {activeActions[`${product.id}-cart`] ? <Check size={20} color="#e5e5e5" /> : <ShoppingCart size={20} strokeWidth={1.5} />}
                            </button>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-category">{product.category}</div>
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">₹{product.price.toFixed(2)}</div>
                        <div className="product-colors">
                            {product.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="color-circle"
                                    style={{ backgroundColor: color, border: color === '#ffffff' ? '1px solid #e5e5e5' : 'none' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
