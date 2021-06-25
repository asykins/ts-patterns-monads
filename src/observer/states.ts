export const states = {
    inProgress: "inProgress",
    done: "done",
    begin: "begin"
} as const

export type availableStates = keyof typeof states