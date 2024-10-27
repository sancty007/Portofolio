
export default async function LoadingPage(){


  await new Promise((resolve) => setTimeout(resolve,2000));


  return (
    <div className="flex justify-center items-center h-screen">
     
        <div className="animate-spin rounded-full size-32 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};


