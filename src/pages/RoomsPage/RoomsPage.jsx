import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';

import { uiAtom } from '../../state';
import { useAtom, useSetAtom } from 'jotai';
import { socket } from '../../api/services/rooms';

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

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Layout>
        Rooms page
        <div className={'display:flex flex-direction:column'}>
          {rooms &&
            rooms.map(i => {
              return (
                <button
                  key={i._id}
                  onClick={() => {
                    setUi(prev => ({
                      ...prev,
                      modal: true,
                    }));
                  }}
                >
                  room number: {i.roomNumber}
                  beds taken: {i.bedsTaken}
                </button>
              );
            })}
          <Modal />
        </div>
      </Layout>
    </>
  );
};

export default RoomsPage;
