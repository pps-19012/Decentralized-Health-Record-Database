import { useState, useEffect } from "react";
import { getAccount } from "./utils/wallet";
import Navbar from "./components/Navbar";
import { addRecordOperation, registerOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App = () => {
  // Patients and health register history
  // const [noOfPatients, setNumber] = useState()
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [record, setRecord] = useState([]);
  const [patients, setPatient] = useState([]);
  const [date, setDate] = useState([]);
  // const [recd_txt, setRecordtxt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [accountRecord, setAccountRecord] = useState([]);

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
      };

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

  // onAddRecord for add_record function
  const onAddRecord = async () => {
    try {
      setLoading(true);
      await addRecordOperation(message, message1);
      alert("Transaction succesful!");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const onRegister = async () => {
    try {
      setLoading1(true);
      await registerOperation();
      alert("Registered!");
    } catch (err) {
      alert(err.message);
    }
    setLoading1(false);
  };

  function ShowRecord(accRec) {
    return (
      <>
      {accRec.length > 0 && 
        <ul>
        {accountRecord.map(data => (
        <li key={data.date}> {data.date} : {data.record_text}</li>
          ))}
        </ul>
      }
      </>
    );
  }

  return (
    <div className="h-10000">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <br></br>
      <br></br>
      <button onClick={onRegister} className="btn btn-primary btn-lg">
            {/* TODO 7.b - Call onBuyTicket on click */}
            {/* TODO 7.c - Show "loading..." when buying operation is pending */}
            {loading1 ? "Loading..." : "Register"}
      </button>
      <br></br>
      Contract Address: KT1Mbcm3s69ThWmHf9fxEVtNfV1iLad2CMzR  
      <br></br>
      
        {/* List of Patients */}
        <div className="mt-2">
          {patients.map((patient, index) => (
            <div key={index}>
              <b>Patient {index + 1}:</b> {patient}
            </div>
          ))}
        <br></br>

        {/* Current Account Record */}
        {/* <ul>
          {accountRecord.map(data => (
          <li key={data.date}> {data.date} : {data.record_text}</li>
            ))}
          </ul> */}

          {ShowRecord(accountRecord)}

          <br></br>
        <ul>
            {date.map((nestedItem, i) => (
              <ul key={i}>
                Patient {i+1}
                {nestedItem.map(data => (
                  <li key={data.date}> {data.date} : {data.record_text} </li>
                ))}
              </ul>
            ))}
          </ul>  

          {/* use the code below to get list of date of any ith patient */}
          {/* <ul>
          {date.map(data => (
            <li key = {data.date} > {data.date} : {data.recd_txt} </li>
          ))}
          </ul> */}
        </div>

        <table>
            <tr>
        {
          Object.entries(record).map(([key, value]) => (
          <div  key={key}> {key}
          <ul>
          {value.map(data => (
          <li key={data.date}> {data.date} : {data.record_text}</li>
            ))}
          </ul>
          </div>
        ))}
        </tr>
        </table>

{/* <div className="RecordTable">
        <table>
        <tr>
          <th>Address</th>
          <th>Date</th>
          <th>Note</th>
        </tr>
        {
         Object.entries(record).map(([keyP, value]) => (
          <div className="RecordTable" key={keyP}>
          {value.map(data => {
          return (
            <tr key= {data.date}>
              <td>{keyP}</td>
              <td>{data.date}</td>
              <td>{data.record_text}</td>
            </tr>
          )
})}
          </div>
        ))}</table>
        </div> */}

        {/* record.forEach(item => {
          
          item.members.map((member)=>{
            
            if(member.location&&member.location[0]){
            
              //Do whatever, maybe you want to use return statement in there
              console.log(member.location)
            }
            else{
            
              //do something else, or add more conditions
              console.log("There's no location in it")
            }
          })
        }) */}

        {/* {record.map((record, index) => (
            <div key={index}>
              <b>Patient {index + 1}:</b> 
              {record.map((nestedItem, i) => (
              <ul key={i}>
                Patient {i+1}
                {nestedItem.map(data => (
                  <li key={data.date}> {data.date} : {data.recd_txt} </li>
                ))}
              </ul>
            ))}
            </div>
          ))} */}

        <br></br>
        <br></br>
        {/* Date : <input type="text" name="date" value={this.state.date} onChange = {this.handleInputChange} /> */}
        Date : <input type="text" id="message" name="message" onChange={handleChange} value={message}/>
        Prescription : <input type="text" id="message1" name="message1" onChange={handleChange1} value={message1}/>
        <br></br>
        <button onClick={onAddRecord} className="btn btn-primary btn-lg">
            {/* TODO 7.b - Call onBuyTicket on click */}
            {/* TODO 7.c - Show "loading..." when buying operation is pending */}
            {loading ? "Loading..." : "Submit"}
      </button>
      <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default App;
