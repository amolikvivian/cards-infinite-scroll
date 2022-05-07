async function getAllData() {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=active`
  );

  return await res.json();
}

async function getDataByName(name) {
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

async function getDataByOwner(owner_id) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?owner_id=${owner_id}`
  );
  return await res.json();
}

async function getDataByStatus(status) {
  const res = await fetch(
    `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?status=${status}`
  );
  return await res.json();
}


export { getAllData, getDataByName, getDataByType, getDataByTypeName, getDataByOwner, getDataByStatus };
