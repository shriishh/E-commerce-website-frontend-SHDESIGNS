import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <span className="footer-logo">SHDESIGNS</span>
                        <p className="footer-desc">
                            Focusing on premium materials and minimal aesthetic. Creating the perfect everyday essentials for the modern wardrobe.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="Youtube"><Youtube size={20} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Company</h3>
                        <div className="footer-links">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Store Locator</a>
                            <a href="#">Sustainability</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Customer Care</h3>
                        <div className="footer-links">
                            <a href="#">Size Guide</a>
                            <a href="#">FAQ & Help</a>
                            <a href="#">Returns & Exchanges</a>
                            <a href="#">Shipping Info</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Newsletter</h3>
                        <p style={{ color: '#a3a3a3', marginBottom: '16px', fontSize: '14px' }}>
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                className="subscribe-input"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 SHDESIGNS. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
