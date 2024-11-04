import React, {FC} from "react";

interface LoadMoreBtnProps {
  onSearchPage: ()=>void; 
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onSearchPage}) => {
  return (
    <button onClick={onSearchPage} type="submit">
      Load more... Load more
    </button>
  );
};

export default LoadMoreBtn;
