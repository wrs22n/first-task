import { useState } from 'react';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = (props) => (
    <tr>
        <th>{props.text}</th>
        <td>{props.value}</td>
    </tr>
);

const Statistics = (props) => {
    if (props.total === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <table>
            <tbody>
                <StatisticLine text={'good'} value={props.good} />
                <StatisticLine text={'neutral'} value={props.neutral} />
                <StatisticLine text={'bad'} value={props.bad} />
                <StatisticLine text={'all'} value={props.total} />
                <StatisticLine text={'average'} value={props.average} />
                <StatisticLine text={'positive'} value={props.positive} />
            </tbody>
        </table>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positive = total === 0 ? 0 : (good / total) * 100;

    const handleGoodClick = () => {
        setGood(good + 1);
    };

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    };

    const handleBadClick = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h2>Give Feedback</h2>
            <Button text={'good'} onClick={handleGoodClick} />
            <Button text={'neutral'} onClick={handleNeutralClick} />
            <Button text={'bad'} onClick={handleBadClick} />
            <h2>Statistics</h2>
            <Statistics
                total={total}
                neutral={neutral}
                good={good}
                bad={bad}
                average={average}
                positive={positive}
            />
        </div>
    );
};

export default App;
