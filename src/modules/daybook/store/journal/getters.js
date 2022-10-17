// export const myGetter = ( state ) => {
//     return state.something;
// }

export const getEntriesByTerm = ( state ) => (term = '') => {
    let entriesByTerm = []

    if (term.length === 0) {
        entriesByTerm = state.entries
    } else {
        entriesByTerm = state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))    
    }
    return entriesByTerm
}

export const getEntryById = ( state ) => (id = '') => {
    const entry = state.entries.find(entry => entry.id === id)

    if (!entry) return

    return {...entry}
}