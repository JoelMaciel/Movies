import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../service/api";
import "./filme-info.css";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();

    return () => {
      console.log("COMPONENTE DESMONTADO.");
    };
  }, [history, id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      {filme.sinopse}
      <div className="botoes">
        <button onClick={() => {}}>Salvar</button>
        <button>
          <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} rel="noreferrer">
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
