import { useState } from 'react';
import './styles.css'

const Header = ({ onQueryChange }) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        onQueryChange(text)
    }
    return (
        <header className="header | d-flex justify-content-between align-items-center">
            <h1>Weather App</h1>
            <form className="form d-flex gap-3">
                <input 
                    className="form-control"
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    name='query'
                    value={text}
                    onChange={handleChange}
                />
                <button 
                    className="btn | primary-background"
                    onClick={handleClick}
                >
                        Search
                </button>
            </form>
        </header>
    )
}

export default Header;