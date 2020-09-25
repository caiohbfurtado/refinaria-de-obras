import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import api from '../services/api';

import Title from '../components/Title';
import Button from '../components/Button';
import ItemResult from '../components/ItemResult';

import * as S from './styles';

function App() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(false);
  const [total, setTotal] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `${title}&plot=short&type=${type}&page=${page}`
      );

      if (response.data.Search) {
        setFilms(response.data.Search);
      }
    })();

    (async () => {
      const pages = await api.get(
        `${title}&plot=short&type=${type}&page=${page + 1}`
      );

      if (!pages.data.Search) {
        setNext(false);
      } else {
        setNext(true);
      }
    })();
  }, [page]);

  const handleSearch = async () => {
    const response = await api.get(`${title}&plot=short&type=${type}&page=3`);
    const pages = await api.get(
      `${title}&plot=short&type=${type}&page=${page + 1}`
    );
    if (!pages.data.Search) {
      setNext(false);
    } else {
      setNext(true);
    }

    if (response.data) {
      setFilms(response.data.Search);
      setTotal(response.data.totalResults);
    }
  };

  return (
    <S.Container>
      <S.ContainerSearch>
        <Title>Pesquisar</Title>
        <S.Subtitle>O que deseja buscar?</S.Subtitle>
        <S.Buttons>
          <Button
            title="Filmes"
            onClick={() => setType('movie')}
            selected={type === 'movie'}
          />
          <Button
            title="séries"
            onClick={() => setType('series')}
            selected={type === 'series'}
          />
        </S.Buttons>
        <S.Input
          placeholder="Informe o título da obra"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          title="pesquisar"
          color
          onClick={handleSearch}
          disabled={!type || !title}
        />
      </S.ContainerSearch>
      <S.ResultsContainer>
        <Title>
          resultados da busca{' '}
          <S.Total total={total}>{total} resultados</S.Total>
        </Title>

        {films !== undefined && (
          <S.List>
            {films.length > 0 &&
              films.map((item) => (
                <ItemResult title={item.Title} year={item.Year} />
              ))}
          </S.List>
        )}

        {films !== undefined && films.length > 0 && (
          <S.Footer>
            <S.Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              <MdKeyboardArrowLeft />
              Página Anterior
            </S.Button>

            <p>
              pág. {page} de {Math.ceil(Number(total) / 10)}
            </p>

            <S.Button disabled={!next} onClick={() => setPage(page + 1)}>
              Próxima página <MdKeyboardArrowRight />
            </S.Button>
          </S.Footer>
        )}
      </S.ResultsContainer>
    </S.Container>
  );
}

export default App;
