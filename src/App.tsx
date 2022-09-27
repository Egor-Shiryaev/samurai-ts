import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


// function declaration - для объявления компонентов,
// функции-компоненты объявляются с заглавной буквы
function App() { // App желтым, так как где то используется
    console.log("App rendering")
      // возвращает jsx(div)
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"New friends"}/>
            Article 1
            <Rating value={3} />
            <Accordion titleVal={"Menu"} collapsed={true}/>
            <Accordion titleVal={"Users"} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}
type PageTitleType={
    title:string
}
function PageTitle(props:PageTitleType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1> // <></> - можно оборачивать в <></> если без <div>
}

// Rating не имортированли, тк она есть в этом файле


// Стрелочные функции используем для обработчика событии
// const App=()=> {
//     //полезное что-то
//     // возвращает jsx(div)
//     return (
//         <div className="App">
//             this is APP co
//         </div>
//     );
// }



export default App;
