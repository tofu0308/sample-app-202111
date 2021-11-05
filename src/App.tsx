import React from 'react';
import './App.css';

const name = 'hello'
let nameChange = 'hello'
nameChange = 'hello2'

let username = 'Hello'
let dummyNum = 2
let bool: boolean = true

let array = [true, false, true]
let array2 = [0, 1, 'hello']

interface NAME {
  first: string;
  last: string | null
}

let nameObj: NAME = {
  first: 'naame',
  last: null
}

const func1 = (x: number,y: number): number => {
  return x + y
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN

const userA: USER = {
  age: 30,
  city: 'tokyo',
  username: 'xxx',
  password: 'yyy'
}

// Union Types
let value: boolean | number;
value = false
value = 2

// Literal Types
let abc: 'A'|'B'|'C'
abc = 'A'

// typeof
// 　実用例としてはjsonなどを継承させる
let msg: string = 'hi'
let msg2: typeof msg;
msg2 = 'string'

let animal = {cat: 'small cat'}
let newAnimal: typeof animal = { cat: 'big cat' }

// keyof
type KEYS = {
  primary: string
  scondary: string
}

let key: keyof KEYS 
// key = 'aaa' // 型 '"aaa"' を型 'keyof KEYS' に割り当てることはできません。ts(2322)

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: 'baseball'
}

let keySports: keyof typeof SPORTS;
keySports = 'soccer'


let arrayUni: (number|string)[];
arrayUni = [2,'a','b']

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
