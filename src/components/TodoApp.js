// authentication, login, logout

import { LoginButton } from './LoginButton'
import {LogoutButton } from './LogoutButton'
import { Authentication } from './Authentication'
import Header from './Header'
import { useAuth0 } from "@auth0/auth0-react";

const TodoApp = () => {
  const { isLoading } = useAuth0()
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <Header />
      <LoginButton />
      <LogoutButton />
      <Authentication />
    </div>
  )
};

export default TodoApp;
