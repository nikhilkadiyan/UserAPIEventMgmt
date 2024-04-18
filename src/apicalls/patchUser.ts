async function patchUser(email: string,id: string,mobile: string,name: string): Promise<string> {
    // API call
    try {
      const response = await fetch(`https://em-api.poditservices.com/users`, {
        method: "PATCH",
        headers: {
          'accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,id,mobile,name}),
      });
      const json = await response.json();
      return JSON.stringify(json);
    } catch (error) {
      return "An error occured."
    }
    
}

module.exports = patchUser;