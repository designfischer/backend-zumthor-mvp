export function validateOwnership(params_id: string, auth_id: string) {
    if (params_id !== auth_id) return false
    return true
}