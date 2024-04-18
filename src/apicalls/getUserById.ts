async function getUserById(id:string): Promise<string> {
    // API call
    try {
        const response = await fetch(`https://em-api.poditservices.com/users/${id}`, {
        method: "GET",
        headers: {
            'accept': 'application/json',
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return JSON.stringify(json);
    } catch (error) {
        return "An error occured.";
    }
    
}

module.exports = getUserById;
