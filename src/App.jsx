import { useAddress, useMetamask} from "@thirdweb-dev/react";


const App = () => {
  //use the hooks thirdweb gives us 
  const address = useAddress(); 
  const connectWithMetamask = useMetamask(); 

  console.log("👋 Address", address); 
  //this is the case where the user hasn't connected their wallet 
  //to your web app. Let them call connectWallet.

  if(!address){
    return (
      <div className = "landinng">
        <h1> Welcome to LoLDAO</h1>
        <button onClick = {connectWithMetamask} classname = "btn-hero"> 
        Connect your wallet 
        </button>
      </div>
    );
  }

  //This is the case where we have the user's address 
  //which menas they;ve connected their wallet to our site
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what</h1>
    </div>
  );
};

export default App;
