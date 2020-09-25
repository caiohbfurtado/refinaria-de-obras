import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import * as S from './styles';

import api from '../../services/api';

function BoxModal({ onClick, curr }) {
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await api
        .get(`?apikey=f3bf5049&i=${curr}&plot=full`)
        .then((res) => {
          setFilm(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    })();
  }, []);

  return (
    <S.Box>
      {loading ? (
        <S.Loading loading={loading}>
          <FaSpinner />
        </S.Loading>
      ) : (
        <>
          <MdClose onClick={onClick} />
          <h1>{film.Title}</h1>
          <img src={film.Poster} alt={`pôster do filme ${film.Title}`} />
          <S.Infos>
            <p>
              <strong>Ano:</strong> {film.Year}
            </p>
            <p>
              <strong>Gênero(s):</strong> {film.Genre}
            </p>
            <p>
              <strong>Diretor:</strong> {film.Director}
            </p>
            <p>
              <strong>Atores:</strong> {film.Actors}
            </p>
          </S.Infos>
        </>
      )}
    </S.Box>
  );
}

export default BoxModal;
