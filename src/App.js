import './App.css';
import * as React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  const firstname = 'Benhar'
  const middlename = 'Lucas'
  const lastname = 'Masahod';
  const age = 24
  const students = 
  [
  {
    firstname: 'Benhar',
    middlename: 'Lucas',
    lastname: 'Dela Cruz',
    age: 20,
  },
  {
   firstName: 'Juan',
   middlename: 'Lopez',
   lastname: 'Santa',
   age: 25,
  },
  {
  firstName: 'Sittie',
  middlename: 'Mumina',
  lastname: 'Veniegas',
  age: 25,
}

]
const arr = [1,2,3,4,5]
  return (
    <>
    <Header />
    <main>
    <h1>Hello {firstname} {middlename}  {lastname} {students.age}</h1>
    {arr.map((num => <p> {num * 5} </p>))}
    {students.map(( s => <p>{s.firstname}{s.middlename} {s.lastname}</p>))}
    
      </main>
    <Footer />
    </>
 
  );
}

export default App;
