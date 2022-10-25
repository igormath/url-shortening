import { useEffect, useRef, useState } from 'react';

import ShortenOutputs from '../ShortenOutputs/ShortenOutputs';

import './LinksSection.css'

const LinksSection = () => {

    const [linksOutputs, setLinksOutputs] = useState(() => {
        return JSON.parse(localStorage.getItem('shortenedLinks')) || []
    });

    useEffect(() => {
        localStorage.setItem('shortenedLinks', JSON.stringify(linksOutputs));

    }, [linksOutputs]);

    const inputRef = useRef();
    const adviceRef = useRef();

    const handleInput = () => {
        if (inputRef.current.value === "") {
            inputRef.current.style.border = "2px solid #CF6F6F";
            adviceRef.current.style.display = "block";
        } else {
            inputRef.current.style.borderColor = "var(--dark-violet)";
            adviceRef.current.style.display = "none";
            fetch(`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`)
                .then(res => res.json())
                .then(data => {
                    setLinksOutputs([...linksOutputs, { originalLink: data.result.original_link, fullShortLink: data.result.full_short_link }]);
                })
                .catch("There is an error!");
        }
    }

    return (
        <section className='links__section'>
            <div className='input__container'>
                <div className='input__container-flex'>
                    <input type="text" name="" id="" placeholder='Shorten a link here...' className='input__link' ref={inputRef} />
                    <p className='input__advice' ref={adviceRef}>Please add a link</p>
                </div>
                <button className='input__btn btn' onClick={handleInput}>Shorten it!</button>
            </div>
            {(linksOutputs.length > 0) && <ShortenOutputs shortenLinks={linksOutputs} />}
        </section>
    );
};

export default LinksSection;