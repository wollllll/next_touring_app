import Base from "../components/layouts/Base";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { prisma } from "../prisma";

/**
 * @param spots
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ spots }) {
  console.log(spots);

  return (
    <Base>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "100vh",
            width: "100%",
          }}
          zoom={13}
          center={{
            lat: 35.6809591,
            lng: 139.7673068,
          }}
        />
      </LoadScript>
    </Base>
  );
}

/**
 * @returns {Promise<{props: {spots: *}}>}
 */
export const getServerSideProps = async () => {
  const spots = await prisma.spot.findMany();

  return {
    props: {
      spots,
    },
  };
};
