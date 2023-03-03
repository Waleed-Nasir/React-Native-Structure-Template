export const API_URLS = {
  BaseURL: "https://app.bytrixtech.com/pob/public/api/", //########DONE##########//

  //AUHT
  LOGIN: "auth/login", //########DONE##########//
  REGISTER: "auth/register", //########DONE##########//
  FORGOT: "password/email", //########DONE##########//
  UPDATED_PASSWORD: "password/reset", //########DONE##########//

  //HOME
  HOME: "front/nfts/list", //########DONE##########//

  //NFTS DETAILS
  GET_CATEGORIES: "front/categories/list", ///?PAGE=NUMBER&ID=NUMBER ID = CAT_1D //########DONE##########//
  GET_CATEGORIES_BY_ID: "front/nfts/show_by_category/", //ID = CAT_1D //########DONE##########//
  GET_NFT_DETAILS: "front/nfts/show/", //CAT ID //########DONE##########//
  // UPDATE_NFT: "front/nfts/update/", // NFT_ID
  CREATE_NFT: "front/nfts/save/", //NFT_ID //########DONE##########//

  //MY WORK
  GET_MY_WORK: "front/nfts/fetch_my_work/", //USER ID //########DONE##########//
  GET_MY_FAVORITE: "front/nfts/fetch_my_fav/", //USER ID //########DONE##########//
  GET_DELETE_MY_WORK: "front/nfts/remove_my_work",
  //FAVORITE
  MAKE_IF_FAVORITE: "front/nfts/make_it_favorite/", // NFT_ID //########-------------- DONE-------------##########//

  //SEARCH
  SEARCH: "front/nfts/search/", // /KEYWORD/USER_ID //########-------------- DONE-------------##########//
  GET_SEARCHING_HISTORY: "front/nfts/search/saved/", //USER ID //########-------------- DONE-------------##########//

  //Settings
  TermsandConditions: "front/settings/terms", //########--------------- NOT DONE-------------##########//
  PrivacyPolicy: "front/settings/privacy", //########--------------- NOT DONE-------------##########//
  AboutUs: "front/settings/description", //########--------------- NOT DONE-------------##########//

  //USER
  USER_DETAILS: "front/users/details/", //USER ID   //######## DONE##########//
  UPDATE_PROFILE: "front/users/update/", //USER ID  //########--------------DONE-------------##########//
  UPDATE_PASSWORD: "front/users/update_password/", //USER ID
  PACKAGES: "front/packages/list", //########--------------DONE-------------##########//
  UPDATE_USER_PACKAGE: "front/users/update_subscription/",
  DELETE_ACCOUNT: "front/users/delete/",
};
