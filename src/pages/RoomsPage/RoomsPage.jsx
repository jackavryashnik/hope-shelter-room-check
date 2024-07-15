import { useEffect, useState } from 'react';
import { uiAtom, userAtom } from '../../state';
import { useAtom, useSetAtom } from 'jotai';
import { socket } from '../../api/services/rooms';
import { getUser } from '../../api/services/auth';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import css from './RoomsPage.module.css';
import loadRoomComponent from '../../utils/loadRoomComponent';

const RoomsPage = () => {
  const [ui, setUi] = useAtom(uiAtom);
  const setUser = useSetAtom(userAtom);
  const [rooms, setRooms] = useState([]);
  const [RoomComponent, setRoomComponent] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server room');
    });

    socket.on('bedsFetched', data => {
      setRooms(data.rooms);
    });

    socket.on('updateRoom', updatedRoom => {
      setRooms(prevRooms =>
        prevRooms.map(room =>
          room._id === updatedRoom.roomId
            ? {
                ...room,
                bedsTaken: updatedRoom.bedsTaken,
                beds: updatedRoom.beds,
              }
            : room
        )
      );
    });

    return () => {
      socket.off('connect');
      socket.off('bedsFetched');
      socket.off('updateRoom');
    };
  }, [ui.modal]);

  useEffect(() => {
    if (ui.room) {
      loadRoomComponent(ui.room.roomNumber).then(component => {
        if (component) {
          setRoomComponent(() => component);
        } else {
          console.error(`No component found for room ${ui.room.roomNumber}`);
          setRoomComponent(null);
        }
      });
    }
  }, [ui.room]);

  useEffect(() => {
    const findUser = async () => {
      const token = localStorage.getItem('token');

      if (token !== null) {
        const result = await getUser({ token });
        const user = result.data.user;
        setUser(user);
      }
    };

    findUser();
  }, [setUser]);

  const calculatePercentage = room => (room.bedsTaken / room.totalBeds) * 100;

  const colorClass = room => {
    const percent = calculatePercentage(room);
    if (percent <= 30) return 'green';
    if (percent > 30 && percent < 80) return 'yellow';
    if (percent >= 80) return 'red';
    return '';
  };

  return (
    <div className={css.page}>
      <Header />
      <Layout>
        <div className={css.roomsList}>
          {rooms &&
            rooms.map(room => (
              <span
                key={room._id}
                className={css.room}
                onClick={() => {
                  setUi(prev => ({
                    ...prev,
                    modal: true,
                    room: room,
                  }));
                }}
              >
                <p className={css.roomNumber}>
                  Room {room.roomNumber === '934' ? '9 ¾' : room.roomNumber}
                </p>
                <div
                  style={{ width: `${calculatePercentage(room)}%` }}
                  className={`${css.filling} ${css[colorClass(room)]}`}
                ></div>
              </span>
            ))}
          <Modal>{RoomComponent && <RoomComponent />}</Modal>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default RoomsPage;
