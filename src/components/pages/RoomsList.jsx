import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { RoomCard } from '../card/RoomCard.jsx';
import RoomDetail from "../room/RoomDetail"
import "./homes-list/HomesList.css";
import { FormattedMessage } from 'react-intl';
function RoomsList() {

    let   { id } = useParams();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [rooms, setrooms] = useState([])
    const [data,setData] =useState([]);
    const [message, setMessage] = useState("");

  
  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null) {
        setMessage("Error while connecting with API. Try again.");
      } else {
        setrooms(JSON.parse(localStorage.getItem("rooms")));
      }
    } else {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setrooms(data);
          localStorage.setItem("rooms", JSON.stringify(data));
        });
    }
  }, []);

  const selectRoomCallBack=(id)=>(e)=>{
    let selectedRoom = rooms.filter((room)=> room._id===id);
    setSelectedRoom(selectedRoom[0]);
  }

  return (
      <div className="container home">
              <h1>
        <FormattedMessage id="myRooms"/>
      </h1>
        <div className="homeList" style={{alignItems:"space-between"}}>
            {rooms && rooms.map((room)=>(
                <RoomCard selectCallback={selectRoomCallBack} props={room}/>
            ))}
             <div style={{marginLeft:"8px"}}>
                {selectedRoom && <RoomDetail room={selectedRoom}/>}
             </div>
        </div>
            <h3>   <FormattedMessage id="stats" /></h3>
        </div>
        
    )
}

export default RoomsList
