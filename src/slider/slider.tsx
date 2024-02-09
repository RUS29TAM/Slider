'use client'
import React, {useState} from 'react';
import styles from './slider.module.css';
import slideData from './slideData';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleChangeSlide = (slideNumber: React.SetStateAction<number>) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <div className={styles.container}>
            {slideData.map((_, index) => (
                <input
                    key={`slide${index + 1}`}
                    className={styles.input}
                    id={`slide${index + 1}`}
                    type="radio"
                    name="group"
                    checked={currentSlide === index + 1}
                    onChange={() => handleChangeSlide(index + 1)}
                />
            ))}
            <div className={styles.dots}>
                {slideData.map((_, index) => (
                    <label
                        key={`label${index + 1}`}
                        className={styles.label}
                        htmlFor={`slide${index + 1}`}
                    ></label>
                ))}
            </div>
            <div className={styles.slider}>
                {slideData.map(({ src, description }, index) => (
                    <div
                        key={`slide${index + 1}`}
                        className={`${styles.slide} ${
                            currentSlide === index + 1 ? styles.active : ''
                        }`}
                        data-id={`slide${index + 1}`}
                        style={{ backgroundImage: `url('${src}')` }}
                    >
                        <div className={styles.content}>
                            <h2 className={styles.h2}>{`Slide ${index + 1 }`}</h2>
                            <p className={styles.p}>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;