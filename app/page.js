import { auth, signIn } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Image from "next/image";

const getUrls = async () => {
  const data = await prisma.redlink.findMany();
  // console.log(data);
  // const {urls} = await data.json()
  return data;
};
export default async function Home() {
  const data = await getUrls();
  const session = await auth();
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        hello
        {data.map((items) => (
          <p key={items.id}> {items.url}</p>
        ))}
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button>signIn with github</button>
        </form>
      </h1>
    </main>
  );
}
