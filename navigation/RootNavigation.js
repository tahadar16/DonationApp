import React from "react";

import {useSelector} from 'react-redux';
import {AuthenticatedStackNavigator, NonAuthenticatedStackNavigator} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? <AuthenticatedStackNavigator /> : <NonAuthenticatedStackNavigator />;
};

export default RootNavigation;