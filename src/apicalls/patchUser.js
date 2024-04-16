async function patchUser(email,id,mobile,name){
    // API call
    const response = await fetch(`http://13.234.117.187:10003/users`, {
        method: "PATCH",
        headers: {
          'accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,id,mobile,name}),
      });
      const json = await response.json();
      console.log(json);
      return json;
}

module.exports = patchUser;