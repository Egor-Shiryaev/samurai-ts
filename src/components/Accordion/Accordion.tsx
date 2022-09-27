import React from "react";

type AccordionPropsType = {
    titleVal: string
    collapsed:boolean
}




function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    if (props.collapsed) {
        return (
            <>
                <AccordionTitle title={props.titleVal}/>
                <AccordionBody/>
            </>
        )
    } else {
        return (
            <>
                <AccordionTitle title={props.titleVal}/>
            </>
        )
    }
}

// пропсы AccordionTitle это title, которые равны
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>  // если в одной строке то без (), и так как это

}

function AccordionBody() {
    console.log("AccordionBody rendering")
    // это элементы компоенета Accordion, пожтому без <></> / <div>
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;
