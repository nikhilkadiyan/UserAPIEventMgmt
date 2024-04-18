async function getUsers(name: string,email: string,mobile: string): Promise<string>{
    // API call
    try {
      const response = await fetch(`https://em-api.poditservices.com/users?name=${name}&mobile=${mobile}&email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      return JSON.stringify(json);
    } catch (error) {
      return "An error occured";
    }
    
}
module.exports = getUsers;