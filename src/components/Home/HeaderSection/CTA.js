import React from 'react'
import CV from '../../../assets/CV_Lasindu Anjana.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-primary'>Download CV</a>
            <a href="src/components/Home/HeaderSection#contact" className='btn btn-outline-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA