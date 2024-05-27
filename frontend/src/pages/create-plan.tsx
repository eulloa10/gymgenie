// src/pages/create-plan.tsx
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const CreatePlan: React.FC = () => {
  const router = useRouter();
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(150);
  const [height, setHeight] = useState(60); // In inches (5 feet)
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'lose weight' | 'strength' | 'hypertrophy' | 'endurance'>('lose weight');
  const [timeFrame, setTimeFrame] = useState(12); // Default: 12 weeks

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleAPICall = async () => {
    let prompt = `Give us one ideal fitness and one ideal diet plan for a ${age} year old, ${gender}, that weights ${weight} lbs, is ${Math.floor(
      height / 12)} ft ${height % 12} in, has a goal of ${goal}, in the following timeframe ${timeFrame} weeks. Give the response in less than 400 tokens.`;
    try {
      const response = await fetch('https://gymgeniepy.onrender.com/generate_text_stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "response_mime_type": "application/text",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.text();
      router.push({
        pathname: '/results',
        query: { data },
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Your Plan - Gym Genie</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <header className="bg-genie-dark text-white fixed w-full z-10 top-0 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={handleHomeClick}>
            Gym Genie
          </h1>
          <div className="bg-genie-light hover:bg-genie text-white font-semibold p-2 rounded-full w-10 h-10 flex items-center justify-center">
            D
          </div>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center h-screen bg-genie-light text-white pt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-black mb-2">Age: {age}</label>
            <input
              type="range"
              min="1"
              max="110"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Weight: {weight} lbs</label>
            <input
              type="range"
              min="10"
              max="500"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">
              Height: {Math.floor(height / 12)} ft {height % 12} in
            </label>
            <input
              type="range"
              min="24"
              max="90"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Gender: {gender}</label>
            <div className="flex">
              <button
                onClick={() => setGender('male')}
                className={`p-2 flex-1 ${
                  gender === 'male' ? 'bg-genie-dark' : 'bg-genie-light'
                } text-white font-semibold rounded-l-lg`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`p-2 flex-1 ${
                  gender === 'female' ? 'bg-genie-dark' : 'bg-genie-light'
                } text-white font-semibold rounded-r-lg`}
              >
                Female
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Goal</label>
            <select
              value={goal}
              onChange={(e) =>
                setGoal(e.target.value as 'lose weight' | 'strength' | 'hypertrophy' | 'endurance')
              }
              className="w-full border rounded p-2 bg-white text-black"
            >
              <option value="lose weight">Lose Weight</option>
              <option value="strength">Strength</option>
              <option value="hypertrophy">Hypertrophy</option>
              <option value="endurance">Endurance</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Time Frame: {timeFrame} weeks</label>
            <input
              type="range"
              min="2"
              max="52"
              value={timeFrame}
              onChange={(e) => setTimeFrame(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={handleAPICall}
            className="bg-genie hover:bg-genie-dark text-white font-semibold py-2 px-4 rounded w-full"
          >
            Create Plan
          </button>
        </div>
      </main>

      <footer className="bg-genie-dark text-white p-4 text-center">
        © 2024 Gym Genie. All rights reserved.
      </footer>
    </div>
  );
};

export default CreatePlan;
