const fetch = require('node-fetch');

module.exports = async (user) => {
            const response = 
                await fetch(process.env.GRAPH_SERVER + `/api/auth/token`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
            const json = await response.json();
            return json.token;
        };