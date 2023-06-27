import React from 'react'
import styles from './films.module.css'
import { useGetFilmsQuery } from '@/redax/services/filmsApi';
import OneMiniCardFilm from './OneMiniCardFilm';
import { useSelector } from 'react-redux';
import { selectAllFilms } from '@/redax/features/films/selectors';

export default function ListFilms() {

  
  const filmsFiltered = useSelector((state) => selectAllFilms(state));
 
  console.log(filmsFiltered);
  const { data, isLoading, error } = useGetFilmsQuery();

  if (isLoading) {return <div className={styles.listfilms}>Loading...</div>;}

  if (!data || error) { return <div className={styles.listfilms}>{'Error :((('}</div>;}
  
  return (
    <div className={styles.listfilms}>
      {filmsFiltered?.map(({id, title, posterUrl, genre}) =>  (
        <OneMiniCardFilm key={id} id={id} title={title} posterUrl={posterUrl} genre={genre}/>
      ))}
    </div>
  )}
