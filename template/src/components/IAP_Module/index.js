import { requestPurchase, requestSubscription, useIAP } from "react-native-iap";
import * as RNIap from "react-native-iap";
import {
  getBooleanData,
  STORAGE_KEYS,
  storeBooleanData,
} from "./StorageDetails";
import React, { useEffect, useState } from "react";
import { constants } from "./ProductSKUs";
import { getUpdateMyPackage, getUserData } from "../../store/Slicer/UserSlices";
import { useDispatch, useSelector } from "react-redux";
import { Platform } from "react-native";

export const useInAppPurchase = () => {
  const dispatch = useDispatch();

  const {
    connected,
    subscriptions,
    getSubscriptions,
    currentPurchase,
    finishTransaction,
    getPurchaseHistory,
    requestSubscription,
    getAvailablePurchases,
    availablePurchases,
  } = useIAP();
  const [ownedSubscriptions, setOwnedSubscriptions] = useState([]);
  const { userID } = useSelector((state) => state.Auth);

  const getUserDetails = () => {
    dispatch(getUserData(userID));
  };
  const handleGetSubscriptions = async () => {
    try {
      let Product = await getSubscriptions({
        skus: constants.subscriptionSkus,
      });
      console.log(Product, "Product", constants.subscriptionSkus);
    } catch (error) {
      console.log({ message: "handleGetSubscriptions", error });
    }
  };

  const handleBuySubscription = async (productId, offerToken) => {
    // if (productId && !offerToken) {
    //   console.warn(
    //     `There are no subscription Offers for selected product (Only requiered for Google Play purchases): ${productId}`
    //   );
    // }
    try {
      await requestSubscription({
        sku: productId,
        ...(offerToken && {
          subscriptionOffers: [{ sku: productId, offerToken }],
        }),
      });
    } catch (error) {
      if (error) {
        console.log({ message: `[${error.code}]: ${error.message}`, error });
      } else {
        console.log({ message: "handleBuySubscription", error });
      }
    }
  };

  useEffect(() => {
    handleGetSubscriptions();
    getAvailablePurchases();
  }, []);
  useEffect(() => {
    const checkCurrentPurchase = async () => {
      try {
        if (currentPurchase?.productId) {
          await finishTransaction({
            purchase: currentPurchase,
            isConsumable: true,
          });
          if (Platform.OS === "android") {
            RNIap.acknowledgePurchaseAndroid(currentPurchase.purchaseToken);
          }
          setOwnedSubscriptions((prev) => [
            ...prev,
            currentPurchase?.productId,
          ]);
          getAvailablePurchases();
          dispatch(
            getUpdateMyPackage({
              id: constants.PackageTypes[currentPurchase?.productId],
              user_id: userID,
              callback: getUserDetails,
            })
          );
        }
      } catch (error) {
        if (error) {
          console.log({ message: `[${error.code}]: ${error.message}`, error });
        } else {
          console.log({ message: "handleBuyProduct", error });
        }
        getAvailablePurchases();
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);
  return {
    connected,
    ownedSubscriptions,
    subscriptions,
    currentPurchase,
    purchaseHistory: availablePurchases[availablePurchases.length - 1] || {},
    handleGetSubscriptions,
    handleBuySubscription,
  };
};
