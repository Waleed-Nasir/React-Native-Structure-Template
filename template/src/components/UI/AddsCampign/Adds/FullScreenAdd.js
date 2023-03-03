import { TestIds, useInterstitialAd } from "@react-native-admob/admob";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-native";
import { useSelector } from "react-redux";

const hookOptions = {
  loadOnDismissed: true,
  // requestOptions: {
  //   requestNonPersonalizedAdsOnly: true,
  //   serverSideVerificationOptions: {
  //     userId: "123",
  //   },
  // },
};

const FullScreenAdd = ({ showAdd }) => {
  const visibility = useSelector((state) => state.Loader.isShowAdd);

  const { adLoaded, adDismissed, show, loadOnDismissed, adLoadError } =
    useInterstitialAd(
      TestIds.INTERSTITIAL
      // Platform.OS === "android"
      // ? "ca-app-pub-8724406248515005/3717129670"
      // : "ca-app-pub-8724406248515005/6381739899"
    );

  if (visibility) {
    show();
  }
  // show();

  return null;
};

export default FullScreenAdd;
