import { Fields } from "../src/utils/game-constants"
import { fetchTeamsFromTBA } from "./apiFetches"
// run using ts-node, use: ` ts-node -O '{"module": "commonjs"}' ./transform-fields.ts  `
const fields: Fields = {
  General: [
    "Scouter Name",
    "Team Number",
    {
      "field-name": "How much experience do your drivers have?",
      type: "Radio",
      options: ["1 year", "2 years", "3 years+"],
      scoring: false,
    },
    {
      "field-name":
        "Where is your robot capable of placing hatches?(Check all that apply)",
      type: "Checkbox",
      options: ["Not Capable", "level 1", "level 2", "level 3"],
      scoring: false,
    },
    {
      "field-name":
        "Where is your robot capable of placing cargo?(Check all that apply)",
      type: "Checkbox",
      options: ["Not Capable", "level 1", "level 2", "level 3"],
      scoring: false,
    },
  ],
  Sandstorm: [
    {
      "field-name": "Where does your robot start during Sandstorm?",
      type: "Radio",
      options: ["level 1", "level 2"],
      scoring: false,
    },
    {
      "field-name": "Do you preload hatch or cargo?",
      type: "Radio",
      options: ["Hatch", "Cargo"],
      scoring: false,
    },
  ],
  Endgame: [
    {
      "field-name": "Is your robot capable of climbing?",
      type: "Radio",
      options: ["Not capable", "level 2", "level 3"],
      scoring: false,
    },
    {
      "field-name":
        "If you can climb, how many robots are you able to bring with you?",
      type: "Slider",
      min: 0,
      max: 2,
      marks: {
        0: "None",
        1: "One",
        2: "Two",
      },
      step: 1,
      scoring: false,
    },
  ],
  Problems: [
    "Recent problems with robot",
    {
      "field-name": "If so, what is your progress in solving those issues?",
      type: "Radio",
      options: [
        "No problems",
        "In progress but kind of stuck",
        "In progress, & we know what we're doing",
        "Solved",
      ],
      scoring: false,
    },
  ],
}
const transfromFields = Object.keys(fields)
  .map(key => fields[key])
  .reduce((acc, val) => acc.concat(val), [])
  .map(fieldKey =>
    typeof fieldKey === "string"
      ? fieldKey
      : fieldKey.type === "Number"
      ? fieldKey.dropped
        ? `${fieldKey["field-name"]}\n   ${fieldKey["field-name"]} dropped`
        : fieldKey["field-name"]
      : fieldKey["field-name"]
  )
  .reduce(
    (p, c) => `${p}
   ${c}`,
    ""
  )
console.log(transfromFields)
