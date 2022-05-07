async function getAllData(page, limit) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?_limit=${limit}&_page=${page}`
  );
  return await res.json();
}

async function getDataByOwnerName(name) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&owner_name=${name}`
  );
  return await res.json();
}

async function getDataByType(type) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&card_type=${type}`
  );
  return await res.json();
}

async function getDataByTypeName(type, name) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active&owner_name=${name}&card_type=${type}`
  );
  return await res.json();
}

async function getDataByOwnerId(owner_id, page, limit) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?owner_id=${owner_id}&?_limit=${limit}&_page=${page}`
  );
  return await res.json();
}

async function getDataByStatus(status, page, limit) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=${status}&?_limit=${limit}&_page=${page}`
  );
  return await res.json();
}

async function getDataByName(name) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?name=${name}`
  );
  return await res.json();
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
