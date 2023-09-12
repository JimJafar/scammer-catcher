console.log("Hello World!");
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.ip);
    fetch(`/api/log/${data.ip}`);
  });
