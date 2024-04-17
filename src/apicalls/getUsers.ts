async function getUsers(name: string,email: string,mobile: string): Promise<string>{
    // API call
    const response = await fetch(`http://13.234.117.187:10003/users?name=${name}&mobile=${mobile}&email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      return json;
}
module.exports = getUsers;