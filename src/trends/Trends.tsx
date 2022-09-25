import { SearchBar } from "./SearchBar";
import { TrendsList } from "./TrendsList";

export const Trends = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <TrendsList />
      </div>
    </div>
  );
};
