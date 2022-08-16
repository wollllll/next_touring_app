import Base from "../components/layouts/Base";
import React, { useEffect, useState } from "react";
import {GoogleMap, LoadScript, Marker, Polyline} from "@react-google-maps/api";
import { prisma } from "../prisma";

/**
 * @param spots
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({ spots }) {
  const [currentPosition, setCurrentPosition] = useState({
    lng: 139.7649308,
    lat: 35.6812362,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      setCurrentPosition({
        lng: success.coords.longitude,
        lat: success.coords.latitude,
      });
    });
  }, []);

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
          zoom={15}
          center={currentPosition}
        >
            {spots.map((spot) => {
                return (
                    <template key={spot.id}>
                        <Polyline path={JSON.parse(spot.path)} />
                        <Marker position={{lng: spot.startLng, lat: spot.startLat}}/>
                        <Marker position={{lng: spot.endLng, lat: spot.endLat}}/>
                    </template>
                )
            })}
        </GoogleMap>
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
