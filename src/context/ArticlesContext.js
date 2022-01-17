import { createContext } from "react";

export default createContext({
  articles: null,
  reload: () => {},
});
