async function deleteUsers(ids: string[]): Promise<string> {
    // API call
    try {
      const response = await fetch(`https://em-api.poditservices.com/deleteUsers`, {
        method: "POST",
        headers: {
          'accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: ids}),
      });
      const json = await response.json();
      return JSON.stringify(json);
    } catch (error) {
      return "An error occured."
    }
    
}

module.exports = deleteUsers;