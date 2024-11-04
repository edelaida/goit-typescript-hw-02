
import {FormEvent} from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "../ImageGallery/ImageGallery.module.css";
import React, {FC}  from "react";

const notify = () => toast("Please enter search term!");

interface SearchBarProps {
  onSearchBar: (name:string)=>void; 
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearchBar }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("name") as HTMLInputElement;
    const name = input.value;
    if (name.length === 0) {
      notify();
    } else {
      onSearchBar(name);
      form.reset();
    }
  };

  return (
    <form className={s.infoform} onSubmit={handleSubmit}>
      <h2>Add new pictures</h2>
      <input type="text" name="name" placeholder="Search name..." />
      <button type="submit">▶ Serch new pictures</button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
