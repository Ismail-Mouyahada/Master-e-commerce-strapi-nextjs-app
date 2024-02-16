import Image from "next/image";

export function Loader( ) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-600"></div>
        <Image  style={{ width: "auto", height: "auto" }} alt="logo" src={"/logo.png"} width={160}  height={160}/>
        <span className="text-pink-600animate-bounce my-4">En cours de chargement</span>
      </div>
    </>
  );
}
