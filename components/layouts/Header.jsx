import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const { data: session } = useSession();
  const [intervalId, setIntervalId] = useState(null);
  const [path, setPath] = useState([]);
  const start = () => {
    setIntervalId(true);

    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          const previousPath = path[path.length - 1];
          const lng = success.coords.longitude;
          const lat = success.coords.latitude;

          if (previousPath) {
            if (previousPath.lng === lng && previousPath.lat === lat) return;
          }

          console.log(previousPath);
          path.push({ lng, lat });
          setPath(path);
        },
        () => alert("errorrrrrrrrr"),
        {
          enableHighAccuracy: true,
        }
      );
    }, 1000);
  };

  const stop = () => {
    setIntervalId(null);
    const firstPosition = path[0];
    const endPosition = path[path.length - 1];

    axios
      .post("api/spots/store", {
        userId: session.user.id,
        title: "spot1",
        startLng: firstPosition.lng,
        startLat: firstPosition.lat,
        endLng: endPosition.lng,
        endLat: endPosition.lat,
        path: JSON.stringify(path),
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header className="bg-primary shadow lg:px-40">
        <div className="navbar">
          <div className="navbar-start">
            {session ? (
              <button onClick={() => signOut()}>signOut</button>
            ) : (
              <button onClick={() => signIn()}>Sign in</button>
            )}
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">峠マイスター</a>
          </div>
          <div className="navbar-end">
            {session && (
              <label htmlFor="add-modal" className="btn btn-ghost btn-circle">
                <span className="material-icons">add</span>
              </label>
            )}
            <button className="btn btn-ghost btn-circle">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </header>
      <input type="checkbox" id="add-modal" className="modal-toggle" />
      <label htmlFor="add-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">ルートの記録</h3>
          <p className="py-4">ルートの記録を開始しますか？</p>
          <div className="modal-action">
            {intervalId ? (
              <button onClick={stop} type="button" className="btn">
                停止する
              </button>
            ) : (
              <button onClick={start} type="button" className="btn">
                記録する
              </button>
            )}
          </div>
        </label>
      </label>
    </>
  );
};

export default Header;
