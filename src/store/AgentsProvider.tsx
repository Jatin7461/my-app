import { animate, MotionStyle, MotionValue, useMotionTemplate } from "framer-motion";
import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import { agentInfo } from "../data/agent-info";
import { Agent } from "../models/Agent";


// interface AgentInterface {
//     agentsList: Array<Agent>,
//     index: number,
//     incrementIndex: Function
// }




export const AgentContext = createContext<{
    showing: boolean,
    agentsList: Agent[],
    index: number,
    incrementIndex: () => void,
    dontShow: () => void,
    show: () => void,
}>({
    showing: true,
    agentsList: [],
    index: 0,
    incrementIndex: () => { },
    dontShow: () => { },
    show: () => { },

})

const AgentProvider: React.FC<PropsWithChildren> = ({ children }) => {


    const [index, setIndex] = useState(0)
    const [showAgent, setShowAgent] = useState(true)


    function handleIndex() {
        console.log('incrementing index')

        setIndex((prevIndex) => {
            let updatedIndex = prevIndex + 1;
            updatedIndex = updatedIndex % agentInfo.length
            return updatedIndex
        })

        animate('black', '')

        setTimeout(() => {
            setShowAgent(true)
        }, 500)

    }

    function dontShow() {
        setShowAgent(false)
    }

    function show() {
        setShowAgent(true)
    }



    const ctxValue: {
        showing: boolean,
        agentsList: Agent[],
        index: number,
        incrementIndex: () => void,
        dontShow: () => void,
        show: () => void,

    } = {
        showing: showAgent,
        agentsList: agentInfo,
        index,
        incrementIndex: () => handleIndex(),
        dontShow: () => dontShow(),
        show: () => show(),
    }
    return <AgentContext.Provider value={ctxValue}>
        {children}
    </AgentContext.Provider>
}

export default AgentProvider