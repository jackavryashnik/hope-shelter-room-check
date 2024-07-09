import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { uiAtom } from '../../state';
import { useAtom, useSetAtom } from 'jotai';
import { socket } from '../../api/services/rooms';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import css from './RoomsPage.module.css';

const RoomsPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const setUi = useSetAtom(uiAtom);
  const [ui] = useAtom(uiAtom);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server room');
    });

    socket.on('bedsFetched', data => {
      setRooms(data.rooms);
    });
  }, [ui.modal]);

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
      <Header isLoggedIn={isLoggedIn} />
      <Layout>
        <div className={css.roomsList}>
          {rooms &&
            rooms.map(room => {
              return (
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
                  <p className={css.roomNumber}>Room {room.roomNumber}</p>
                  <div
                    style={{ width: `${calculatePercentage(room)}%` }}
                    className={`${css.filling} ${css[colorClass(room)]}`}
                  ></div>
                </span>
              );
            })}
          <Modal />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default RoomsPage;
