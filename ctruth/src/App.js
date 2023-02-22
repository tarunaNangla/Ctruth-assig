

import Footer from './Components/Footer';
import Account from './Components/account/Account';
import Customer from './Components/customer/Customer';
import Initialpart from './Components/initialpart/Initialpart';
import Mid from './Components/middle/Mid';
import Navbar from './Components/navbar/Navbar';
import Paid from './Components/paid/Paid';
import Security from './Components/secure/Security';

import Simmid from './Components/simmid/Simmid';
import Time from './Components/time/Time';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Initialpart/>
      <Mid/>
      <Paid/>
      <Customer/>
      <Time/>
      <Security/>
      <Simmid/>
      <Account/>
      <Footer/>
    </div>
  );
}

export default App;
