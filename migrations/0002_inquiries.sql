create table if not exists inquiries (
  id serial primary key,
  reference text not null unique,
  name text not null,
  email text not null,
  phone text not null default '',
  destination text not null default '',
  travel_window text not null default '',
  party_size text not null default '',
  cabin text not null default '',
  plans text not null default '',
  marketing_opt_in boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
