import { useSession, signIn, signOut } from "next-auth/react"
import {useState} from "react";
import axios from "axios";

const Header = () => {
  const { data: session } = useSession()
    const [isStart, setIsStart] = useState(false)
    const [path, setPath] = useState([])
    const start = () => {
      setIsStart(true)

        navigator.geolocation.watchPosition((success)=> {
            path.push({lng: success.coords.longitude, lat: success.coords.latitude})

            setPath(path)
        });
    }
    const stop = () => {
        setIsStart(false)
        const firstPosition = path[0]
        const endPosition = path[path.length - 1]

        axios.post('api/spots/store', {
            userId: session.user.id,
            title: 'spot1',
            startLng: firstPosition.lng,
            startLat: firstPosition.lat,
            endLng: endPosition.lng,
            endLat: endPosition.lat,
            path: JSON.stringify(path)
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

  return (
    <>
      <header className="bg-primary shadow lg:px-40">
        <div className="navbar">
          <div className="navbar-start">
            {
              session ?
                  <button onClick={() => signOut()}>signOut</button> :
                  <button onClick={() => signIn()}>Sign in</button>
            }
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">峠マイスター</a>
          </div>
          <div className="navbar-end">
            <label htmlFor="add-modal" className="btn btn-ghost btn-circle">
                    <span className="material-icons">add</span>
            </label>
            <button className="btn btn-ghost btn-circle">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </header>
      <input type="checkbox" id="add-modal" className="modal-toggle"/>
      <label htmlFor="add-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">ルートの記録</h3>
            {
                isStart ?
                    <button onClick={stop} type="button">停止する</button> :
                    <button onClick={start} type="button">記録する</button>
            }
        </label>
      </label>
    </>
  );
};

export default Header;
