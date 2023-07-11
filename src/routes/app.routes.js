import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as PATH from 'constants/uiPaths.constants';

import { AppHeader } from 'components/advanced';
import { ErrorHandler } from 'components/system';
import { Loader } from 'components/basic';

const HomePage = lazy(() => import('pages/home.page'));
const ProfilePage = lazy(() => import('pages/profile.page'));
const UsersPage = lazy(() => import('pages/users.page'));
const PageNotFound = lazy(() => import('pages/page.not.found.page'));
const ErrorPage = lazy(() => import('pages/error.page'));

const AppRoutes = () => (
  <ErrorHandler>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={PATH.ROOT} element={<HomePage />} />
          <Route path={PATH.PROFILE} element={<ProfilePage />} />
          <Route path={PATH.USERS} element={<UsersPage />} />
          <Route path={PATH.UNKNOWN} element={<PageNotFound />} />
          <Route path={PATH.ERROR} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </ErrorHandler>
);

export default AppRoutes;
