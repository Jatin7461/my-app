import Agent from "./Agent";
import AgentType from "./AgentType";
import Description from "./Description";

export default function Dialog() {
    return <div className="dialog">
        <AgentType />
        <Agent />
        <Description />
    </div>
}