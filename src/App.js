import logo from './logo.svg';
import './App.css';
import { personsData } from './data';

function App() {
  return (
    <div className="main-container">
      <div className='table-container'>
        <table>
          <caption>This is the sample table data</caption>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Married</th>
            <th>Phone Number</th>
            <th>Address(City)</th>
          </tr>
          {personsData.map(p => (
            <tr key={p.phoneNumber}>
              <td data-cell="First Name">{p.firstName}</td>
              <td data-cell="Last Name">{p.lastName}</td>
              <td data-cell="Age">{p.age}</td>
              <td data-cell="Married">{p.married}</td>
              <td data-cell="Phone Number">{p.phoneNumber}</td>
              <td data-cell="City">{p.city}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
