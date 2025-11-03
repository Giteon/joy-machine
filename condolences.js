// Condolences lists for Good Listener Machine

// 1. CONDOLENCE (STATEMENT) - All condolences that don't end with ?
const condolencesStatement = [
    "I'm actively listening.",
    "I'm all ears.",
    "Oh that's awful!",
    "That's disgusting! [:P]",
    "That's so sad!",
    "Hmmm[mmm]",
    "No way! [:O]",
    "Aww.",
    "Wow!",
    "Yikes.",
    "That's just NOT okay!",
    "Tell me more[, chica].",
    "Wow, this world is twisted[, huh].",
    "That's LITERALLY crazy.",
    "That's just not fair. [:(]",
    "I'm sorry[, chica.]",
    "I'm so sorry[, doll].",
    "PLEASE tell me you're (joking/kidding).",
    "Damn[nn] [:/]",
    "Bruv...",
    "The world is against you.",
    "Poor baby.",
    "That can't be legal!",
    "You're right and everyone else is wrong.",
    "Riiiight.",
    "That's the last straw, chica.",
    "I wish there was something I could do.",
    "That makes me sick.",
    "You mean so much to me.",
    "Take the day off.",
    "Go on[nn].",
    "No...",
    "Ohhh noooooo.",
    "i'm going to be sick...",
    "You CAN'T be serious...",
    "Let it all out[, chica].",
    "There's no excuse for that kind of behavior.",
    "Oh, behave!",
    "You need a vacation[, babes].",
    "Come ON!",
    "(Again??/Not again!)",
    "I'm gutted...",
    "I'm here for you[, chica].",
    "I'm listening[gg]...",
    "That's (BONKERS/NUTS/MAD BRUV/BOLLUCKS/BALONEY)!",
    "When it rains it pours, i guess. [:/]",
    "You don't deserve that[, babes]."
];

// 2. CONDOLENCE (QUESTION) - All condolences that end with ?
const condolencesQuestion = [
    "She really said that?",
    "REALLY? [REALLY? [REALLY?]]",
    "[And] then what?",
    "Where does it end?",
    "Where do some people get off?",
    "Can you catch a break?",
    "Could you elaborate on that?",
    "Is that even allowed?",
    "Can you elaborate on that[, doll]?",
    "And did she say what she meant by that?"
];

// 3. CONDOLENCE (ACTIVE LISTENING) - Active listening phrases
const condolencesActiveListening = [
    "mhm...",
    "mhmm...",
    "uh huh...",
    "uh huhhh...",
    "right...",
    "right right...",
    "go on...",
    "I'm listening...",
    "I'm ACTIVELY listening...",
    "I hear you...",
    "yeah...",
    "yep yep yep...",
    "okay...",
    "I see...",
    "I hear you...",
    "got it...",
    "sure...",
    "mm...",
    "mmm...",
    "ah...",
    "oh...",
    "wow...",
    "hmm...",
    "hmmm..."
];

// 5. CONDOLENCE (PERSONAL) - Phrases with [name] placeholder
const condolencesPersonal = [
    "[name] sounds like a piece of work!",
    "[name] needs a reality check.",
    "[name] really said that?",
    "[name] sounds like a bitch!",
    "That's so not okay, [name].",
    "What's [name]'s damage?",
    "[name] needs to take a good long look at themselves.",
    "Who does [name] think they are?",
    "[name] sounds exhausting.",
    "I'm sorry [name] did that to you.",
    "[name] owes you an apology.",
    "That's on [name], not you.",
    "[name] was WAY out of line.",
    "I can't believe [name] did that.",
    "[name] needs to check themselves.",
    "That's terrible behavior from [name].",
    "You don't deserve that from [name].",
    "[name] needs a timeout.",
    "[name] should know better.",
    "I'm very frustrated with [name]."
];

// 4. NAMES - Comprehensive names organized by gender

// Male names
const maleNames = [
    // A
    "Aaron", "Abel", "Abraham", "Adam", "Adrian", "Adrian", "Aiden", "Alan", "Albert", "Alberto",
    "Alec", "Alejandro", "Alex", "Alexander", "Alfred", "Allan", "Allen", "Alonso", "Alonzo", "Alvin",
    "Amir", "Andre", "Andrew", "Andy", "Angelo", "Anthony", "Antonio", "Archie", "Ari",
    "Armando", "Arnold", "Arthur", "Ashton", "Aubrey", "Avery",
    
    // B
    "Barry", "Beau", "Ben", "Benjamin", "Bennett", "Bernard", "Bill", "Billy", "Blake", "Bob",
    "Bobby", "Brad", "Bradley", "Brandon", "Brayden", "Brendan", "Brent", "Brett", "Brian", "Brock",
    "Brody", "Bruce", "Bryan", "Bryant", "Bryce", "Byron",
    
    // C
    "Caden", "Caleb", "Calvin", "Camden", "Cameron", "Carl", "Carlos", "Carter", "Casey", "Cedric",
    "Charles", "Charlie", "Chris", "Christian", "Christopher", "Clayton", "Clifford",
    "Clinton", "Clyde", "Cody", "Colin", "Collin", "Connor", "Conor", "Conrad", "Corey", "Craig",
    "Cristian", "Cruz", "Curtis", "Cyrus",
    
    // D
    "Dale", "Damian", "Damon", "Dan", "Daniel", "Danny", "Dante", "Darrell", "Darren",
    "Darryl", "Dave", "David", "Davis", "Dean", "Declan", "Dennis", "Derek", "Derrick", "Devin",
    "Devon", "Dexter", "Diego", "Dillon", "Dominic", "Dominick", "Don", "Donald", "Donovan", "Dorian",
    "Douglas", "Drew", "Duane", "Dustin", "Dwayne", "Dylan",
    
    // E
    "Easton", "Eddie", "Edgar", "Edmond", "Edmund", "Eduardo", "Edward", "Edwin", "Eli",
    "Elijah", "Elliot", "Elliott", "Ellis", "Elmer", "Emerson", "Emilio", "Emmanuel", "Emmett", "Enrique",
    "Eric", "Erik", "Erick", "Ethan", "Eugene", "Evan", "Everett", "Ezekiel", "Ezra",
    
    // F
    "Fabian", "Felix", "Fernando", "Finn", "Fisher", "Floyd", "Forrest", "Francis", "Francisco", "Frank",
    "Franklin", "Fred", "Freddie", "Frederick", "Fredrick",
    
    // G
    "Gabriel", "Gage", "Garrett", "Gary", "Gavin", "Gene", "Geoffrey", "George", "Gerald", "Gerard",
    "Gianni", "Gilbert", "Glen", "Glenn", "Gordon", "Grady", "Graham", "Grant", "Gray", "Grayson",
    "Greg", "Gregory", "Greyson", "Griffin", "Gunnar", "Gus", "Gustavo", "Guy",
    
    // H
    "Hank", "Harold", "Harrison", "Harry", "Harvey", "Hayden", "Hector", "Henry", "Herbert", "Herman",
    "Homer", "Houston", "Howard", "Hudson", "Hugh", "Hugo", "Hunter",
    
    // I
    "Ian", "Ibrahim", "Iker", "Isaac", "Isaiah", "Ivan", "Izaiah",
    
    // J
    "Jack", "Jackson", "Jacob", "Jaden", "Jake", "James", "Jamie", "Jared", "Jarvis", "Jason",
    "Jasper", "Javier", "Jay", "Jayden", "Jeff", "Jeffery", "Jeffrey", "Jensen", "Jeremiah", "Jeremy",
    "Jerome", "Jerry", "Jesse", "Jesus", "Jett", "Jim", "Jimmy", "Joaquin", "Joe", "Joel",
    "Joey", "John", "Johnny", "Jon", "Jonah", "Jonathan", "Jonathon", "Jordan", "Jorge", "Jose",
    "Joseph", "Josh", "Joshua", "Josiah", "Juan", "Judah", "Jude", "Julian", "Julio", "Julius",
    "Justin",
    
    // K
    "Kai", "Kaleb", "Kane", "Karson", "Karter", "Keith", "Kellen", "Kelly", "Kelvin", "Ken",
    "Kendrick", "Kenneth", "Kenny", "Kent", "Kevin", "Khalil", "Kieran", "Killian", "Knox",
    "Kobe", "Kody", "Kyle",
    
    // L
    "Lance", "Landon", "Lane", "Larry", "Lars", "Lawrence", "Lawson", "Leandro", "Lee", "Leo",
    "Leon", "Leonard", "Leonardo", "Levi", "Lewis", "Liam", "Lincoln", "Lionel", "Logan", "Lorenzo",
    "Louis", "Luca", "Lucas", "Lucian", "Luis", "Luke", "Luther", "Lyle",
    
    // M
    "Maddox", "Malachi", "Malcolm", "Manuel", "Marc", "Marcelo", "Marco", "Marcus", "Mario", "Mark",
    "Marshall", "Martin", "Marvin", "Mason", "Mateo", "Mathew", "Matt", "Matthew", "Maurice", "Max",
    "Maximilian", "Maximus", "Maxwell", "Mekhi", "Melvin", "Micah", "Michael", "Miguel", "Mike", "Miles",
    "Milo", "Milton", "Mitchell", "Mohammad", "Mohammed", "Morgan", "Morris", "Moses", "Muhammad",
    
    // N
    "Nash", "Nasir", "Nathan", "Nathanael", "Nathaniel", "Neal", "Neil", "Nelson", "Nestor", "Nicolas",
    "Nicholas", "Nick", "Nico", "Nicolas", "Nigel", "Noah", "Nolan", "Norman",
    
    // O
    "Oakley", "Odin", "Oliver", "Omar", "Omarion", "Orlando", "Oscar", "Oswald", "Otis", "Otto",
    "Owen",
    
    // P
    "Pablo", "Parker", "Patrick", "Paul", "Paxton", "Payton", "Pedro", "Peter", "Peyton", "Philip",
    "Phillip", "Phoenix", "Preston",
    
    // Q
    "Quentin", "Quincy", "Quinn", "Quinton",
    
    // R
    "Rafael", "Raiden", "Ralph", "Ramiro", "Ramon", "Randall", "Randy", "Raphael", "Rashad", "Raul",
    "Ray", "Raymond", "Reed", "Reece", "Reese", "Reginald", "Reid", "Remington", "Rene", "Rex",
    "Rhett", "Ricardo", "Richard", "Richie", "Rick", "Rickey", "Ricky", "Riley", "Robert", "Roberto",
    "Robin", "Rocco", "Rocky", "Rodney", "Rodrigo", "Roger", "Rogelio", "Rohan", "Roland", "Rolando",
    "Roman", "Ron", "Ronald", "Ronan", "Ronnie", "Rory", "Ross", "Rowan", "Roy", "Royal",
    "Royce", "Ruben", "Rudy", "Russell", "Rusty", "Ryan", "Ryder", "Rylan", "Rylee", "Ryley",
    
    // S
    "Salvador", "Sam", "Samir", "Samson", "Samuel", "Santiago", "Santino", "Saul", "Scott", "Sean",
    "Sebastian", "Sergio", "Seth", "Shane", "Shawn", "Sheldon", "Silas", "Simon", "Sincere", "Skylar",
    "Solomon", "Spencer", "Stanley", "Stephen", "Stephan", "Stephon", "Steve", "Steven", "Stewart",
    "Stuart", "Sullivan",
    
    // T
    "Talon", "Tanner", "Tate", "Tatum", "Taylor", "Ted", "Teddy", "Terrance", "Terrence", "Terry",
    "Theodore", "Thomas", "Tim", "Timothy", "Titus", "Tobias", "Toby", "Todd", "Tom", "Tommy",
    "Tony", "Torres", "Travis", "Trent", "Trenton", "Trevor", "Trey", "Tristan", "Tristen", "Troy",
    "Tucker", "Tyler", "Tyrone",
    
    // U
    "Ulysses", "Ulises", "Uriah", "Uriel",
    
    // V
    "Valentin", "Valentino", "Van", "Vance", "Vaughn", "Victor", "Vicente", "Vince", "Vincent", "Vincenzo",
    "Violet", "Vito",
    
    // W
    "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wesley", "Weston", "Wilder", "Will",
    "William", "Willie", "Wilson", "Winston", "Wyatt",
    
    // X
    "Xander", "Xavier", "Xzavier",
    
    // Y
    "Yahir", "Yosef", "Yusuf",
    
    // Z
    "Zachariah", "Zachary", "Zachery", "Zack", "Zackary", "Zackery", "Zaid", "Zain", "Zaire", "Zander",
    "Zane", "Zavier", "Zayden", "Zayn", "Zayne", "Zechariah", "Zeke", "Zion"
];

// Female names
const femaleNames = [
    // A
    "Abby", "Abigail", "Ada", "Addison", "Adeline", "Adriana", "Adrienne", "Aida", "Aileen", "Aimee",
    "Ainsley", "Aisha", "Aiyana", "Alana", "Alanna", "Alayna", "Aleah", "Alejandra", "Alena", "Alessandra",
    "Alexa", "Alexandra", "Alexandria", "Alexis", "Alice", "Alicia", "Alina", "Alisa", "Alisha", "Alison",
    "Alissa", "Alivia", "Aliyah", "Allison", "Ally", "Allyson", "Alma", "Alondra", "Alyson", "Alyssa",
    "Amanda", "Amani", "Amara", "Amari", "Amaya", "Amber", "Amelia", "Amelie", "Amiyah",
    "Amy", "Ana", "Anahi", "Anastasia", "Andrea", "Angela", "Angelica", "Angelina", "Angie",
    "Anika", "Anissa", "Anita", "Aniyah", "Ann", "Anna", "Annabelle", "Annabeth", "Anne", "Annette",
    "Annie", "Annika", "Ansley", "Antonia", "Anya", "Araceli", "Aria", "Ariana", "Arianna",
    "Ariel", "Ariella", "Arielle", "Arleen", "Arlene", "Aryanna", "Ashanti", "Ashlee", "Ashley", "Ashlyn",
    "Ashton", "Aspen", "Athena", "Aubree", "Aubrey", "Audrey", "Aurora", "Ava", "Averie", 
    "Avery", "Aviana", "Ayla", "Aylin", "Azaria", "Azariah",
    
    // B
    "Bailey", "Barbara", "Baylee", "Beatrice", "Belinda", "Bella", "Belle", "Berenice", "Bernadette", "Bernice",
    "Bessie", "Beth", "Bethany", "Betsy", "Betty", "Beverly", "Bianca", "Billie", "Blair", "Blake",
    "Blanca", "Bonnie", "Braelyn", "Brandi", "Brandy", "Breanna", "Bree", "Brenda", "Brenna", "Bria",
    "Briana", "Brianna", "Brianne", "Bridget", "Bridgette", "Brielle", "Brinley", "Brisa", "Britney", "Brittany",
    "Brittney", "Brooke", "Brooklyn", "Brooklynn", "Bryanna", "Brylee", "Brynn", "Brynlee",
    
    // C
    "Cadence", "Caitlin", "Caitlyn", "Cali", "Calista", "Callie", "Calliope", "Camila", "Camilla", "Camille",
    "Campbell", "Candace", "Candice", "Cara", "Carina", "Carissa", "Carla", "Carlie", "Carly", "Carmela",
    "Carmen", "Carol", "Carole", "Carolina", "Caroline", "Carolyn", "Carrie", "Carson", "Carter", "Casey",
    "Cassandra", "Cassidy", "Cassie", "Catalina", "Catherine", "Cathryn", "Cathy", "Caylee", "Cecelia", "Cecilia",
    "Celeste", "Celia", "Celina", "Celine", "Chana", "Chandler", "Chanel", "Chanelle", "Chantel",
    "Charlene", "Charley", "Charlie", "Charlotte", "Chasity", "Chaya", "Chelsea", "Chelsey", "Cheyenne", "Chloe",
    "Christina", "Christine", "Christy", "Chrystal", "Ciara", "Cici", "Cierra", "Cindy", "Claire", "Clara",
    "Clare", "Clarice", "Clarissa", "Claudia", "Clementine", "Cleo", "Colette", "Colleen", "Collins", "Connie",
    "Constance", "Cora", "Coraline", "Cordelia", "Corinne", "Courtney", "Cristina", "Crystal", "Cynthia",
    
    // D
    "Dahlia", "Daisy", "Dalia", "Damaris", "Dana", "Danica", "Daniela", "Daniella", "Danielle",
    "Danna", "Daphne", "Darby", "Darlene", "Darlene", "Dasia", "Dawn", "Dayana", "Deanna", "Debbie",
    "Deborah", "Debra", "Deja", "Delaney", "Delia", "Delilah", "Della", "Delores", "Demi", "Denise",
    "Denisse", "Desiree", "Destinee", "Destiny", "Diana", "Diane", "Dianna", "Dianne", "Dina", "Dinah",
    "Dixie", "Dolores", "Dominique", "Donna", "Dora", "Doreen", "Doris", "Dorothy", "Dulce", "Dylan",
    
    // E
    "Eden", "Edith", "Edna", "Eileen", "Elaina", "Elaine", "Elana", "Eleanor", "Elena", "Eliana",
    "Elianna", "Elina", "Elisa", "Elisabeth", "Elise", "Eliza", "Elizabeth", "Ella", "Elle", "Ellen",
    "Elliana", "Ellie", "Ellis", "Elly", "Eloise", "Elsa", "Elsie", "Elvia", "Elyse", "Elyssa",
    "Ember", "Emberly", "Emelia", "Emely", "Emerson", "Emery", "Emilia", "Emilie", "Emily", "Emma",
    "Emmalee", "Emmaline", "Emme", "Emmeline", "Emmie", "Emmy", "Emory", "Erica", "Erika", "Erin",
    "Eryn", "Esmeralda", "Esperanza", "Estella", "Estelle", "Esther", "Estrella", "Etta", "Eugenia", "Eunice",
    "Eva", "Evalyn", "Evangeline", "Eve", "Evelin", "Evelyn", "Everlee", "Everly", "Evie",
    
    // F
    "Fallon", "Fanny", "Farah", "Fatima", "Faye", "Felicia", "Felicity", "Fernanda", "Fiona",
    "Flora", "Frances", "Francesca", "Francine", "Frankie",
    
    // G
    "Gabriela", "Gabriella", "Gabrielle", "Gail", "Galilea", "Genevieve", "Georgia", "Georgina", "Geraldine", "Gia",
    "Gianna", "Gillian", "Gina", "Ginger", "Giselle", "Giuliana", "Gladys", "Gloria", "Goldie",
    "Gracelyn", "Gracie", "Grayson", "Greta", "Gretchen", "Guadalupe", "Gwen", "Gwendolyn",
    
    // H
    "Hadley", "Hailee", "Hailey", "Haisley", "Haley", "Halle", "Hallie", "Hana", "Hanna", "Hannah",
    "Harlee", "Harley", "Harlow", "Harper", "Harriet", "Hattie", "Hayden", "Haylee",
    "Hayley", "Hazel", "Heather", "Heidi", "Helen", "Helena", "Helene", "Henley", "Henrietta",
    "Hillary", "Hilary", "Hilda", "Hillary", "Hollie", "Holly", "Hunter",
    
    // I
    "Imani", "Indie", "Indigo", "Ines", "Ingrid", "Irene", "Iris", "Irma", "Isabel",
    "Isabela", "Isabella", "Isabelle", "Isla", "Itzel", "Ivana", "Ivanna", "Ivy",
    
    // J
    "Jacqueline", "Jada", "Jade", "Jaden", "Jadyn", "Jaelynn", "Jaida", "Jaiden", "Jailyn", "Jaime",
    "Jaimie", "Jaliyah", "Jana", "Janae", "Jane", "Janelle", "Janessa", "Janet", "Janice", "Janiyah",
    "Janie", "Janine", "Janiya", "Jaqueline", "Jasmin", "Jasmine", "Jaslyn", "Jaycee", "Jayda", "Jayden",
    "Jayla", "Jaylah", "Jaylee", "Jayleen", "Jaylene", "Jaylin", "Jaylyn", "Jaylynn", "Jazlyn", "Jazlynn",
    "Jazmin", "Jazmine", "Jean", "Jeanette", "Jeanne", "Jemma", "Jenifer", "Jenna", "Jennie", "Jennifer",
    "Jenny", "Jessa", "Jessica", "Jessie", "Jillian", "Jill", "Jimena", "Jo", "Joan", "Joana",
    "Joanna", "Joanne", "Jocelyn", "Jodi", "Jodie", "Jody", "Joelle", "Johanna", "Jolene", "Jolie",
    "Jordyn", "Jorja", "Joselyn", "Josephine", "Josie", "Journee", "Journey", "Journi", "Joyce",
    "Jozlyn", "Judith", "Judy", "Julia", "Juliana", "Julianna", "Julianne", "Julie", "Juliet", "Juliette",
    "Julissa", "Juniper", "Juno", "Justine",
    
    // K
    "Kadence", "Kaelyn", "Kaelynn", "Kai", "Kaia", "Kaila", "Kailani", "Kailee", "Kailey", "Kailyn",
    "Kaitlin", "Kaitlyn", "Kaiya", "Kala", "Kali", "Kaliyah", "Kallie", "Kalyn", "Kamila", "Kamilah",
    "Kamiyah", "Kara", "Karen", "Kari", "Karis", "Karissa", "Karla", "Karlee", "Karley", "Karli",
    "Karlie", "Karly", "Karma", "Karsyn", "Karter", "Kasey", "Kassandra", "Kassidy", "Katalina", "Katarina",
    "Kate", "Katelyn", "Katelynn", "Katerina", "Katharine", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie",
    "Katrina", "Katy", "Kaya", "Kaydence", "Kayden", "Kayla", "Kaylani", "Kaylee", "Kayleigh", "Kaylen",
    "Kayley", "Kayli", "Kaylie", "Kaylin", "Kaylyn", "Kaylynn", "Kayson", "Kehlani", "Keilani", "Keily",
    "Keira", "Kelli", "Kellie", "Kelly", "Kelsey", "Kelsie", "Kendall", "Kendra", "Kenia", "Kenna",
    "Kennedi", "Kennedy", "Kenny", "Kenya", "Kenzie", "Keyla", "Kiana", "Kiara", "Kiera", "Kierra",
    "Kiersten", "Kiley", "Kim", "Kimber", "Kimberly", "Kimora", "Kinley", "Kinsey", "Kinsley", "Kira",
    "Kirsten", "Kirstin", "Kiya", "Kora", "Kori", "Kourtney", "Krista", "Kristen", "Kristin", "Kristina",
    "Kristine", "Kristy", "Krystal", "Kyla", "Kylee", "Kyleigh", "Kylie", "Kyra",
    
    // L
    "Lacey", "Laci", "Lacie", "Lacy", "Laila", "Lailah", "Lainey", "Lakelyn", "Lana", "Landry",
    "Lane", "Laney", "Laniyah", "Lara", "Larissa", "Laura", "Laurel", "Lauren", "Lauryn", "Lauryn",
    "Layla", "Laylah", "Laylani", "Lea", "Leah", "Leana", "Leanna", "Leanne", "Leela", "Leen",
    "Leia", "Leigh", "Leighton", "Leila", "Leilani", "Leilany", "Lena", "Lennon", "Lennox", "Lenora",
    "Leona", "Leonie", "Lesley", "Leslie", "Leticia", "Lettie", "Lexi", "Lexie", "Leyla", "Lia",
    "Liana", "Lianna", "Libby", "Lila", "Lilah", "Liliana", "Lilianna", "Lilith", "Lillian", "Lilliana",
    "Lillie", "Lilly", "Lily", "Lina", "Linda", "Lindsay", "Lindsey", "Lisa", "Lisbeth", "Livia",
    "Lizbeth", "Lizeth", "Lizette", "Lizzy", "Logan", "Lola", "Londyn", "Lorelai", "Lorelei",
    "Loren", "Lorena", "Lori", "Lorie", "Lorraine", "Louisa", "Louise", "Lourdes", "Lucia", "Luciana",
    "Lucille", "Lucy", "Luella", "Luisa", "Lula", "Luna", "Lupe", "Lyla", "Lylah", "Lyric",
    "Lyric", "Lynn", "Lynne", "Lynnette",
    
    // M
    "Mabel", "Maci", "Macie", "Mackenzie", "Macy", "Madalyn", "Madalynn", "Maddison", "Maddox", "Madeleine",
    "Madeline", "Madelyn", "Madelynn", "Madilyn", "Madilynn", "Madison", "Madisyn", "Madyson", "Mae", "Maeve",
    "Maggie", "Magnolia", "Maia", "Mairead", "Maisie", "Maiya", "Makayla", "Makenna", "Makenzie", "Malani",
    "Malaya", "Malaysia", "Maleah", "Malia", "Maliah", "Malina", "Maliyah", "Mallory", "Mandy", "Mara",
    "Marcella", "Marci", "Marcia", "Margaret", "Margarita", "Margo", "Margot", "Maria", "Mariah", "Mariam",
    "Mariana", "Marianna", "Marie", "Mariela", "Marilyn", "Marina", "Marisa", "Marisol", "Marissa", "Maritza",
    "Marjorie", "Marla", "Marlene", "Marley", "Marlie", "Marlowe", "Martha", "Martina", "Mary", "Maryam",
    "Maryann", "Marybeth", "Mason", "Matilda", "Mattie", "Maura", "Maureen", "Mavis", "Maxine", "Maya",
    "Mayra", "Mazie", "Mckayla", "Mckenna", "Mckenzie", "Meadow", "Meagan", "Meaghan", "Meghan", "Meilani",
    "Melanie", "Melany", "Melina", "Melinda", "Melissa", "Melody", "Mercedes", "Meredith", "Mia", "Miah",
    "Micah", "Michaela", "Michelle", "Mikaela", "Mikayla", "Mila", "Milana", "Milani", "Milena", "Miley",
    "Millie", "Mina", "Mira", "Miracle", "Miranda", "Mireya", "Miriam", "Miriam", "Miya", "Mollie",
    "Molly", "Monica", "Monique", "Morgan", "Mya", "Myah", "Myla", "Mylah", "Myra",
    
    // N
    "Nadia", "Nala", "Nalani", "Nancy", "Naomi", "Natalia", "Natalie", "Nataly", "Natalya", "Natasha",
    "Nathalie", "Nathaly", "Naya", "Nayeli", "Nellie", "Nevaeh", "Neveah", "Nia", "Nicolette", "Nicole",
    "Nina", "Noa", "Noah", "Noelle", "Noemi", "Nola", "Nora", "Norah", "Norma", "Nova",
    "Novah", "Novalee", "Nyla", "Nylah", "Nyomi",
    
    // O
    "Oaklee", "Oakley", "Oaklyn", "Oaklynn", "Octavia", "Olivia", "Opal", "Ophelia", "Oriana",
    "Orion", "Orla",
    
    // P
    "Paige", "Paislee", "Paisley", "Paloma", "Pam", "Pamela", "Paola", "Parker",
    "Patricia", "Patty", "Paula", "Paulina", "Pauline", "Payton", "Pearl", "Penelope", "Penny", "Peyton",
    "Phaedra", "Phoebe", "Phoenix", "Piper", "Poppy", "Presley", "Princess", "Priscilla",
    
    // Q
    "Quinn", "Quincy",
    
    // R
    "Raegan", "Raelyn", "Raelynn", "Raiden", "Raquel", "Raven", "Rayna", "Rayne", "Reagan", "Reanna",
    "Rebecca", "Rebekah", "Reese", "Regan", "Regina", "Reina", "Remi", "Remington", "Remy",
    "Renata", "Renee", "Reyna", "Rhea", "Rhiannon", "Rhonda", "Ria", "Rian", "Rianna", "Rihanna",
    "Riley", "Rilynn", "Rita", "River", "Rivka", "Riya", "Robin", "Robyn", "Rochelle", "Rocio",
    "Rosa", "Rosalee", "Rosalie", "Rosalind", "Rosalinda", "Rosalyn", "Rose", "Rosella", "Roselyn", "Rosemary",
    "Rosie", "Roslyn", "Rowan", "Rowen", "Roxana", "Roxanne", "Ruby", "Ruth", "Ruthie", "Rylee",
    "Ryleigh", "Rylie", "Rylin",
    
    // S
    "Sabrina", "Sadie", "Sage", "Saige", "Sailor", "Sally", "Salma", "Samantha", "Samara", "Samira",
    "Sandra", "Sandy", "Saniyah", "Sanvi", "Sara", "Sarah", "Sarai", "Sariah", "Sarina", "Sariyah",
    "Sasha", "Savanna", "Savannah", "Sawyer", "Scarlet", "Scarlett", "Selah", "Selena", "Selene",
    "Selina", "Serena", "Shakira", "Shana", "Shania", "Shaniya", "Shannon", "Sharon", "Shawna",
    "Shayla", "Shaylee", "Shelby", "Shelia", "Shelley", "Shelly", "Sherry", "Sheryl", "Shiloh", "Shirley",
    "Shyann", "Sidney", "Siena", "Sienna", "Sierra", "Silvia", "Simone", "Simone", "Sincere", "Sinead",
    "Siobhan", "Skyla", "Skylar", "Skyler", "Sloane", "Sofia", "Sofie", "Sonia", "Sonja", "Sonya",
    "Sophia", "Sophie", "Spencer", "Stacey", "Stacy", "Stella", "Stephanie", "Stephany", "Stevie",
    "Susan", "Susanna", "Susannah", "Susie", "Sutton", "Suzanne", "Suzette", "Sydnee",
    "Sydni", "Sydnie", "Sylvia", "Sylvie",
    
    // T
    "Tabitha", "Talia", "Taliyah", "Tamara", "Tamia", "Tania", "Tanya", "Tara", "Taryn", "Tatiana",
    "Tatum", "Tatyana", "Taya", "Tayla", "Taylor", "Teagan", "Tegan", "Temperance", "Teresa", "Teri",
    "Terra", "Terri", "Terry", "Tessa", "Thalia", "Thea", "Thelma", "Theresa", "Therese", "Tia",
    "Tiana", "Tianna", "Tiara", "Tierra", "Tiffany", "Tiffani", "Tina", "Tinsley", "Toni", "Tonia",
    "Tonya", "Tori", "Tracey", "Traci", "Tracie", "Tracy", "Tressa", "Trisha", "Trista",
    "Tristan", "Tristen", "Tristyn", "Troy", "Trudy", "Tula",
    
    // U
    "Uma", "Ursula",
    
    // V
    "Valentina", "Valeria", "Valerie", "Valery", "Vanessa", "Veda", "Vera", "Veronica", "Victoria", "Vida",
    "Violet", "Violett", "Violeta", "Virginia", "Viviana", "Vivian", "Vivienne", "Vivien",
    
    // W
    "Wanda", "Waverly", "Wendy", "Whitney", "Willow", "Winter", "Wren", "Wynter",
    
    // X
    "Ximena",
    
    // Y
    "Yara", "Yareli", "Yaretzi", "Yasmin", "Yasmine", "Yazmin", "Yesenia", "Yolanda", "Yvette", "Yvonne",
    
    // Z
    "Zahra", "Zainab", "Zaniyah", "Zara", "Zaria", "Zariah", "Zayla", "Zaylee",
    "Zelda", "Zendaya", "Zia", "Zoe", "Zoey", "Zoie", "Zola", "Zora", "Zuri", "Zyla"
];

// Gender-neutral names
const genderNeutralNames = [
    "Alex", "Avery", "Blake", "Cameron", "Casey", "Charlie", "Drew", "Emery", "Finley",
    "Harley", "Hayden", "Indigo", "Jamie", "Jordan", "Kai", "Kendall", "Lane", "Logan", "Marley",
    "Morgan", "Noah", "Ocean", "Parker", "Peyton", "Phoenix", "Quinn", "Reese", "Riley", "River",
    "Rowan", "Rory", "Sage", "Skylar", "Sloane", "Tatum", "Taylor", "Tyler"
];

// Combine all names into a single array for detection
const names = [...maleNames, ...femaleNames, ...genderNeutralNames];

// Export as window properties for use in good-listener.html
window.condolencesStatement = condolencesStatement;
window.condolencesQuestion = condolencesQuestion;
window.condolencesActiveListening = condolencesActiveListening;
window.names = names;
window.condolencesPersonal = condolencesPersonal;
