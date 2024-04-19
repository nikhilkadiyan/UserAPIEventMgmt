async function getUsers(name: string,email: string,mobile: string): Promise<string>{
    // API call
    try {
      console.log(name,email,mobile);
      const searchParams = new URLSearchParams();
      if(name) searchParams.set("name", name)
      if(email) searchParams.set("email", email)
      if(mobile) searchParams.set("mobile", mobile)
      const url = `https://em-api.poditservices.com/users?${searchParams}`
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "accept": "application/json",
        },
      });
      const json = await response.json();
      return JSON.stringify(json);
    } catch (error) {
      return "An error occured";
    }
    
}
module.exports = getUsers;