export default {
  ifnull() {
    for (let i of arguments) {
      if (i.length == 0) {
        return true;
      }
    }
    return false;
  }
};
