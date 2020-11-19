export function formatResponse(status: number, data?: object) {
    return {
        status,
        data
    }
}

export function isLoggedIn(user_id: string, auth_id: string) {
    if (user_id !== auth_id) return false
    return true
}