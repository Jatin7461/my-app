import { Agent } from "../models/Agent";

export const agentInfo: Array<Agent> = [
    // {
    //     agent: 'clove',
    //     role: 'controller',
    //     ult: "Clove's immortality essence ability that allows her to defy death. After dying, Clove can activate this ability to resurrect, but she must earn a kill or a damaging assist within a set time or she will die.",
    //     c: "Absorbs the life force of a fallen enemy to grant Clove temporary health and haste.",
    //     q: "Equips a fragment of immortality essence that can be thrown, erupting after a short delay and temporarily decaying all targets caught inside.",
    //     v: "Equips Clove to view the battlefield, and players can fire to set the locations where Clove's clouds will settle.",
    //     image: 'clove.jpg',
    //     description: "Clove. Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away."
    // }
    new Agent(
        'clove',
        'CONTROLLER',
        "Clove. Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
        "Not Dead Yet",
        "Pick me up",
        "Meddle",
        "Ruse",
        'clove.png',
    ),
    new Agent(
        'cypher',
        'SENTINAL',
        "The Moroccan information broker,Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        "Neural Theft",
        "Trapwire",
        "Cyber Cage",
        "Spycam",
        "cypher.png",

    ),
    new Agent(
        'yoru',
        'DUELIST',
        "Yoru. Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        'Dimensional Drift',
        'Blindside',
        'Fakeout',
        'Gatecrash',
        'yoru.png',
    ),
    new Agent(
        'Jett',
        'DUELIST',
        "Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        "Blade Storm",
        "Updraft",
        "Tailwind",
        "Cloudburst",
        "jett.png"

    )
]


export const agentColors = [
    {
        Dialog: ["#4d25a0", "#be1bd3", "#6c19cd"],
        Container: ["#a21bd36e", "#4d25a091", "#be1bd385"]
    },
    {
        Dialog: ["#171717b8", "#ab6f4ebf", "#69513dcc"],
        Container: ["#171717b8", "#ab6f4ebf", "#69513dcc"]
    }
]