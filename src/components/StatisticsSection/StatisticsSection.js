import Recognition from '../../assets/icon-brand-recognition.svg';
import Records from '../../assets/icon-detailed-records.svg';
import Customizable from '../../assets/icon-fully-customizable.svg';

import './StatisticsSection.css'

const StatisticsSection = () => {
    return (
        <section className='statistics'>
            <h3 className='statistics__title'>Advanced Statistics</h3>
            <p className='statistics__description'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className='statistics__container'>
                <div className='statistics__card recognition'>
                    <img src={Recognition} alt="An ascending graph." />
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each click.
                        Generic links don't mean a thing.
                        Branded links help instil confidence in your content
                    </p>
                </div>
                <div className='separator-line'></div>
                <div className='statistics__card records'>
                    <img src={Records} alt="An stilized candle" />
                    <h4>Detailed Records</h4>
                    <p>
                        Gain insights into who is clicking your links.
                        Knowing when and where people engage with your content
                        helps inform better decisions.
                    </p>
                </div>
                <div className='separator-line'></div>
                <div className='statistics__card customize'>
                    <img src={Customizable} alt="Three brush tool." />
                    <h4>Fully Customizable</h4>
                    <p>Improve brand awareness and content discoverability
                        trough customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
