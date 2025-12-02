import React, { useEffect, useState } from "react";
import "./BestDealForMobile.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import {querySnapshotToArray} from '../utils/helperFunction'
import MobileDetailPage from "../MobilesDetails/MobileDetails";

// const phones = [
//   {
//     name: 'Vivo T4 5G',
//     price: '20499',
//     image: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x100-ultra-1.jpg', // Placeholder image
//   },
//   {
//     name: 'Motorola G85 5G',
//     price: '14999',
//     image: 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-50-fusion-1.jpg',
//   },
//   {
//     name: 'Oppo K13 5G',
//     price: '16499',
//     image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfDgPxfXI5_kta8hkmk1sX2c7M-b4GgzoDsVcxs-gk1cM_OokmfwHQy14Lwucn_5BByLULAkpef1abSvTj5SXTnw-HtKv2jl1jELPS3mo',
//   },
//   {
//     name: 'Realme P3 5G',
//     price: '15999',
//     image: 'https://fdn2.gsmarena.com/vv/pics/realme/realme-gt-neo6-se-1.jpg',
//   },
//   {
//     name: 'Motorola G45 5G',
//     price: '10999',
//     image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHjnLcubQYooHvHrb61GXECQGNlXuEVz3eeRb1WHxsP2RE94kUHVZy5b0uaB7PnWJ2wtQY-tN_swd5a5Sj2-qFf3c9UrmdU3YW3w9cXXdNcLEOKprUdlRt',
//   },
//   {
//     name: 'Realme P3 5G',
//     price: '15999',
//     image: 'https://fdn2.gsmarena.com/vv/pics/realme/realme-gt-neo6-se-1.jpg',
//   },
//   {
//     name: 'Motorola G45 5G',
//     price: '10999',
//     image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHjnLcubQYooHvHrb61GXECQGNlXuEVz3eeRb1WHxsP2RE94kUHVZy5b0uaB7PnWJ2wtQY-tN_swd5a5Sj2-qFf3c9UrmdU3YW3w9cXXdNcLEOKprUdlRt',
//   },
// ];

const BestDealForMobile = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getPhoneData = async () => {
      try{
      //   const dbProductRef = db.collection("products");
      // const productsSnapShot = await dbProductRef.get();
      // console.log("productsSnapShot",productsSnapShot)}
      const snap = await getDocs(collection(db, "products"));
      const pppd = await querySnapshotToArray(snap);
      setPhones(pppd)
      }
      catch(err){
        console.log("error",err)
      }
    };
    getPhoneData()
  }, []);

  console.error("best mobile phone",)

  return (
    <div className="deals-container">
      {/* <h2 className="title">Best Deals on Smartphones</h2> */}
    <MobileDetailPage/>
    </div>
  );
};

export default BestDealForMobile;
