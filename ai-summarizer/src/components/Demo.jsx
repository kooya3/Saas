import React, { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",

  });

  const [allArticles, setAllArticles] =useState([]);
  const [copied, setCopied] = useState("");
  
  return (
    <div>Demo</div>
  )
}

export default Demo