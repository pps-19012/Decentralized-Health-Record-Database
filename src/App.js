import { useState, useEffect } from "react";
import { getAccount } from "./utils/wallet";
import Navbar from "./components/Navbar";
import { addRecordOperation, registerOperation } from "./utils/operation";
import { loginOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";
import { fetchStorage1 } from "./utils/tzkt";
import Accordion from "./Accordion";

const App = () => {
  // Patients and health register history
  // const [noOfPatients, setNumber] = useState()
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [record, setRecord] = useState([]);
  const [patients, setPatient] = useState([]);
  const [date, setDate] = useState([]);
  // const [recd_txt, setRecordtxt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [accountRecord, setAccountRecord] = useState([]);
  const [loginRecord, setLoginRecord] = useState([]);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      const currentaccount = await getAccount();
      const storage = await fetchStorage();
      setRecord(Object(storage))
      setPatient(Object.keys(storage));
      setDate(Object.values(storage));

      if(Object.keys(storage).includes(currentaccount)) {
        setAccountRecord(Object.values(storage[currentaccount]));
        setAccountRecord(Object.values(storage[currentaccount]));
      };
      
      // Frontend logic
      const firstHalf = document.querySelector('.firstHalf');
      const firstHalfmodified = document.querySelector('.firstHalfmodified');
      const firstHalf_selector_1 = document.querySelector('.firstHalf-selector-1');
      const firstHalf_selector_2 = document.querySelector('.firstHalf-selector-2');
      
      //const accordion = document.querySelectorAll('.accordion-item-header');

      // const accordion_items = document.querySelector('.accordion');

      // const submitButton = document.querySelector('#submit');

      // submitButton.addEventListener('click', addNewAccordionItem);
      // function addNewAccordionItem(){
      //     const newAccordionItem = document.createElement('div');
      //     newAccordionItem.classList.add('accordion-item');

      //     newAccordionItem.innerHTML = `
      //     <div class="accordion-item-header">
      //         Why is this website important?
      //     </div>
      //     <div class="accordion-item-body">
      //         <div class="accordion-item-body-content">
      //             Because we want to have a legit website for Tezasia Hackathon.
      //         </div>
      //     </div>
      //     `;
      //     accordion_items.appendChild(newAccordionItem);
      
      //     const newAccordionItemHeader = newAccordionItem.querySelector('.accordion-item-header');
      
      //     newAccordionItemHeader.addEventListener('click', () => {
      //         newAccordionItemHeader.classList.toggle('active');
      //     });
      // }

      // accordion.forEach(item => {
      //     item.addEventListener('click', () => {
      //         item.classList.toggle('active');
      //     });
      // })

      firstHalf_selector_1.addEventListener("click", () => {
          if(firstHalf_selector_1.classList.contains('active')){
          firstHalf.classList.toggle('active');
          firstHalfmodified.classList.toggle('active');
          firstHalf_selector_1.classList.toggle('active');
          firstHalf_selector_2.classList.toggle('active');}
      })

      firstHalf_selector_2.addEventListener("click", () => {
          if(!firstHalf_selector_1.classList.contains('active')){
          firstHalf.classList.toggle('active');
          firstHalfmodified.classList.toggle('active');
          firstHalf_selector_1.classList.toggle('active');
          firstHalf_selector_2.classList.toggle('active');}
})
    })();
  }, []);

  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name] : value
  //   });
  // }

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange1 = event => {
    setMessage1(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange2 = event => {
    setMessage2(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange3 = event => {
    setMessage3(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  }

  // onAddRecord for add_record function
  const onAddRecord = async () => {
    try {
      setLoading(true);
      await addRecordOperation(message, message1);
      alert("Transaction succesful!");
      setMessage('');
      setMessage1('');
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const onLogin = async () => {
    try {
      setLoading1(true);
      await loginOperation(message2, message3);
      alert("Login succesful!");
      setMessage2('');
      setMessage3('');
    } catch (err) {
      alert(err.message);
    }
    setLoading1(false);
  };

  // const onRegister = async () => {
  //   try {
  //     setLoading1(true);
  //     await registerOperation();
  //     alert("Registered!");
  //   } catch (err) {
  //     alert(err.message);
  //   }
  //   setLoading1(false);
  // };

  // function ShowRecord(accRec) {
  //   return (
  //     <>
  //     {accRec.length > 0 && 
  //       <ul>
  //       {accountRecord.map(data => (
  //       <li key={data.date}> {data.date} : {data.record_text}</li>
  //         ))}
  //       </ul>
  //     }
  //     </>
  //   );
  // }

  function ShowAccordion(accRec) {
    return (
      <>
      {accRec.length > 0 && 

        <div class="accordion">

        {accountRecord.map(data => (
          <Accordion title={data.date} data1 = {data.date} data2 = {data.record_text}></Accordion>
          ))}

        </div>
      }
      </>
    );
  }

  return (
    <html>
      <Navbar></Navbar>
      <head>
      {/* <script src="script.js" defer></script> */}
      </head>
    <body>
    <nav class="navbar">        
        <div class="navbar-logo">
            <a href="index.html" class="navbar-brand"><img src="img.png" alt="logo"/></a>
        </div>
        <ul class="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>
    <div class="mainbox">

        <div class="firstHalf-selectors">
            <div class="firstHalf-selector"></div>
            <div class="firstHalf-selector-1">1</div>
            <div class="firstHalf-selector-2">2</div>
        </div>

        <div class="firstHalf">
            <h1>Your Medical <span>History</span>!</h1>
            <br/>

                {ShowAccordion(accountRecord)}

{/* 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi</p>  */}
            
            <div class=""></div>
        
        </div>

        <div class="firstHalfmodified">
            <h1>Welcome to the <span>Trial</span>!</h1>
            <br/>
            <p>consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi</p>
        </div>

        <div class="secondHalf">
            <h1 id="formTitle">Add Record</h1>
            <br/>
            <form>

                <label for="fname" id="name-label">Date</label><br/>
                <input id="message" name="message" type="text" placeholder="Date" onChange={handleChange} value={message}/><br/>

                <label for="email" id="email-label">Prescription</label><br/>
                <input id="message1" name="message1" type="text" placeholder="Prescription" onChange={handleChange1} value={message1}/><br/>
                {/* <label for="number" id="number-label">Password</label><br/>
                <input id="number" type="password" name="number" placeholder="Password"/><br/><br/> */}
                
                <br/><br/>
                <input id="submit" type="button" value={loading ? "Loading..." : "Submit"} onClick={onAddRecord}/>          
            </form>
        </div>

        <div class="secondHalfmodified">
            <h1 id="formTitle">Register/Login</h1>
            <br/>
            <form>

                <label for="fname" id="name-label">Name</label><br/>
                <input id="message2" name="message2" type="text" placeholder="Name" onChange={handleChange2} value={message2}/><br/>

                <label for="email" id="email-label">Password</label><br/>
                <input id="message3" name="message3" type="text" placeholder="Password" onChange={handleChange3} value={message3}/><br/>
                {/* <label for="number" id="number-label">Password</label><br/>
                <input id="number" type="password" name="number" placeholder="Password"/><br/><br/> */}
                
                <br/><br/>
                <input id="submit" type="button" value={loading1 ? "Loading..." : "Login"} onClick={onLogin}/>          
            </form>
        </div>
    </div>

    <footer>
        <p>Made with ♥ by Team Fo4r.</p>
    </footer>
</body>
</html>
  );
};

export default App;
