import { useEffect,useState } from "react";

export default  function useQuoteapi(){

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

useEffect(()=>{
const url = "https://thequoteshub.com/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.text);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Error fetching quote:", error));
    },[]);
return {quote,author}

}