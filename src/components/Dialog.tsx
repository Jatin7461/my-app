import { useContext, useEffect } from "react";
import { AgentContext } from "../store/AgentsProvider";
import Agent from "./Agent";
import AgentType from "./AgentType";
import Description from "./Description";
import { animate, color, motion, MotionStyle, MotionValue, useMotionTemplate, useMotionValue } from 'framer-motion'
import { agentColors } from "../data/agent-info";
export default function Dialog() {

    const { agentsList, index } = useContext(AgentContext)
    let dialogColors = agentColors[index].Dialog
    let dialogColor1 = useMotionValue(dialogColors[0])
    let dialogColor2 = useMotionValue(dialogColors[1])
    let dialogColor3 = useMotionValue(dialogColors[2])
    let boxShadowColor = useMotionValue(dialogColors[0])

    const backgroundImage = useMotionTemplate`linear-gradient(90deg,${dialogColor1},${dialogColor2},${dialogColor3})`
    // const backgroundImage = useMotionTemplate`linear-gradient(90deg,rgb(77, 37, 160), rgb(190, 27, 211), rgb(108, 25, 205))`

    const border = useMotionTemplate`10px solid ${boxShadowColor}`
    console.log(backgroundImage)
    useEffect(() => {
        // animate(dialogColor1, dialogColors[0], { duration: 0.4 })
        // animate(dialogColor2, dialogColors[1], { duration: 0.4 })
        // animate(dialogColor3, dialogColors[2], { duration: 0.4 })
        animate(boxShadowColor, dialogColors, { ease: 'easeInOut', repeat: Infinity, repeatType: "mirror", duration: 5 })
    }, [index])


    return <motion.div
        // className={`dialog ${agentsList[index].dialog}`}
        className="dialog"
        // style={{ backgroundImage }}
        // style={{ border }}
    >
        <AgentType />
        <Agent />
        <Description
        />
    </motion.div>
}