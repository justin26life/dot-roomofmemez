import { useState } from "react";
import type { Route } from "./+types/home";
import { getDb } from "../db";
import { categories as categoriesTable } from "../db/schema";
import { CategoryBubbles } from "../components/CategoryBubbles";
import { MemeFeed } from "../components/MemeFeed";
import { MemeCard } from "../components/MemeCard";
import { BottomNav, type Tab } from "../components/BottomNav";
import { memes } from "../data/memes";

// Runs on the server BEFORE the page is shown. It reads the database.
export async function loader({ context }: Route.LoaderArgs) {
  const db = getDb(context.cloudflare.env.DB);
  const categories = await db
    .select()
    .from(categoriesTable)
    .orderBy(categoriesTable.sortOrder);
  return { categories };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData;

  const [tab, setTab] = useState<Tab>("home");
  const [selected, setSelected] = useState("all");
  const category = categories.find((c) => c.id === selected);

  // Only the memes that belong to the selected category
  const categoryMemes = memes.filter((m) => m.categoryIds.includes(selected));

  function handleTab(next: Tab) {
    setTab(next);
    // Tapping Home always drops you back to the main home page
    if (next === "home") setSelected("all");
  }

  return (
    <main className="min-h-screen bg-bg pb-20 text-white">
      {tab === "home" && (
        <>
          <header className="px-4 pt-4">
            <h1 className="text-xl font-bold">
              <span className="text-accent">Dot</span> RoomOfMemez
            </h1>
          </header>

          <CategoryBubbles
            categories={categories}
            selected={selected}
            onSelect={setSelected}
          />

          {/* Home: ALL memes, with or without a category */}
          <section className="flex flex-col gap-4 px-4">
            {memes.map((m) => (
              <MemeCard key={m.id} meme={m} categories={categories} />
            ))}
          </section>

          {/* Category feed: only that category's memes */}
          {selected !== "all" && category && (
            <MemeFeed
              key={selected}
              title={`${category.icon} ${category.name}`}
              memes={categoryMemes}
            />
          )}
        </>
      )}

      {tab !== "home" && (
        <p className="p-6 text-white/60 capitalize">{tab} page coming soon</p>
      )}

      <BottomNav active={tab} onChange={handleTab} />
    </main>
  );
}