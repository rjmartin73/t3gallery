import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/31afad62-b596-4d2b-adb1-0d0e283cad2e-1x9an0.jpg",
  "https://utfs.io/f/04599539-32f7-49f1-afce-90701e1a5406-1x9bad.jpg",
  "https://utfs.io/f/4361216c-cc71-47f6-a3eb-e9e69bba7c7a-1x9bem.jpg",
  "https://utfs.io/f/805e4161-ec2b-4cac-a359-547c0d2e548e-1x99x5.jpg",
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1,
  url,}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
            <img
              src={image.url}
              className="w-48 h-auto p-4"></img>))}
      </div>
    </main>
  );
}
