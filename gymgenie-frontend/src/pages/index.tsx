// src/app/pages/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  const handleCreatePlanClick = () => {
    router.push('/create-plan');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div>
      <Head>
        <title>Gym Genie</title>
        <link rel="icon" href="/favicon.ico" />
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
        <h2 className="text-4xl font-bold mb-4">Achieve Your Fitness Goals</h2>
        <p className="mb-8 text-lg">Let's create a custom plan for you</p>
        <button
          onClick={handleCreatePlanClick}
          className="bg-genie hover:bg-genie-dark text-white font-semibold py-2 px-6 rounded"
        >
          Create a Plan
        </button>
      </main>

      <footer className="bg-genie-dark text-white p-4 text-center">
        © 2024 Gym Genie. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
