import { useEffect, useState } from "react";
import { Platform } from "react-native";

import Purchases, { CustomerInfo, PurchasesOffering } from "react-native-purchases";
import APIKeys from "../apikeys";

/* ATTENTION!!!
You should save these key in enviroment variables.
This is for demo purposes */
// const APIKeys = {
//   apple: "",
//   google: ""
// }

const typesOfMembership = {
  monthly: 'pro',
  yearly: 'proYearly'
}

const useRevenewCat = () => {
  /* 1. What options we have (pro-monthly, pro-yearly),
     2. Custom current information and current state
     3. Is user a pro member.  */
  const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // console.log(currentOffering)
  const isProMember =
    customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly) ||
    customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly);

  // console.log(customerInfo?.entitlements.active.pro)
  // const isProMember = customerInfo?.entitlements.active.pro

  useEffect(() => {
    (async () => {
      try {
        Purchases.setDebugLogsEnabled(true);

        if (Platform.OS === 'android')
          await Purchases.configure({ apiKey: APIKeys.google })
        else
          await Purchases.configure({ apiKey: APIKeys.apple })

        const offerings = Purchases.getOfferings();
        const customerInfo = Purchases.getCustomerInfo();

        // console.log((await offerings).current)

        setCurrentOffering((await offerings).current);
        setCustomerInfo(await customerInfo);
      } catch (error) {
        console.log(error)
        console.error
      }
    })()
  }, [])

  // Listener
  useEffect(() => {
    const customerInfoUpdated = async (purchaserInfo: CustomerInfo) => {
      setCustomerInfo(purchaserInfo)
    }
    Purchases.addCustomerInfoUpdateListener(customerInfoUpdated)

    // Tip: do this to check the type of `a`
    // Purchases.addCustomerInfoUpdateListener((a) => customerInfoUpdated)
  }, [])

  return { currentOffering, customerInfo, isProMember }
}

export default useRevenewCat;