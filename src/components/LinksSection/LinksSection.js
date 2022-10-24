import { useRef, useState } from 'react';

import ShortenOutputs from '../ShortenOutputs/ShortenOutputs';

import './LinksSection.css'

const LinksSection = () => {

    const [linksOutputs, setLinksOutputs] = useState([]);

    const inputRef = useRef();

    const handleInput = () => {
        if (inputRef.current.value === "") {
            inputRef.current.style.border = "2px solid #CF6F6F";
        } else {
            console.log(inputRef.current.value);
            inputRef.current.style.borderColor = "var(--dark-violet)";
            fetch(`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`)
                .then(res => res.json())
                .then(data => {
                    setLinksOutputs([...linksOutputs, { originalLink: data.result.original_link, fullShortLink: data.result.full_short_link }]);
                })
                .catch("There is an error!");
        }
    }
    console.log(linksOutputs);
    return (
        <section className='links__section'>
            <div className='input__container'>
                <input type="text" name="" id="" placeholder='Shorten a link here...' className='input__link' ref={inputRef} />
                <button className='input__btn btn' onClick={handleInput}>Shorten it!</button>
            </div>
            {(linksOutputs.length > 0) && <ShortenOutputs shortenLinks={linksOutputs} />}
        </section>
    );
};

export default LinksSection;