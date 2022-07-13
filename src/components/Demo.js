import React from 'react'
import './Demo.css'
import picture1 from './images/NFT-Transparent-HQ.png'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>This is our NFT galley</p>
                    <p>Galley</p>
                    <p>(Put your advertising videos and pictures here)</p>
                    <div className='picture-box'>
                        
                        <img src={picture1} width="140"  height="140" alt='user1'/>
                        <img src={picture1} width="140"  height="140" alt='user1'/>
                        {/* <img src={picture1} width="180"  height="180" alt='user1'/> */}
                        
                        {/* <img src={picture1} width="180"  height="180" alt='user1'/> */}
                    </div>
                    {/* <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p> */}
                    {/* <button className='button'>Get your free financial analysis</button> */}
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
