import { Header } from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { Loader } from "../Loader";
import { AuthLayout } from "@/Layouts/AuthLayout";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
     <AuthLayout>
     <Header
        title="vous être sur votre profile"
        description="details de profile"
      />
      <section className="bg-slate-100  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            {!user ? (
              <Loader/>
            ) : (
              <div className="flex items-center gap-8">
                <div>
                  <Image
                    src={user.image ? user.image : "/images/default.png"}
                    className="max-h-36"
                    alt="user"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="mt-8">
                  <p className="mb-3">Name: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
     </AuthLayout>
    </>
  );
}
