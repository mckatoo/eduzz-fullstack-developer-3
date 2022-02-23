import { useContext } from "react";
import ShortenerContext, { ShortenerContextProps } from '../providers/context';

const useShortener = () => useContext<ShortenerContextProps>(
  ShortenerContext
)

export { useShortener };