import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'
import { CallbackHook } from './06-Memo/CallbackHook'
import { Memohook } from './06-Memo/Memohook'
import Memorize from './06-Memo/Memorize'
import { Padre } from './07-tarea-memo/Padre'
//import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
//import SimpleForm from './02-useEffect/SimpleForm'
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import Layout from './05-useLayoutEffects/Layout'

//import './08-useReducer/intro-reducer'
import TodoApp from './08-useReducer/TodoApp'

import HooksApp from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <TodoApp/>
 // </React.StrictMode>,
)
