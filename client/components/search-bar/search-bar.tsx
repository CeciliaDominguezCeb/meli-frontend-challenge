"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "react-feather";
import classes from "./search.module.css";
import { FormEvent, useEffect, useState } from "react";
import LogoSmall from "../logo-header/logo-header";

interface SearchProps {
  path: string;
  param: string;
}

export default function Search({ path, param }: Readonly<SearchProps>) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get(param) ?? "";

  useEffect(() => {
    setSearch(searchParam);
  }, [searchParam]);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (!search) {
      return;
    }

    router.push(`/${path}?${param}=${search}`);
  };

  return (
    <header className={classes.header}>
    < LogoSmall />
    <div className={classes.search}>
      <form className={classes.form} onSubmit={handleSearch}>
        <input
          className={classes.input}
          type="search"
          name={param}
          value={search}
          placeholder="Nunca dejes de buscar"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={classes.button} type="submit" >
         <SearchIcon size={20} />
        </button>
      </form>
    </div>
    </header>
  );
}