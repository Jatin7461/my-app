import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { AgentContext } from '../store/AgentsProvider'

export default function Agent() {

    const { agentsList, index, showing } = useContext(AgentContext)

    return (

        <div
            className='agent-pic'
        >

            <div className="agent">
                <AnimatePresence>
                    {showing &&
                        <motion.img
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            exit={{ y: -100, opacity: 0 }}
                            src={agentsList[index].image} alt="clove"
                         width="100%"
                        ></motion.img>
                    }
                </AnimatePresence>


            </div>
        </div>
    )
}