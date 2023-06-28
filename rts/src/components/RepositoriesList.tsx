import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state";
import { useTypedSeletor } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSeletor(
    (state: RootState) => state.repositories
  );

  // console.log(data);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <div>{data && data.map((item) => <p>{item}</p>)}</div>
    </div>
  );
};
