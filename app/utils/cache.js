import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timeStamp);

  return now.diff(storedTime, "minutes") > 5;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default {
  get,
  store,
};
