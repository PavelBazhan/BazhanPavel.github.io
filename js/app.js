'use strict'
console.log('hello world');
function AppModel() {
  var self = this;

  self.currentCity = ko.observable("New York");
  self.currentCityPhoto = ko.observable("images/NewYork.jpg");

  self.modWindowOn = ko.observable(false);
  self.currentPlacePhoto = ko.observable("images/ny01.jpg");
  self.currentPlaceTitle = ko.observable("Empire State Building");
  self.currentPlaceDescription = ko.observable("No visit to New York City would be complete without a stop at this masterpiece of Art Deco design, and perhaps the most famous office building in the world. From its magnificent lobby — now sporting a re-creation of its original spectacular ceiling mural — to the 86th-floor observatory perched more than 1,000 feet (305 meters) above the city streets, this National Historic Landmark gives visitors plenty to admire.");

  self.info = [
    [
      ["images/ny01.jpg", "Empire State Building", "No visit to New York City would be complete without a stop at this masterpiece of Art Deco design, and perhaps the most famous office building in the world. From its magnificent lobby — now sporting a re-creation of its original spectacular ceiling mural — to the 86th-floor observatory perched more than 1,000 feet (305 meters) above the city streets, this National Historic Landmark gives visitors plenty to admire."],
      ["images/ny02.jpg", "Statue of Liberty", "A stirring symbol of freedom, the Statue of Liberty has been a beacon in New York Harbor since 1886. A gift from the people of France, the Statue was designed by Frédéric Auguste Bartholdi and built by Gustave Eiffel."],
      ["images/ny03.jpg", "American Museum of Natural History", "Dinosaur fossils? Check. Theories of evolution? Check. Planetarium space show and IMAX theater? Double-check. It's no wonder the American Museum of Natural History was voted #1 attraction in New York City by the Zagat Survey U.S. Family Travel Guide."],
      ["images/ny04.jpg", "Guggenheim Museum", "Known as much for what’s on the outside as what’s on the inside, the Guggenheim Museum is simply stunning. Devoted to the art of the 20th century and beyond, the Guggenheim Museum is a must-see for anyone looking to see art from contemporary artists."],
      ["images/ny05.jpg", "Central Park", "Visitors can walk, run, ride bicycles, play chess and checkers, ice skate, and even fish. Designated quiet zones accommodate those seeking tranquility, while the 21 playgrounds are a boon for families with children who need to move."],
      ["images/ny06.jpg", "Times Square", "Located in Midtown Manhattan at the intersection of Broadway and Seventh Avenue, Times Square has often been referred to as The Crossroads of the World. Full of bright lights and billboards, it also serves as the hub of the Theater District."]
    ],
    [
      ["images/mi01.jpg", "Miami Beach", "Miami Beach is actually a separate municipality from Miami. It is located on an island, connected to the mainland by a series of bridges. The area is known for its popular beaches and the Art Deco District, with pastel buildings from the 1930s sporting classic neon signs"],
      ["images/mi02.jpg", "Art Deco District", "The Art Deco District in Miami Beach brings back memories of an earlier time in Florida with its wonderfully restored 1930s Art Deco buildings. These pastel colored historic structures display neon signs and awnings that cover outdoor dining areas. Many of them front Ocean Drive, overlooking the beach and ocean."],
      ["images/mi03.jpg", "South Beach", "Located at the southern end of Miami Beach where the Art Deco buildings line the waterfront road, this is the most famous and popular section of Miami Beach. In summer the beach is a popular draw for locals and tourists and in winter the area is simply a popular place to stroll around."],
      ["images/mi04.jpg", "Ocean Drive", "Ocean Drive runs along the oceanfront in Miami Beach, passing the historic Art Deco buildings and the famous strip of sand known as South Beach. It is a popular place both day and night for a slow cruise and some drive by sightseeing."],
      ["images/mi05.jpg", "Bayside Marketplace", "Bayside Marketplace is a large outdoor style mall with more than 150 specialty and tourist shops, numerous cafes and restaurants, and daily live entertainment. Visitors will find some well known chain stores as well as many unique, one of a kind places. The marketplace draws locals as well as tourists."],
      ["images/mi06.jpg", "Vizcaya Museum and Gardens", "The Vizcaya Museum and Gardens is one of Miami's greatest treasures. The architecture, the grounds, and the artwork it contains are all worth the trip to visit this beautiful place. This estate was the former winter home of early 20th century industrialist, James Deering. Built in 1916, the mansion features 34 rooms arranged around a central courtyard"]
    ],
    [
      ["images/la01.jpg", "Universal Studios Hollywood", "Universal Studios Theme Park has a variety of mind-blowing rides based on movie themes, but is also a working movie studio. You can take a guided tour of the studios and explore behind the scenes of some of Universal's most popular movie sets. The main attraction for most people is usually the rides, which range from simulators to roller coasters."],
      ["images/la02.png", "Griffith Park and Griffith Observatory", "Griffith Park, in the eastern part of the Santa Monica Mountains, and covering an area of 4,210 acres, is the largest state park in California. The park is home to the Los Angeles Zoo, the Griffith Observatory, a planetarium, a Greek theater, a riding center created for the 1984 Olympic Games, golf courses, tennis courts, hiking trails, and other attractions."],
      ["images/la03.jpg", "Disneyland Resort", "Just outside Los Angeles, Disneyland is California's premier family vacation destination. Disneyland Park, with rides and experiences in elaborately created theme sets, is what most people picture when they imagine Disneyland."],
      ["images/la04.jpg", "Hollywood", "A suburb of Los Angeles, Hollywood is a destination in itself, with its own unique history and iconic sites. The attractions in Hollywood are closely associated with the film industry and the glamour of the silver screen. The hillside Hollywood sign, Hollywood Boulevard, the Walk of Fame, and the Chinese Theatre can easily fill a day or two of sightseeing."],
      ["images/la05.jpg", "Santa Monica", "Santa Monica is a unique destination that is both chic and laid-back, with a population that ranges from surfers, skateboarders, and yoga devotees to techies and business people. The beautiful stretch of golden sand along the coast and the famous Santa Monica Pier, with its iconic Ferris wheel, are what most tourists come to enjoy, but you can find all kinds of experiences in this beachfront city next to LA."],
      ["images/la06.jpg", "Los Angeles County Museum of Art", "The Los Angeles County Museum of Art lays claim to being the largest art museum in the western United States, with almost 130,000 pieces spanning from antiquity through to modern times. Of particular note are the outstanding collections of Asian, Latin American, and Islamic Art."]
    ],
    [
      ["images/ws01.jpg", "United States Capitol and Capitol Hill", "Recognized around the world as a symbol of the United States, the Capitol is the seat of the House of Representatives and the Senate. The huge dome, based on the dome of St. Peter's in Rome, stands out above all other Washington buildings. Like Washington itself, the building has grown over the years since the central portion was built between 1793 and 1812."],
      ["images/ws02.jpg", "The White House", "The White House is the official residence of the President of the United States. The home of every president except George Washington, it was originally built by James Hoban in 1792, and after being burned down by British forces in 1814 was rebuilt in 1818."],
      ["images/ws03.jpg", "The Lincoln Memorial", "The best-loved of all Washington's memorials, the Lincoln Memorial stands at the far end of the mall, separated from the Washington Monument by the Reflecting Pool. At its center is a 19-foot marble statue of a seated and pensive President Abraham Lincoln surrounded by 36 columns, one for each of the states that existed at the time of Lincoln's death."],
      ["images/ws04.jpg", "The Washington Monument", "The 555-foot white shaft of the Washington Monument is a familiar icon of the National Mall, and a beautiful sight, especially when mirrored in the long Reflecting Pool at its foot. Construction of the obelisk to honor the nation's first president did not proceed smoothly. The plan was approved by Congress in 1783, but ground wasn't broken until 1848."],
      ["images/ws05.jpg", "National Air and Space Museum", "The National Air and Space Museum is one of the world's most popular museums, with a collection of history-making air and spacecraft that includes the original 1903 Wright Brothers Flyer, and Charles Lindbergh's Spirit of St. Louis, the first plane to fly solo across the Atlantic Ocean."],
      ["images/ws06.jpg", "National Gallery of Art", "Housed in two separate buildings connected by a tunnel, the National Gallery of Art is one of the world's premier art museums and one of the most popular in the U.S. Based on the sizable collection of financier and later Treasury Secretary Andrew Mellon, its large and diverse collection includes masterpieces of European and American paintings, sculpture, and decorative arts."]
    ]
  ];

  self.currentPhotos = ko.observableArray([
    ["images/ny01.jpg", "Empire State Building", "No visit to New York City would be complete without a stop at this masterpiece of Art Deco design, and perhaps the most famous office building in the world. From its magnificent lobby — now sporting a re-creation of its original spectacular ceiling mural — to the 86th-floor observatory perched more than 1,000 feet (305 meters) above the city streets, this National Historic Landmark gives visitors plenty to admire."],
    ["images/ny02.jpg", "Statue of Liberty", "A stirring symbol of freedom, the Statue of Liberty has been a beacon in New York Harbor since 1886. A gift from the people of France, the Statue was designed by Frédéric Auguste Bartholdi and built by Gustave Eiffel."],
    ["images/ny03.jpg", "American Museum of Natural History", "Dinosaur fossils? Check. Theories of evolution? Check. Planetarium space show and IMAX theater? Double-check. It's no wonder the American Museum of Natural History was voted #1 attraction in New York City by the Zagat Survey U.S. Family Travel Guide."],
    ["images/ny04.jpg", "Guggenheim Museum", "Known as much for what’s on the outside as what’s on the inside, the Guggenheim Museum is simply stunning. Devoted to the art of the 20th century and beyond, the Guggenheim Museum is a must-see for anyone looking to see art from contemporary artists."],
    ["images/ny05.jpg", "Central Park", "Visitors can walk, run, ride bicycles, play chess and checkers, ice skate, and even fish. Designated quiet zones accommodate those seeking tranquility, while the 21 playgrounds are a boon for families with children who need to move."],
    ["images/ny06.jpg", "Times Square", "Located in Midtown Manhattan at the intersection of Broadway and Seventh Avenue, Times Square has often been referred to as The Crossroads of the World. Full of bright lights and billboards, it also serves as the hub of the Theater District."]
  ]);
}


var appModel = new AppModel();

ko.applyBindings(appModel);

function closeModWindow() {
  appModel.modWindowOn(false);
}

function showModWindow(num) {
  appModel.currentPlacePhoto(appModel.currentPhotos()[+num-1][0]);
  appModel.currentPlaceTitle(appModel.currentPhotos()[+num-1][1]);
  appModel.currentPlaceDescription(appModel.currentPhotos()[+num-1][2]);
  appModel.modWindowOn(true);
}

function selectCity(city) {
  appModel.currentCity(city);
  appModel.currentPhotos(appModel.info[makeNum(city)]);
  switch (city) {
    case "New York":
      appModel.currentCityPhoto("images/NewYork.jpg");
      break;
    case "Miami":
      appModel.currentCityPhoto("images/Miami.jpg");
      break;
    case "Los Angeles":
      appModel.currentCityPhoto("images/LosAngeles.jpg");
      break;
    case "Washington":
      appModel.currentCityPhoto("images/Washington.jpg");
      break;
  }
}

function makeAbb(city) {
  switch (city) {
    case "New York":
      return "ny";
      break;
    case "Miami":
      return "mi";
      break;
    case "Los Angeles":
      return "la";
      break;
    case "Washington":
      return "ws";
      break;
  }
}

function makeNum(city) {
  switch (city) {
    case "New York":
      return 0;
      break;
    case "Miami":
      return 1;
      break;
    case "Los Angeles":
      return 2;
      break;
    case "Washington":
      return 3;
      break;
  }
}
