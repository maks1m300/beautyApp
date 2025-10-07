import WebApp from "@twa-dev/sdk";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setName } from '../../slice/userSlice'

import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../../store' 

export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUser = () => {
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.user.userName)

  const setUserName = (name: string) => {
    dispatch(setName(name))
  }
  const initDataUnsafe = WebApp.initDataUnsafe;

  useEffect(() => {
    if (initDataUnsafe.user?.username)
      setUserName(initDataUnsafe.user?.username);

    return () => {
      setUserName("");
    };
  }, [initDataUnsafe]);

  return {
    userName,
    setUserName,
  }
}