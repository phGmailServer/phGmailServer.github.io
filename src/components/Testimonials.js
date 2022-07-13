import React from 'react'
import { Link } from 'react-router-dom'
import user1 from './images/NFT-PNG-Photo.png'
import user2 from './images/metamask-logo-png-transparent.png'
import user3 from './images/NFT-Transparent.png'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>FAQs</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} width="90"  height="90" alt='user1'/>
                        <h4>What is NFT?</h4>
                        <p>Non-Fungible Tokens (NFT) are unique digital items on blockchain. Common examples of NFTs include music, artwork, trading cards. You can explore and trade your NFTs on platfroms like opensea:</p>
                        {/* <p>It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p> */}
                        <a href='https://opensea.io/' ><p><span>opensea website</span></p></a>
                        {/* <p>Director of "Financial Times"</p> */}
                    </div>
                    <div className='card'>
                        <img src={user2} width="90"  height="90" alt='user1'/>
                        <h4>How to create my MateMask accout?</h4>
                        <p> MateMask is a crypto wallet and also a gateway to blockchain apps. More instructions can be found in the following link: </p>
                        {/* <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p> */}
                        {/* <Link> a </Link> */}
                        <a href='https://metamask.io/' ><p><span>metamask website</span></p></a>
                        
                        {/* <p>Director at Risktec Solutions Ltd</p> */}
                    </div>
                    <div className='card'>
                        <img src={user3} width="90"  height="90" alt='user1'/>
                        <h4>What can you do with an NFT?</h4>
                        <p>Currently, NFTs are becoming more and more popular in gaming, collectibles, and art. As for our business, our NFTs are now just collectibles, but the use of our NFTs are keeping on extanding. More information about the uses of NFTs can be found in the following link:</p>
                        {/* <p><span>Snow.J.R.</span></p> */}
                        <a href='https://academy.binance.com/en/articles/top-7-nft-use-cases' ><p><span>top-7-nft-use-cases</span></p></a>
                        {/* <p>Managing Director of BPW Global</p> */}
                    </div>
                    <div className='card'>
                        <img src={user3} width="90"  height="90" alt='user1'/>
                        <h4>How to check my NFT in my wallet?</h4>
                        <p>1. switch to Rinkeby Test Network <br/> 2.click "Add token" botton <br/>  3.Fill the table: <br/>  <b>Token address:</b> <br/>0xDfE5Fc6401A215D13484253Ce621<br/>C16d09774D87; <br/> <b>Symbol:</b> RoboNFT; <br/> <b>Decimal:</b> 0  <br/><br/>  More information in the links</p>
                        {/* <p><span>Snow.J.R.</span></p> */}
                        <a href='https://rinkeby.etherscan.io/address/0xDfE5Fc6401A215D13484253Ce621C16d09774D87#code' ><p><span>Contract Address on Ethersan</span></p></a>
                        <a href='https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet' ><p><span>NFT tokens in your MetaMask wallet</span></p></a>
                        {/* <p>Managing Director of BPW Global</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
