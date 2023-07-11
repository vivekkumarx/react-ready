import { useNavigate } from 'react-router-dom';
import * as PATH from 'constants/uiPaths.constants';

import { useGetRandomUserQuery } from 'redux/services/user';

import { Loader } from 'components/basic';
import { ProfileCard } from 'components/advanced';

const ProfilePage = () => {
  const { data, error, isLoading } = useGetRandomUserQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return navigate(PATH.ERROR);
  }

  const { results: users } = data;

  return users.map((user, idx) => {
    return <ProfileCard variant="extended" user={user} key={idx} />;
  });
};

export default ProfilePage;
