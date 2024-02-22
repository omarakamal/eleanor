import React, {useEffect, useState} from 'react'
import ArrowIcon from '../assets/arrow-icon.png'

function Scroll() {

    const [isVisible, setIsVisible] = useState(false)

    
    const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setIsVisible(true)
        }
        else if (scrolled <= 300) {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    
  return (
    <div>
        {isVisible && <img className='scroll-top' src={ArrowIcon} alt="Scroll to top" onClick={scrollToTop} />}

    </div>
  )
}

export default Scroll