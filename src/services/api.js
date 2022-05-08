async function getAllData(page, limit) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?_limit=${limit}&_page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByOwnerName(name) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&owner_name=${name}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByType(type) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&card_type=${type}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByTypeName(type, name) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&owner_name=${name}&card_type=${type}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByOwnerId(owner_id, page, limit) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?owner_id=${owner_id}&?_limit=${limit}&_page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByStatus(status, page, limit) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=${status}&?_limit=${limit}&_page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByName(name) {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?name=${name}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export {
  getAllData,
  getDataByName,
  getDataByType,
  getDataByTypeName,
  getDataByOwnerId,
  getDataByStatus,
  getDataByOwnerName,
};
