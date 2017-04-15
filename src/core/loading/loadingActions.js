const LOADING = 'LOADING'

export const allLoading = (loading, bool) => ({
    type: LOADING,
    loading,
    bool
})
