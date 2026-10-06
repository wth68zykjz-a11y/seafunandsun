-- Hostinger hPanel → Databases → phpMyAdmin → Import
-- Create the database first, then run this inside it.

create table if not exists inquiries (
  id int unsigned not null auto_increment,
  reference varchar(24) not null,
  name varchar(120) not null,
  email varchar(180) not null,
  phone varchar(40) not null default '',
  destination varchar(80) not null default '',
  travel_window varchar(160) not null default '',
  party_size varchar(40) not null default '',
  cabin varchar(80) not null default '',
  plans text not null,
  marketing_opt_in tinyint(1) not null default 0,
  email_status varchar(40) not null default '',
  created_at timestamp not null default current_timestamp,
  primary key (id),
  unique key inquiries_reference (reference)
) engine=InnoDB default charset=utf8mb4;
