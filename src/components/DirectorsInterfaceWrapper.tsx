import dynamic from 'next/dynamic';

const DirectorsInterface = dynamic(() => import('./DirectorsInterface'), {
  loading: () => (
    <div className="min-h-screen bg-deep-blue flex items-center justify-center">
      <div className="text-center">
        <div className="spinner w-8 h-8 mx-auto mb-4" />
        <p className="text-golden-accent">Loading Director's Interface...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export default DirectorsInterface;
