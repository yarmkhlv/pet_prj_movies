const tryToGetLocalArr = (key: string) => {
  const keyFromLocal = localStorage.getItem(key);
  if (keyFromLocal !== null) {
    const parsed = JSON.parse(keyFromLocal);
    return parsed;
  }
  return [];
};

const tryToGetLocalUser = (key: string) => {
  const keyFromLocal = localStorage.getItem(key);
  if (keyFromLocal !== null) {
    return true;
  }
  return false;
};

export { tryToGetLocalArr, tryToGetLocalUser };
