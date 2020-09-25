import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

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
  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await api
        .get(`${title}&plot=short&type=${type}&page=${page}`)
        .then((res) => {
          setLoading(false);
          if (res.data.Search) {
            setFilms(res.data.Search);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    })();
  }, [page]);

  const handleSearch = async () => {
    setLoading(true);
    await api
      .get(`${title}&plot=short&type=${type}&page=3`)
      .then((res) => {
        setLoading(false);
        setFilms(res.data.Search);
        setTotal(res.data.totalResults);
      })
      .catch(() => setLoading(false));
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
        {loading ? (
          <S.Loading loading={loading}>
            <FaSpinner />
          </S.Loading>
        ) : (
          <>
            {!films && <S.NoResults>Título não encontrado!</S.NoResults>}

            {films !== undefined && (
              <S.List>
                {films.length > 0 &&
                  films.map((item) => (
                    <ItemResult
                      title={item.Title}
                      year={item.Year}
                      key={item.imdbID}
                    />
                  ))}
              </S.List>
            )}

            {films !== undefined && films.length > 0 && (
              <S.Footer>
                <S.Button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  <MdKeyboardArrowLeft />
                  Página Anterior
                </S.Button>

                <p>
                  pág. {page} de {Math.ceil(Number(total) / 10)}
                </p>

                <S.Button
                  disabled={page >= Math.ceil(Number(total) / 10)}
                  onClick={() => setPage(page + 1)}
                >
                  Próxima página <MdKeyboardArrowRight />
                </S.Button>
              </S.Footer>
            )}
          </>
        )}
      </S.ResultsContainer>
    </S.Container>
  );
}

export default App;
