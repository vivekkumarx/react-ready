import { useNavigate } from 'react-router-dom';
import * as PATH from 'constants/uiPaths.constants';

import { useGetRandomUsersListQuery } from 'redux/services/user';

import { Loader } from 'components/basic';
import { ProfileCard } from 'components/advanced';

const UsersPage = () => {
  const { data, error, isLoading } = useGetRandomUsersListQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return navigate(PATH.ERROR);
  }

  const { results: users } = data;

  return users.map((user, idx) => {
    return <ProfileCard user={user} key={idx} />;
  });
};

export default UsersPage;
