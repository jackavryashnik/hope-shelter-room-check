import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import { getUsers, updateUserRole } from '../../api/services/admin';
import css from './AdminPage.module.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUserRole = async id => {
    const user = users.map(user => user._id === id);
    const role = user.role;

    try {
      await updateUserRole(id, role);
      handleGetUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleChangeState = (id, role) => {
    setUsers(prevUsers =>
      prevUsers.map(user => (user._id === id ? { ...user, role } : user))
    );
  };

  const handleChange = e => {
    const role = e.currentTarget.value;
    const id = e.target.id;

    handleChangeState(id, role);
  };

  const handleGetUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <Header />
      <div className={css.page}>
        <Layout>
          <h2 className={css.title}>Admin dashboard</h2>
          <div className={css.tableContainer}>
            <table className={css.table}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map(user => (
                    <tr key={user._id} className={css.row}>
                      <td className={css.tdName}>{user.username}</td>
                      <td className={css.tdEmail}>{user.email}</td>
                      <td>
                        <select
                          className={css.select}
                          name="role"
                          id={user._id}
                          value={user.role}
                          onChange={handleChange}
                        >
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                          <option value="superadmin">superadmin</option>
                        </select>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={css.btn}
                          onClick={() => handleUpdateUserRole(user._id)}
                        >
                          Change role
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Layout>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
