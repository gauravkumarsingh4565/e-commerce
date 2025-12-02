const querySnapshotToArray = async (snapShot) => {
  const arr = [];

  try {
    snapShot.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    return arr;
  } catch (error) {
    return [];
  }
};

export {
    querySnapshotToArray,
}
