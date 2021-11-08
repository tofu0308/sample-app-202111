import React from 'react';
import './App.css';
import Data from './data.json'

type USERS = typeof Data;

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

// Generics
interface GEN<T> {
  item: T // まだデータ型は定まっていない
}

const gen0:GEN<string> = {item: 'hello'}
// const gen1: GEN = {item: 'hello'} // ジェネリック型 'GEN<T>' には 1 個の型引数が必要です。ts(2314)
// const gen2:GEN<number> = {item: 'hello'} // 型 'string' を型 'number' に割り当てることはできません。ts(2322)

interface GEN1<T = string> {
  item: T // まだデータ型は定まっていない
}
const gen3: GEN1 = { item: 'hello' }

interface GEN2<T extends string | number> {
  item: T
}
const gen4:GEN2<number> = {item: 4}
// const gen5:GEN2<boolean> = {item: true} // 型 'boolean' は制約 'string | number' を満たしていません。ts(2344)

function funcGen<T>(props: T) {
  return {item: props}
}

const gen6 = funcGen<string>('text')
const gen7 = funcGen<string | null>(null)

function funcGen1<T extends string | null>(props: T) {
  return { value: props}
}

const gen8 = funcGen1("text")
// const gen9 = funcGen1(123) // 型 '123' の引数を型 'string | null' のパラメーターに割り当てることはできません。ts(2345)

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return { value: props.price}
}

const gen10 = funcGen3({price: 10})

const funcGEN4 = <T extends Props>(props: T) => {
  return { value: props.price}
}


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
