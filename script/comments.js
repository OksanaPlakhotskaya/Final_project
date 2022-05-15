
  const getComments = async function () {
      let url = 'https://jsonplaceholder.typicode.com/comments';

        return await fetch(url)
        .then(resp => resp.json())
        .then(data => {
            return data;
        })
  }();
