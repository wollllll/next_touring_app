import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const { data: session } = useSession();
  const [intervalId, setIntervalId] = useState(null);
  const [path, setPath] = useState([]);
  const [isShownModal, setIsShownModal] = useState(false)

  const start = () => {
    getCurrentPosition();
    setIntervalId(setInterval(getCurrentPosition, 2000));
  };
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const previousPath = path[path.length - 1];
        const lng = success.coords.longitude;
        const lat = success.coords.latitude;

        if (previousPath) {
          if (previousPath.lng === lng && previousPath.lat === lat) return;
        }

        path.push({ lng, lat });
        setPath(path);
      },
      () => alert("errorrrrrrrrr"),
      {
        enableHighAccuracy: true,
      }
    );
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
              <label onClick={() => setIsShownModal(true)} htmlFor="add-modal" className="btn btn-ghost btn-circle">
                <span className="material-icons">add</span>
              </label>
            )}
            <button className="btn btn-ghost btn-circle">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </header>
      <div className={isShownModal ? 'modal modal-open' : 'modal'}>
        <div className="modal-box relative">
          {!intervalId && (
            <label
                onClick={() => setIsShownModal(false)}
              htmlFor="add-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          )}
          <h3 className="text-lg font-bold">ルートの記録</h3>
          <p className="py-4">
            {intervalId ? (
              <span>
                記録中です...
                <br />
                記録を停止する場合は停止するボタンを押してください。
              </span>
            ) : (
              <span>ルートの記録を開始しますか？</span>
            )}
          </p>
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
        </div>
      </div>
    </>
  );
};

export default Header;
