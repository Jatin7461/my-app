import { useContext, useState } from "react"
import { Abilities } from "../models/AgentAbilties";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { AgentContext } from "../store/AgentsProvider";
export default function Description() {

    const { agentsList, index, showing } = useContext(AgentContext)
    const [scope, animate] = useAnimate()

    const [selected, isSelected] = useState<Abilities | undefined>(new Abilities(true, false, false, false))


    function toggleAbility(currentAbility: string): Abilities {

        const updatedAbility = new Abilities(false, false, false, false)
        if (currentAbility === 'ult') updatedAbility.ult = true
        if (currentAbility === 'q') updatedAbility.q = true
        if (currentAbility === 'c') updatedAbility.c = true
        if (currentAbility === 'v') updatedAbility.v = true
        return updatedAbility
    }

    function handleSelect(ability: string): void {
        let updatedAbility;
        if (ability === 'ult') {
            updatedAbility = toggleAbility('ult')
        }
        else if (ability === 'q') updatedAbility = toggleAbility('q')
        else if (ability === 'c') updatedAbility = toggleAbility('c')
        else if (ability === 'v') updatedAbility = toggleAbility('v')

        isSelected(updatedAbility)
    }



    const roles = {
        "SENTINAL": "These agents set traps to cut off enemy flanking routes and hold entire areas of the map. They are prepared and understand enemy attack patterns.",
        "CONTROLLER": "These agents use smokes and walls to control areas of the map, create choke points, and cut enemy vision. They are consistent and dictate the tempo of the map.",
        "INITIATOR": "These agents use flashes and information gathering abilities to create opportunities for their team to enter sites. They are patient and have good timing.",
        "DUELIST": "These agents are often the first to enter sites and look for first blood. They are designed to make aggressive plays safely. "
    }

    return <div className="description">
        <AnimatePresence>
            {
                showing &&
                <motion.div
                    ref={scope}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="desc-div">
                    <img className="valoImg" src="valorant.png" width="30%" />

                    <div className="agent-des">
                        {agentsList[index].description}
                    </div>
                    {/* <div className="abilities">
                        <img className={selected && selected.ult ? 'yes-filter-img' : ''} src={`${agentsList[index].name}-ult.png`} onClick={() => { handleSelect('ult'); }} />
                        <img className={selected && selected.c ? 'yes-filter-img' : ''} src={`${agentsList[index].name}-c.png`} onClick={() => handleSelect('c')} />
                        <img className={selected && selected.q ? 'yes-filter-img' : ''} src={`${agentsList[index].name}-q.png`} onClick={() => handleSelect('q')} />
                        <img className={selected && selected.v ? 'yes-filter-img' : ''} src={`${agentsList[index].name}-v.png`} onClick={() => handleSelect('v')} />
                    </div> */}
                    {/* <div className="ability-des">

                        {selected && selected.ult && <p>{agentsList[index].ult}</p>}
                        {selected && selected.c && <p>{agentsList[index].c}</p>}
                        {selected && selected.v && <p>{agentsList[index].v}</p>}
                        {selected && selected.q && <p>{agentsList[index].q}</p>}
                    </div> */}
                    <div>

                        <p className="role-heading">{agentsList[index].role}</p>
                        {agentsList[index].role === "CONTROLLER" && <p className="role-des">{roles["CONTROLLER"]}</p>}
                        {agentsList[index].role === "DUELIST" && <p className="role-des">{roles["DUELIST"]}</p>}
                        {agentsList[index].role === "INITIATOR" && <p className="role-des">{roles["INITIATOR"]}</p>}
                        {agentsList[index].role === "SENTINAL" && <p className="role-des">{roles["SENTINAL"]}</p>}
                    </div>

                    <div className="ability-des">
                        <p className="ability-des-heading">Abilities</p>
                        <div className="ability-types">
                            <div>
                                <p className="ability-heading">BASIC</p>
                                <p className="ability-name">{agentsList[index].c}</p>
                                <p className="ability-name">{agentsList[index].q}</p>
                            </div>
                            <div>
                                <p className="ability-heading">SIGNATURE</p>
                                <p className="ability-name">{agentsList[index].v}</p>
                            </div>
                            <div>
                                <p className="ability-heading">ULTIMATE</p>
                                <p className="ability-name">{agentsList[index].ult}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </div >
}