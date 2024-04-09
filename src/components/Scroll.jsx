import React, {useContext, useEffect, useState} from 'react'
import ArrowIcon from '../assets/arrow-icon.png'
import ArrowWhite from '../assets/arrow-white.png'
import { ThemeContext } from '../contexts/theme.context'

function Scroll() {

    const [isVisible, setIsVisible] = useState(false)
    const {theme} = useContext(ThemeContext)
    const arrowSrc = theme === 'dark' ? ArrowWhite : ArrowIcon


    
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
        {isVisible && <img className='scroll-top' src={arrowSrc} alt="Scroll to top" onClick={scrollToTop} />}

    </div>
  )
}

export default Scroll