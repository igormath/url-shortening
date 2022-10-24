import Working from '../../assets/illustration-working.svg';

import './PresentationSection.css';

const PresentationSection = () => {
    return (
        <section className='presentation'>
            <img src={Working} alt="A women working" className='presentation__img' />
            <div className='presentation__container'>
                <h2 className='presentation__subtitle'>More than just shorter links</h2>
                <p className='presentation__paragraph'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='presentation__btn btn'>Get Started</button>
            </div>
        </section>
    );
};

export default PresentationSection;