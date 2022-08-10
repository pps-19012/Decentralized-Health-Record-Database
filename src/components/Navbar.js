import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // TODO 4.a - Create onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top sticky-nav">
      <div className="container py-2">
        
        <a href="/" className="navbar-brand">
          Health Register
        </a>
        <ul class="nav">
            {/* <li><a href="#home">Home</a></li> */}
            <li><a href="#about">Transactions</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        
        <div className="d-flex">
          {/* TODO 4.b - Call connectWallet function onClick  */}
          <button onClick={onConnectWallet} className="btn btn-outline-info">
            {/* TODO 5.a - Show account address if wallet is connected */}
            {account ? account : "Connect Wallet"}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
