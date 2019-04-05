/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  return fetch("https://veff2-verkefni4.herokuapp.com/"+id, {
    method: "DELETE",
  })
  .then(response => response.json());
}

export async function addTodo(title, due) {
  /* todo */
}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
}

export async function getTodos(hideCompleted = undefined) {
  const newURL = "https://veff2-verkefni4.herokuapp.com/";
  const response = await fetch(newURL);

  return await response.json();
}

export async function getTodo(id) {

  const todo = await getTodos();
  const foundTodo = todo.find(i => i.id === Number(id));
  console.log("logginn: ",todo);
  return foundTodo;

}
