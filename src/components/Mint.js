import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
// 合约对应的json文件--合约编译后
import Token from "./contracts/Token.json";
import contractAddress from "./contracts/contract-address.json";
import john from './images/john-doe.png'
import nft from './images/NFT-Transparent-Image.png'
import './Mint.css'

const Mint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAccount] = useState(1);

  // connectAccount()
  async function connectAccount() {
    // console.log("window.ethereum", window.ethereum);
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log('accounts', accounts, '=====');
      setAccounts(accounts);
    }
  }

  const isConnected = Boolean(accounts[0]);
  async function handleMint() {
    console.log("Mint === window.ethereum", window.ethereum);
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress.Token, // 合约地址
        Token.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response", response);
      } catch (err) {
        console.log("error", err);
      }
    }
  }

  const handlerDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAccount(mintAmount - 1);
  };

  const handlerIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAccount(mintAmount + 1);
  };

return (
  <div className='mint' id='mint'>
      <div className='container'>
          <img src={nft} alt='john' />
          <div className='col-2'>
              <h2>Mint your NFT here</h2>
              <span className='line'></span>
      
              <p>
                How to mint your NFT?
                <br/>
                <br/>
                1. Install Matemask wallet
                <br/>
                2.Prepare your Matemask wallet
                <br/>
                3.Click "Connect" button  
                <br/>
                4.Mint your NFT
              </p>
              {/* <p>2.Connect to your wallet</p> */}
              {/* <p>3.Mint your NFT</p> */}
              {/* <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p> */}
              {/* <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p> */}
              <button className='button' onClick={connectAccount} >Connect</button>

          <div className="col-2">
        {isConnected ? (
          <div>
            {/* <Flex justify="center" align="center">
              <Button
                backgroundColor= "#D6517D"
                borderRadius="5px"
                // boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handlerDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                // boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handlerIncrement}
              >
                +
              </Button>
            </Flex> */}
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              // boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            // textShadow="0 3px #000000"
            color="#D6517D"
          >
            Click "Connect" to Mint.
          </Text>
        )}
          </div>

          </div>          
      </div>
  </div>
)
}

//   return (
//     <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      
//       <div className='container'>
//         <img src={john} alt='john' />
//       </div>

//       <Box width="520px">
        
//         <button className='button'  onClick={connectAccount} > Connect </button>
        
//         {/* <Text fontSize="48px" textShadow="0 5px #000000">
//           RoboPunks
//         </Text> */}
//         <Text
//           fontSize="30px"
//           letterSpacing="-5.5%"
//           fontFamily="VT323"
//           textShadow="0 2px 2px #000000"
//         >
//           It's 2078. Can the RoboPunks NFT save humans from destructive rampnt
//           NFT speculation? Mint Robopunks to find out!
//         </Text>

        // {isConnected ? (
        //   <div>
        //     <Flex justify="center" align="center">
        //       <Button
        //         backgroundColor="#D6517D"
        //         borderRadius="5px"
        //         boxShadow="0px 2px 2px 1px #0F0F0F"
        //         color="white"
        //         cursor="pointer"
        //         fontFamily="inherit"
        //         padding="15px"
        //         marginTop="10px"
        //         onClick={handlerDecrement}
        //       >
        //         -
        //       </Button>
        //       <Input
        //         readOnly
        //         fontFamily="inherit"
        //         width="100px"
        //         height="40px"
        //         textAlign="center"
        //         paddingLeft="19px"
        //         marginTop="10px"
        //         type="number"
        //         value={mintAmount}
        //       />
        //       <Button
        //         backgroundColor="#D6517D"
        //         borderRadius="5px"
        //         boxShadow="0px 2px 2px 1px #0F0F0F"
        //         color="white"
        //         cursor="pointer"
        //         fontFamily="inherit"
        //         padding="15px"
        //         marginTop="10px"
        //         onClick={handlerIncrement}
        //       >
        //         +
        //       </Button>
        //     </Flex>
        //     <Button
        //       backgroundColor="#D6517D"
        //       borderRadius="5px"
        //       boxShadow="0px 2px 2px 1px #0F0F0F"
        //       color="white"
        //       cursor="pointer"
        //       fontFamily="inherit"
        //       padding="15px"
        //       marginTop="10px"
        //       onClick={handleMint}
        //     >
        //       Mint Now
        //     </Button>
        //   </div>
        // ) : (
        //   <Text
        //     marginTop="70px"
        //     fontSize="30px"
        //     letterSpacing="-5.5%"
        //     fontFamily="VT323"
        //     textShadow="0 3px #000000"
        //     color="#D6517D"
        //   >
        //     You must be connected to Mint.
        //   </Text>
        // )}
//       </Box>
//     </Flex>
//   );
// };

export default Mint;
