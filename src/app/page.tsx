import { Container } from "@/components/container";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
    <div className="min-h-screen w-full relative">
      <Container className="relative border-dashed border border-neutral-800 w-6xl"/>
    </div>
    </Suspense>
  )
}
