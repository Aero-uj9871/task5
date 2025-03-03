import { useLoading } from '@/components/context/LoadingProvider';  // Adjust the path if necessary

const Loader = () => {
    const { loading } = useLoading();
  
    return (
        loading && (
            <div className="fixed top-0 left-0 w-full h-full bg-background bg-opacity-50 flex justify-center items-center z-50">
                <img 
                    src="https://static.tildacdn.com/tild3135-3561-4966-b131-313331613231/snitch.gif" 
                    alt="Loading..." 
                    className="w-40 h-40 animate-ping" 
                />
            </div>
        )
    );
};

export default Loader;


