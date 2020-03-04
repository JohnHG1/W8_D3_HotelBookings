use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Kylie Smith",
    email: "ksmith99@htmail.co.mn",
    status: "check_in"
  },
  {
    name: "Mark Kolman",
    email: "nutter811@gmil.com",
    status: "check_in"
  },
  {
    name: "Nick Sole",
    email: "nsole1980@yaho.co.uk",
    status: "check_in"
  }
]);
