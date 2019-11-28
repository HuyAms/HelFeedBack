import { UserGroup } from "../models/App";

export const setToken = (token: string) => {
	localStorage.setItem('token', token)
}

export const getToken = () => {
	return localStorage.getItem('token')
}

export const setGroup = (group: UserGroup) => {
  localStorage.setItem('userGroup', group)
}

export const getUserGroup = (): UserGroup => {
  return localStorage.getItem('userGroup') as UserGroup
}

export const setUserId = (userId: string) => {
	localStorage.setItem('userId', userId)
}

export const getUserId = () => {
	return localStorage.getItem('userId')
}

export const clearLocalStorage = () => {
	localStorage.clear()
}
