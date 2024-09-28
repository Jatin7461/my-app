import { useContext, useEffect } from 'react';
import './App.css';
import './agent.css'
import Dialog from './components/Dialog';
import AgentProvider, { AgentContext } from './store/AgentsProvider';
import { useMotionTemplate, motion, animate, useMotionValue } from 'framer-motion';
import { agentColors } from './data/agent-info';
import AgentType from './components/AgentType';
import Description from './components/Description';
import Agent from './components/Agent';

function App() {
  const context = useContext(AgentContext)

  function nextAgent() {
    const newIndex = (context.index + 1) % context.agentsList.length

  }

  useEffect(() => {
    const interval = setInterval(() => {
      context.incrementIndex(); context.dontShow(); nextAgent()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className='container'
    // className={`container ${context.agentsList[context.index].container}`}
    // style={{ backgroundImage }}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg> */}
      {/* <Dialog /> */}
      <AgentType />
      <Agent />
      <Description
      />
      {/* <div >
        <svg onClick={() => {
          context.incrementIndex(); context.dontShow(); nextAgent()
        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
      </div> */}
    </motion.div>
  )
}

export default App;
