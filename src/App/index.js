import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import api from '../services/api';

import Title from '../components/Title';
import Button from '../components/Button';
import ItemResult from '../components/ItemResult';
import Modal from '../components/Modal';
import Box from '../components/BoxModal';

import * as S from './styles';

function App() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [idCurr, setIdCurr] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await api
        .get(`?apikey=f3bf5049&s=${title}&plot=short&type=${type}&page=${page}`)
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

  const viewDetails = async (id) => {
    setModal(true);
    setIdCurr(id);
  };

  const closeDetails = () => {
    setModal(false);
    setIdCurr(null);
  };

  const handleSearch = async () => {
    setLoading(true);
    await api
      .get(`?apikey=f3bf5049&s=${title}&plot=short&type=${type}&page=1`)
      .then((res) => {
        setLoading(false);
        setFilms(res.data.Search);
        setTotal(res.data.totalResults);
        setPage(1);
      })
      .catch(() => setLoading(false));
  };

  return (
    <S.Container>
      {modal && (
        <Modal>
          <Box curr={idCurr} onClick={closeDetails} />
        </Modal>
      )}
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
                      onClick={() => viewDetails(item.imdbID)}
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
                </S.Button>

                <p>
                  pág. {page} de {Math.ceil(Number(total) / 10)}
                </p>

                <S.Button
                  disabled={page >= Math.ceil(Number(total) / 10)}
                  onClick={() => setPage(page + 1)}
                >
                  <MdKeyboardArrowRight />
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
