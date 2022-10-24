import { useRef } from 'react';

import './ShortenOutputs.css'

const ShortenOutputs = ({ shortenLinks }) => {

    const outputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(outputRef.current.textContent);
        buttonRef.current.textContent = "Copied!";
        buttonRef.current.className = "shorten__btn btn shorten__btn-copied";
    }

    return (
        shortenLinks.map((link, index) => {
            return (
                <div key={String(index)} className="shorten__container">
                    <p className='shorten__in'>{link.originalLink}</p>
                    <hr className="separator"></hr>
                    <p className='shorten__out' ref={outputRef}>{link.fullShortLink}</p>
                    <button className='shorten__btn btn' onClick={handleCopy} ref={buttonRef}>Copy</button>
                </div>
            )
        })
    );
};

export default ShortenOutputs;
