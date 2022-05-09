const PROD = process.env.VUE_APP_PROD;

async function getDataByOwnerName(name) {
  try {
    const res = await fetch(PROD + `/cards?status=active&owner_name=${name}`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByType(type) {
  try {
    const res = await fetch(PROD + `/cards?status=active&card_type=${type}`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByTypeName(type, name) {
  try {
    const res = await fetch(
      PROD + `/cards?status=active&owner_name=${name}&card_type=${type}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByOwnerId(owner_id, page, limit) {
  try {
    const res = await fetch(
      PROD + `/cards?owner_id=${owner_id}&limit=${limit}&page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByStatus(status, page, limit) {
  try {
    const res = await fetch(
      PROD + `/cards?status=${status}&limit=${limit}&page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getDataByName(name) {
  try {
    const res = await fetch(PROD + `/cards?card_name=${name}`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export {
  PROD,
  getDataByName,
  getDataByType,
  getDataByTypeName,
  getDataByOwnerId,
  getDataByStatus,
  getDataByOwnerName,
};
