import { motion, AnimatePresence } from "framer-motion"
import { useContext, useRef } from "react"
import { AgentContext } from "../store/AgentsProvider"

export default function AgentType() {

    const { index, agentsList, showing } = useContext(AgentContext)


    const ref = useRef(null);

    return <div

        className="agent-type-parent"
    >
        <AnimatePresence>

            {showing && <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: -100, opacity: 0 }}

                className="agent-type">



                <div className="details">

                    <div className="name-role">
                        <p className="role">{agentsList[index].role}</p>
                        <p className="name">{agentsList[index].name}</p>
                    </div>
                </div>

                <input type="hidden" ref={ref}></input>
                <button id="play-button" onMouseEnter={() => {
                    // const audio = new Audio('play.mp3')
                    // audio.play()
                }} className="play">
                    PLAY FOR FREE
                </button>
            </motion.div>}
        </AnimatePresence>
    </div>
}