interface User {
  email : string,
  name : string,
  mobile : string
}

async function adduserCall(user: User): Promise<string> {
    // API call
    try {
      const response = await fetch(`http://13.234.117.187:10003/users`, {
        method: "POST",
        headers: {
          'accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      return JSON.stringify(json);
    } catch (error) {
      return "An error occured."
    }
    
}

module.exports = adduserCall;