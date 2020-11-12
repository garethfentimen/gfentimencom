module.exports = (function() {
    return {
        getToken: async (user) => {
            const result = 
                await fetch(process.env.GRAPH_SERVER + `/api/auth/token`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
            return result.token;
        }
    };
})();