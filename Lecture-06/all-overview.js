const axios = require("axios");

const getData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // using map
  // const result = data.slice(0,10).map((item) => {
  //   return {
  //     userid: item.userId,
  //     id: item.id,
  //     title: item.title,
  //   };
  // });

  // using reduct and return on objects 
  const result = data.slice(0,10).reduce((acc, cur) => {

    acc[cur.id] = {
      userId:cur.id,
      title:cur.title
    };
    return acc;
  }, {});

  console.log(result);

};

getData();
