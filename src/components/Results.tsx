import { type } from "os";

type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

export const Results = ({ results }: ResultsPropsType) => {
    const { cityName, country, temperature, conditionText, icon } = results;
    return (
        <div>
            {cityName &&
                <div className="results-city">
                    {cityName}
                </div>}
            {country &&
                <div className="results-country">
                    {country}
                </div>}
            {temperature &&
                <div className="results-temp">
                    {temperature}
                    <span> degree</span>
                </div>}
            {conditionText &&
                <div className="results-condition">
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div>}
        </div>
    );
};