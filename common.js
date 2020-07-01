import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const CustomHeight = 812;
const CustomWidth = 375;

export const hp = (value) => {
  const dimension = (value / CustomHeight) * 100;
  return heightPercentageToDP(`${dimension}%`);
};

export const wp = (value) => {
  const dimension = (value / CustomWidth) * 100;
  return widthPercentageToDP(`${dimension}%`);
};
