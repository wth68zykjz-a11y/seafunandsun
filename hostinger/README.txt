Sea Fun & Sun — Hostinger lead form
====================================

The quote form on the website writes straight into this MySQL
database when the Node app is given the database host, name, user,
and password (DB_HOST, DB_NAME, DB_USER, DB_PASSWORD). You do not
need a second database. The site creates the inquiries table the
first time someone sends a quote. You can also import schema.sql
yourself in phpMyAdmin.

To store the same fields in Hostinger:

1. hPanel → Databases → create a MySQL database and user.
2. phpMyAdmin → Import schema.sql into that database.
3. Copy config.sample.php to config.php and fill in the database name,
   user, password, and an access code.
4. Upload submit.php, leads.php, and config.php into a folder that is
   not publicly listed if you can (config.php should not be downloadable).
5. Point the form at submit.php. Fields: name, email, phone, destination,
   travelWindow, partySize, cabin, plans, marketingOptIn, and an optional
   trip (Cruise, Expedition, All-inclusive resort, Ski vacation, or Rail
   and land). The trip is stored at the start of the plans text.
6. Open leads.php and enter the access code to read requests.

The confirmation email says “travel request,” not “cruise request,”
because the form also covers resorts, ski, and rail.

submit.php also emails the request to Booking@Seafunandsun.com
(or the notify address in config.php) and sends the traveler a short
confirmation. Hostinger’s PHP mail() has to be allowed for that domain.

The redesigned site stores the same request in its own database and
emails it when SMTP_USER and SMTP_PASS are set (Hostinger:
smtp.hostinger.com, port 465, the Booking mailbox). A Resend key
(RESEND_API_KEY) works instead. Without one of those, the request is
still saved and is not emailed.

Do not put the database password in the public website.
Change the access code from the sample before you go live.
