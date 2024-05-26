import { useRouter } from 'next/router';
import Head from 'next/head';

const Results: React.FC = () => {
  const router = useRouter();
  const { data } = router.query;

  return (
    <div>
      <Head>
        <title>Results - Gym Genie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-genie-dark text-white fixed w-full z-10 top-0 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => router.push('/')}
          >
            Gym Genie
          </h1>
          <div className="bg-genie-light hover:bg-genie text-white font-semibold p-2 rounded-full w-10 h-10 flex items-center justify-center">
            D
          </div>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center h-80vh bg-genie-light text-white pt-16 overflow-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="bg-white text-black text-2xl font-bold mb-4">Your Plan</h2>
          <pre className="bg-white text-black whitespace-pre-wrap">{data && data.replace(/\*/g, '')}</pre>
        </div>
      </main>

      <footer className="bg-genie-dark text-white p-4 text-center">
        © 2024 Gym Genie. All rights reserved.
      </footer>
    </div>
  );
};

export default Results;
