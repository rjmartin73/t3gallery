import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/e6c534bc-4686-4ead-9037-8e7c5ec27d8c-3ybgj0.jpg",
  "https://utfs.io/f/378d8b4e-0ee4-4e54-b7a2-be4ac45c42da-nzt9pe.jpg",
  "https://utfs.io/f/927fe16d-4077-4d5c-b299-64e529b89321-jqpt60.jpg",
  "https://utfs.io/f/9c55b528-0aed-49ac-9cdb-7b21891d5ebf-qqfniw.jpg",
  "https://utfs.io/f/36d0779a-f393-45f3-b5dc-9c40a8ccbf7d-nfyl2y.jpg",
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1,
  url,}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  // console.log('Posts', posts);

  const users = await db.query.users.findMany();
  // console.log(users);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.id} className="w-48 h-auto p-4">{user.name}<br/>{user.email}</div>
        ))}
        {posts.map((post) => (
          <div key={post.id} className="w-48 h-auto p-4">{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            //console.log(index);
            <div key={image.id + "-" + index} 
              row-key={image.id + "-" + index} 
              className="w-48 h-auto p-4" >
             <a href={image.url.toString()}> 
              <img className="w-full h-auto object-cover rounded-lg"
              src={image.url}
              ></img> 
              {image.id + "-" + index}</a>
              
            </div>
            ))}
      </div>
    </main>
  );
}
