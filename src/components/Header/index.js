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
        <header className="header | d-flex justify-content-center align-items-center">
            <form className="form | d-flex gap-3">
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
                    className="background-primary | d-flex justify-content-center align-items-center py-1 px-2 rounded"
                    onClick={handleClick}
                >
                        Search
                </button>
            </form>
        </header>
    )
}

export default Header;