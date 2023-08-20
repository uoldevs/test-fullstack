const url = 'http://localhost:3001/';

const post = async (data) => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
};

const put = async (data, id) => {
  try {
    await fetch(`${url}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
};

const del = async (id) => {
  try {
    await fetch(`${url}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { post, put, del };
