export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function removeFromCalendar ({ day, meal }) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}