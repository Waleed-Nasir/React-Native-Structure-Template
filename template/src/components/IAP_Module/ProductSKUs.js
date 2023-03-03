import { Platform } from "react-native";

const productSkus = Platform.select({
  ios: ["com.cooni.point1000", "com.cooni.point5000"],
  android: [
    "android.test.purchased",
    "android.test.canceled",
    "android.test.refunded",
    "android.test.item_unavailable",
  ],
});

const subscriptionSkus = Platform.select({
  ios: [
    "Basic_Mothly",
    "Basic_Per_Year",
    "Premium_Per_Year",
    "Premium_Monthly",
  ],
  android: [
    "basic_monthly",
    "basic_yearly",
    "premium_monthly",
    "premium_yearly",
  ],
});

const subscriptionSkusBackTo = Platform.select({
  ios: {
    1: "Basic_Mothly",
    2: "Basic_Per_Year",
    3: "Premium_Monthly",
    4: "Premium_Per_Year",
  },
  android: {
    1: "basic_monthly",
    2: "basic_yearly",
    3: "premium_monthly",
    4: "premium_yearly",
  },
});

const PackageTypes = {
  Basic_Mothly: 1,
  Basic_Per_Year: 2,
  Premium_Monthly: 3,
  Premium_Per_Year: 4,
  basic_monthly: 1,
  basic_yearly: 2,
  premium_monthly: 3,
  premium_yearly: 4,
};
const PackageRange = {
  Basic_Mothly: 100,
  Basic_Per_Year: 100 * 12,
  Premium_Monthly: 100000000,
  Premium_Per_Year: 100000000 * 12,
  basic_monthly: 100,
  basic_yearly: 100 * 12,
  premium_monthly: 100000000,
  premium_yearly: 100000000 * 12,
};
const TypesAllow = {
  1: 100,
  2: 100,
  3: true,
  4: true,
};
export const constants = {
  productSkus,
  subscriptionSkus,
  PackageTypes,
  TypesAllow,
  subscriptionSkusBackTo,
  PackageRange
};
