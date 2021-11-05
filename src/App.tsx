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

let arrayUni: (number|string)[];
arrayUni = [2,'a','b']

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

// enum
// 列挙型。自動で連番をつけてくれる
enum OS {
  Windows,
  Mac,
  Linux
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id:1,
  OSType: OS.Windows // (enum member) OS.Windows = 0
}

const PC2: PC = {
  id:2,
  OSType: OS.Mac // (enum member) OS.Windows = 0
}

// 型の互換性
const comp1 = 'test'
let comp2: string = comp1

let comp3: string = 'test'
// const comp4:'test' = comp3
//型 'string' を型 '"test"' に割り当てることはできません。ts(2322)

let funcComp1 = (x:number) => {}
let funcComp2 = (x:string) => {}

// funcComp1 = funcComp2
/**
 型 '(x: string) => void' を型 '(x: number) => void' に割り当てることはできません。
  パラメーター 'x' および 'x' は型に互換性がありません。
    型 'number' を型 'string' に割り当てることはできません。ts(2322)
 */



function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
