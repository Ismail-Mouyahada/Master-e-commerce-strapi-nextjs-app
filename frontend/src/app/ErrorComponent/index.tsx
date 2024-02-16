 
export function ErrorComponent({ message }: { message: string }) {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div className="text-red-500 text-center p-4  rounded-md ">
        <h3>Error: {message}</h3>
        <p>Veuillez essayez ulterierement.</p>
      </div>
    </div>
    </>
  );
}
