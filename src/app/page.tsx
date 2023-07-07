import CountriesOverview from "./components/CountriesOverview";
import getData from "./libs/getData";
import * as apiResponseTypes from "./libs/types/apiResponseTypes";

export default async function Home() {
  const data: apiResponseTypes.Country[] = await getData(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <>
      <CountriesOverview data={data} />
    </>
  );
}
