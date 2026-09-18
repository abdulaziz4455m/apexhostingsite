import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-slate-900 px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-8xl font-bold text-[#0022a8] tracking-tight">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800">Page not found</h2>
        <p className="text-slate-600">
          Sorry, we couldn't find the page you're looking for. It might have been removed or the link might be broken.
        </p>
        <div className="pt-6">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#ff3a18] text-white font-semibold rounded hover:bg-[#e02e0e] transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
