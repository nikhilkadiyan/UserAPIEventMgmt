async function getUserById(id:string): Promise<string> {
    // API call
    const response = await fetch(`http://13.234.117.187:10003/users/${id}`, {
        method: "GET",
        headers: {
            'accept': 'application/json',
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    console.log(json);
    return json;
}

module.exports = getUserById;
