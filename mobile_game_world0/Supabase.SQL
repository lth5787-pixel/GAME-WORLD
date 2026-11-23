create table if not exists public.user_library (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  category text not null check (category in ('game_favorite', 'anime_saved')),
  item_id text not null,
  item_title text not null,
  item_meta jsonb default '{}'::jsonb,
  updated_at timestamptz default now() not null,
  unique (user_id, category, item_id)
);

alter table public.user_library enable row level security;

create policy "Users can view own library"
  on public.user_library for select
  using (auth.uid() = user_id);

create policy "Users can insert own library"
  on public.user_library for insert
  with check (auth.uid() = user_id);

create policy "Users can update own library"
  on public.user_library for update
  using (auth.uid() = user_id);

create policy "Users can delete own library"
  on public.user_library for delete
  using (auth.uid() = user_id);