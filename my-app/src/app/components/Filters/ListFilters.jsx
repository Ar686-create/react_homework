'use client';

import React, { useEffect, useState } from 'react';
import styles from '../Filters/filters.module.css';
import { useGetFilmsQuery } from '@/redax/services/filmsApi';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { filmsActions } from '@/redax/features/films';

export default function ListFilters() {
  let timeoutId = null;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const { data, isLoading, error } = useGetFilmsQuery();

  useEffect(() => {
    if (!isLoading && !error && data) {
      applyFilter(filter);
    }
  }, [filter, data]);

  const applyFilter = (filter) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const filteredData = data.filter(({ title }) =>
        title.toLowerCase().includes(filter.toLowerCase())
      );
      dispatch(filmsActions.writeData(filteredData));
    }, 500);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <div>
        <div>Фильтр поиска</div>
        <p>Название</p>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Введите название"
        />
        <p>Жанр</p>
        <p>
          <input type="text" placeholder="Введите название" />
        </p>
        <p>Кинотеатр</p>
        <p>
          <input type="text" placeholder="Введите название" />
        </p>
      </div>
    </div>
  );
}
