const allQuestions = [
    {
      "english": "Make a killing (He made a killing on the stock market last year)",
      "french": "Faire fortune (Il a fait fortune en bourse l'année dernière)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "A flick (We watched a flick last night at the theater)",
      "french": "Un film (Nous avons regardé un film au cinéma hier soir)",
      category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      "english": "To hit the sack (I'm really tired, I'm going to hit the sack)",
      "french": "Aller au lit (Je suis vraiment fatigué, je vais aller au lit)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To be cheesy (The movie was so cheesy, I couldn't take it seriously)",
      "french": "Être ringard (Le film était tellement ringard que je ne pouvais pas le prendre au sérieux)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To shell out (I had to shell out a lot of money for car repairs)",
      "french": "Débourser (J'ai dû débourser beaucoup d'argent pour les réparations de la voiture)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Hold your horses (Hold your horses! We haven't finished yet)",
      "french": "Attends un peu (Attends un peu ! Nous n'avons pas encore fini)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To lose one's marbles (He seems to have lost his marbles lately)",
      "french": "Perdre la tête (Il semble avoir perdu la tête ces derniers temps)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Of poor quality (The product they sold me was of poor quality)",
      "french": "De mauvaise qualité (Le produit qu'ils m'ont vendu était de mauvaise qualité)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Don't you dare... (Don't you dare lie to me)",
      "french": "N'ose même pas... (N'ose même pas me mentir)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Can I give you my two cents' worth? (Can I give you my two cents' worth on this issue?)",
      "french": "Puis-je te donner mon avis ? (Puis-je te donner mon avis sur ce sujet ?)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To nail it (She nailed it in her presentation at work)",
      "french": "Réussir (Elle a réussi sa présentation au travail)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To be stoked (He's stoked about going on vacation)",
      "french": "Être super content (Il est super content de partir en vacances)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Basket case (After working so much, he became a real basket case)",
      "french": "Un cas désespéré (Après avoir tant travaillé, il est devenu un vrai cas désespéré)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "Back in the day (Back in the day, we used to play outside all day)",
      "french": "À l'époque (À l'époque, nous jouions dehors toute la journée)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To crash (I'm going to crash at my friend's place tonight)",
      "french": "Pioncer (Je vais pioncer chez mon ami ce soir)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "To hit the road (We need to hit the road if we want to arrive on time)",
      "french": "Prendre la route (Nous devons prendre la route si nous voulons arriver à l'heure)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      "english": "A set of wheels (He just bought a new set of wheels)",
      "french": "Une bagnole (Il vient d'acheter une nouvelle bagnole)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
      {
        "english": "To be in the doghouse (He's in the doghouse after forgetting their anniversary)",
        "french": "Être dans le pétrin (Il est dans le pétrin après avoir oublié leur anniversaire)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "To be sketchy (That part of town is really sketchy at night)",
        "french": "Être louche (Ce quartier est vraiment louche la nuit)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "A big hassle (Moving to a new house is a big hassle)",
        "french": "Une grosse galère (Déménager dans une nouvelle maison est une grosse galère)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "Chill out (You need to chill out and relax)",
        "french": "Se détendre (Tu as besoin de te détendre et de te relaxer)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "Driving me nuts (Her constant complaining is driving me nuts)",
        "french": "Me rendre fou (Ses plaintes constantes me rendent fou)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "To go ballistic (He went ballistic when he found out his car was stolen)",
        "french": "Piquer une crise/péter les plombs (Il a piqué une crise quand il a découvert que sa voiture avait été volée)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "That sounds fishy to me (His explanation sounds fishy to me)",
        "french": "Ça me semble louche (Son explication me semble louche)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "A no-brainer (Choosing the right answer was a no-brainer)",
        "french": "Quelque chose de très simple (Choisir la bonne réponse était très simple)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "Up one's sleeve (He always has a few tricks up his sleeve)",
        "french": "Avoir plus d'un tour dans sa manche (Il a toujours quelques tours dans sa manche)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "Scalper (The scalper was selling concert tickets for double the price)",
        "french": "Revendeur (Le revendeur vendait des billets de concert pour le double du prix)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "Ripped off (He got ripped off when he bought that watch)",
        "french": "Se faire arnaquer (Il s'est fait arnaquer quand il a acheté cette montre)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "The whole nine yards (They went the whole nine yards to make sure the event was a success)",
        "french": "Tout le nécessaire/la totale (Ils ont fait tout le nécessaire pour s'assurer que l'événement soit un succès)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "To be a day late and a dollar short (He tried to fix the problem, but it was a day late and a dollar short)",
        "french": "Arriver après la bataille/trop tard/en retard (Il a essayé de résoudre le problème, mais il est arrivé après la bataille)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },      
      {
        "english": "Cut yourself some slack (You should cut yourself some slack! We can all fail)",
        "french": "Ne pas être si dur avec toi (Tu ne devrais pas être si dur avec toi-même. On peut tous échouer)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "To bomb (The movie bombed at the box office)",
        "french": "Faire un flop (Le film a fait un flop au box-office)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },
      {
        "english": "The bomb (Her performance was the bomb, everyone loved it)",
        "french": "Génial (Sa performance était géniale, tout le monde l'a adorée)",
        category: "expression",
        explicitCategory: "Expressions/Phrases types",
      },    

    {
        "english": "Binoculars (He used binoculars to watch the birds in the distance)",
        "french": "Jumelles (Il a utilisé des jumelles pour observer les oiseaux au loin)",
        category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
        "english": "Lamb (They served roasted lamb for dinner)",
        "french": "Agneau (Ils ont servi de l'agneau rôti pour le dîner)",
        category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
        "english": "Comb (She combed her hair before leaving the house)",
        "french": "Peigne (Elle a peigné ses cheveux avant de quitter la maison)",
        category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
        "english": "Thumb (He injured his thumb while playing basketball)",
        "french": "Pouce (Il s'est blessé le pouce en jouant au basket)",
        category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
        "english": "Winery (They visited a winery during their trip to Napa Valley)",
        "french": "Vignoble (Ils ont visité un vignoble lors de leur voyage dans la Napa Valley)",
        category: "car",
        explicitCategory: "En balade/En voiture",
    },
    {
        "english": "Gherkin (She added a gherkin to her sandwich)",
        "french": "Cornichon (Elle a ajouté un cornichon à son sandwich)",
        category: "hotel-travel-restaurant",
        explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
        "english": "Hiccup (USA) / Hiccough (UK) (He had a hiccup after drinking soda)",
        "french": "Hoquet (Il a eu le hoquet après avoir bu du soda)",
        category: "vocabulary",
        explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "This/these ; That/those (This dog is mine, that other dog is not)",
      french:
        "Pour désigner quelque chose de prés/proche ou que l'on connait ; Pour désigner quelque chose de loin (Ce chien est le mien, celui-là non)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire",
    },
    {
        english: 'I stopped to eat / I stopped eating',
        french: "J'ai arrété pour manger. J'ai arrété de manger",
        category: "word-syntaxe",
        explicitCategory: "Syntaxe/Grammaire"
    },
    {
      english: "Right here (The best café is right here!)",
      french: "Juste ici. (Le meilleur café est ici !)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire",
    },
    {
      english:
        "Right there (The bookstore you are looking for is right there, next to the bakery.)",
      french:
        "Juste là. Quelque chose un peu loin (La librairie que tu cherches est juste là, à côté de la boulangerie)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire",
    },
    {
      english: "Over here (during phone call: I’m over here!)",
      french:
        "Là. Quand je suis un peu éloigné de ce que je montre (au téléphone : Je suis là !)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire",
    },
    {
      english: "Over there (You can find a USB cable over there, on the shelf)",
      french:
        "Là-bas. Je suis loin de ce que je montre, ou même pas dans la même piece (Tu peux trouver un câble USB là-bas, sur l'étagère)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Will (She will travel to Japan someday)",
      french:
        "Verbe pour définir un futur loin/non défini (Elle voyagera au Japon un jour)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english:
        "To be going to + infinitif (I'm going to start a new job next week)",
      french:
        "Verbe pour définir un futur proche, action défini (Je vais commencer un nouveau job la semaine prochaine)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "To play the guitare",
      french: "Jouer de la guitare",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "To play football",
      french: "Jouer au foot",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      english: "Accomodation (We need to book our accommodation for the trip)",
      french:
        "Hébergement (Nous devons réserver notre hébergement pour le voyage)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Actually (She actually prefers tea over coffee)",
      french: "En fait/justement (Elle préfère en fait le thé au café)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Also (He also invited his sister to the party)",
      french: "Aussi (Il a aussi invité sa sœur à la fête)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english:
        "Amenities (The hotel offers many amenities, including a spa and a gym)",
      french:
        "Services, équipement, commodités (L'hôtel offre de nombreux services, y compris un spa et une salle de sport)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Batter (The batter for the pizza is almost ready)",
      french:
        "Pâte levée (pizza, pain, etc) (La pâte pour la pizza est presque prête)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Dough (I need to prepare the dough for the cake)",
      french: "Pâte à gâteau (Je dois préparer la pâte à gâteau)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Bash (We're throwing a big bash for his birthday)",
      french:
        "Teuf/soirée (Nous organisons une grande teuf pour son anniversaire)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Bed linen (Please change the bed linen before the guests arrive)",
      french:
        "Linge de lit, draps (Veuillez changer le linge de lit avant l'arrivée des invités)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Brand new (She bought a brand new car last week)",
      french:
        "Tout(e) neuf(ve) (Elle a acheté une voiture toute neuve la semaine dernière)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Breadwinner (He is the breadwinner of the family)",
      french:
        "La personne qui rapporte l'argent à la maison (Il est la personne qui rapporte l'argent à la maison)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Bride (The bride looked beautiful in her wedding dress)",
      french:
        "La mariée (dans un mariage) (La mariée était magnifique dans sa robe de mariage)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Calf/calves (My calves are sore from running)",
      french: "Mollet/mollets (Mes mollets sont endoloris à cause de la course)",
      category: "vocabulary-body",
      explicitCategory: "Vocabulaire corps humain",
    },
    {
      english: "Cast (He had to wear a cast after breaking his leg)",
      french: "Plâtre (Il a dû porter un plâtre après s'être cassé la jambe)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Ceiling (The ceiling in the living room is very high)",
      french: "Plafond (Le plafond du salon est très haut)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Complaint (She filed a complaint about the noise)",
      french: "Plainte (Elle a déposé une plainte à propos du bruit)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Complimentary (The hotel offers complimentary breakfast)",
      french: "Gratuit/offert (L'hôtel offre le petit-déjeuner gratuit)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Conductor (The conductor led the orchestra beautifully)",
      french:
        "Chef d'orchestre/conducteur (matière conductrice) (Le chef d'orchestre a dirigé l'orchestre magnifiquement)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Countryside (They love spending weekends in the countryside)",
      french: "Campagne (Ils aiment passer les week-ends à la campagne)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Crate (wooden crate) (They shipped the goods in a wooden crate)",
      french:
        "Caisse (caisse en bois) (Ils ont expédié les marchandises dans une caisse en bois)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Crutches (He had to use crutches after the accident)",
      french: "Béquilles (Il a dû utiliser des béquilles après l'accident)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "Dairy (She avoids dairy products because she's lactose intolerant)",
      french:
        "Laitier (Elle évite les produits laitiers car elle est intolérante au lactose)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "Departure lounge (We waited in the departure lounge for our flight)",
      french:
        "Salle d'embarquement (Nous avons attendu dans la salle d'embarquement pour notre vol)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Drying rack (She hung the clothes on the drying rack)",
      french: "Étendage (Elle a accroché les vêtements sur l'étendage)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Either ... or ... (You can have either coffee or tea)",
      french: "Soit l'un, soit l'autre (Tu peux avoir soit du café, soit du thé)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Elbow (He hurt his elbow while playing tennis)",
      french: "Coude (Il s'est blessé au coude en jouant au tennis)",
      category: "vocabulary-body",
      explicitCategory: "Vocabulaire corps humain",
    },
    {
      english: "Groom (The groom looked nervous before the ceremony)",
      french:
        "Le marié (dans un mariage) (Le marié avait l'air nerveux avant la cérémonie)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Harmful (Smoking is harmful to your health)",
      french: "Nocif (Fumer est nocif pour ta santé)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Hazard (Wet floors are a common hazard in kitchens)",
      french:
        "Dangers, risques (Les sols mouillés sont un danger courant dans les cuisines)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Hence (He was late, hence the missed meeting)",
      french:
        "Donc, ainsi, en conséquence (Il était en retard, donc la réunion a été manquée)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Highball (He ordered a highball at the bar)",
      french:
        "Cocktail whisky/coca en gros, cocktail très simple (Il a commandé un cocktail au bar)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "In spite of / despite (In spite of the rain, we went for a walk)",
      french: "Malgré que (Malgré la pluie, nous sommes allés nous promener)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      english: "Kennel (We left our dog at the kennel while we went on vacation)",
      french:
        "Chenil/pension pour chien (Nous avons laissé notre chien au chenil pendant que nous partions en vacances)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Leash (She always walks her dog on a leash)",
      french: "Laisse (Elle promène toujours son chien en laisse)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Linen (She changed the linen on the bed)",
      french: "Linge (Elle a changé le linge sur le lit)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Meanwhile (Meanwhile, he was preparing dinner)",
      french: "Pendant ce temps (Pendant ce temps, il préparait le dîner)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Muzzle (The dog wore a muzzle at the veterinarian)",
      french: "Muselière (Le chien portait une muselière chez le vétérinaire)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Nearby (There is a café nearby where we can get coffee)",
      french:
        "À proximité/proche (Il y a un café à proximité où nous pouvons prendre un café)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Nosy (He's so nosy, always asking about other people's business)",
      french:
        "Curieux négativement != Curious (Il est tellement curieux, toujours à demander des choses sur la vie des autres)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "Quaint (The village was quaint with its narrow streets and old buildings)",
      french:
        "Pittoresque != Podunk (trou perdu) (Le village était pittoresque avec ses rues étroites et ses vieux bâtiments)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Roundabout (Take the third exit at the roundabout)",
      french: "Rond point (Prenez la troisième sortie au rond-point)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Scarf/Scarves (She wore a scarf to keep warm)",
      french: "Écharpe (Elle portait une écharpe pour se réchauffer)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Sightseeing (We went sightseeing around the city)",
      french:
        "L'activité de tourisme (balader, visiter) (Nous avons fait du tourisme dans la ville)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Shovel (He used a shovel to dig a hole)",
      french: "Pelle (Il a utilisé une pelle pour creuser un trou)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Stairs (Take the stairs to the second floor)",
      french: "Escaliers (Prenez les escaliers pour aller au deuxième étage)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      english: "Stench (The stench in the room was unbearable)",
      french: "Puanteur != Aroma (La puanteur dans la pièce était insupportable)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "Stopover (We had a stopover in Paris before continuing our journey)",
      french:
        "Escale (Nous avons fait une escale à Paris avant de poursuivre notre voyage)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Straight (Go straight for two blocks, then turn left)",
      french:
        "Droit (Continuez tout droit pendant deux pâtés de maisons, puis tournez à gauche)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Straight ahead (The store is straight ahead on the left)",
      french: "Tout droit (Le magasin est tout droit sur la gauche)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Stretcher (The injured person was carried away on a stretcher)",
      french: "Brancard (La personne blessée a été emportée sur un brancard)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Such (such a car! Such a beautiful sunset!)",
      french:
        "Pour accentuer quelque chose de wouah (Quelle voiture ! Quel beau coucher de soleil !)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Surburbs (They live in the suburbs of the city)",
      french: "Banlieue (Ils habitent en banlieue de la ville)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Tableware (She set the table with elegant tableware)",
      french: "Vaisselle (Elle a mis la table avec de la vaisselle élégante)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Thrifty (She's very thrifty and always looks for bargains)",
      french:
        "Économique/économe != Cheap (radin) (Elle est très économe et cherche toujours les bonnes affaires)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      english: "Thirsty (He was thirsty after running for an hour)",
      french: "Assoifé (Il avait soif après avoir couru pendant une heure)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Throughout (Throughout the year, we celebrate various holidays)",
      french:
        "Tout au long de ... (selon le contexte : année, chemin, ...) (Tout au long de l'année, nous célébrons différentes fêtes)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "To bark (The dog barks when someone knocks on the door)",
      french: "Aboyer (Le chien aboie quand quelqu'un frappe à la porte)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To growl (The cat growled when approached)",
      french: "Grogner (Le chat a grogné quand on s'est approché)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To hungry (I'm too hungry to wait any longer)",
      french:
        "Avoir faim (Je suis tellement affamé que je ne peux plus attendre)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To pick (him/my son) up (I'll pick you up from the airport)",
      french: "Passer (le) prendre (Je viendrai te chercher à l'aéroport)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To put on (She put on her coat before going outside)",
      french: "Mettre un vêtement (Elle a mis son manteau avant de sortir)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To shell out (He had to shell out a lot of money for the repairs)",
      french:
        "Dépenser (Il a dû dépenser beaucoup d'argent pour les réparations)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To melt (The ice cream started to melt in the sun)",
      french: "Fondre (La glace a commencé à fondre au soleil)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      english: "To simmer (The stew needs to simmer for at least an hour)",
      french: "Mijoter (Le ragoût doit mijoter pendant au moins une heure)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To swallow (He swallowed the pill with a glass of water)",
      french: "Avaler (Il a avalé la pilule avec un verre d'eau)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To swerve (The car swerved to avoid hitting the deer)",
      french:
        "Faire une embardée (La voiture a fait une embardée pour éviter de heurter le cerf)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english:
        "To take advantage of ... (She took advantage of the opportunity to learn a new skill)",
      french:
        "Profiter de ... (Elle a profité de l'occasion pour apprendre une nouvelle compétence)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To take off (He took off his jacket when he entered the house)",
      french:
        "Enlever un vêtement (Il a enlevé sa veste lorsqu'il est entré dans la maison)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To throw (the garbage) out (Don't forget to throw out the garbage before you leave)",
      french:
        "Jeter à la poubelle (N'oublie pas de jeter les déchets avant de partir)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To tidy up (She tidied up her desk before leaving work)",
      french: "Ranger (Elle a rangé son bureau avant de quitter le travail)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To write down (He wrote down the phone number on a piece of paper)",
      french: "Noter (Il a noté le numéro de téléphone sur un morceau de papier)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "Tourism (Tourism is an important economic activity in this region)",
      french:
        "Activité économique liée au tourisme (Le tourisme est une activité économique importante dans cette région)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english: "Trousers ou pants (He bought a new pair of trousers)",
      french: "Pantalon (Il a acheté un nouveau pantalon)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Upset (She was upset when she heard the news)",
      french:
        "Contrarié (Elle était contrariée quand elle a entendu la nouvelle)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Vacancy (There's a vacancy for a receptionist at the hotel)",
      french:
        "Chambre libre ou un emploi libre (Il y a un poste vacant de réceptionniste à l'hôtel)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
  
    {
      english:
        "Bear with me for a second (Bear with me for a second while I find the file)",
      french:
        "Attend 1 seconde. Sois patient (Attends une seconde pendant que je trouve le fichier)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "Break a leg (Break a leg on your performance tonight!)",
      french: "Bonne chance/Merde (Merde pour ta performance ce soir!)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "Could you put me through to him? (Could you put me through to Mr. Smith, please?)",
      french:
        "Pourriez-vous me le passer ? (Pourriez-vous me passer M. Smith, s'il vous plaît ?)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "Day off (I'm looking forward to my day off tomorrow)",
      french: "Jour de congé (J'ai hâte à mon jour de congé demain)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "Daily special (The restaurant's daily special is grilled salmon)",
      french: "Plat du jour (Le plat du jour du restaurant est du saumon grillé)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      english:
        "Every evening/on Tuesdays/on weekends (I go for a walk every evening)",
      french:
        "Tous les soirs/tous les mardis/tous les weekends (Je vais me promener tous les soirs)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english:
        "Excuse me to be rude, but ... (Excuse me to be rude, but can you please lower your voice?)",
      french:
        "Pardon d'être impolie, mais ... (Pardon d'être impolie, mais pourriez-vous baisser la voix, s'il vous plaît ?)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "Go diving (They're planning to go diving in the Caribbean)",
      french:
        "Faire de la plongée (Ils prévoient de faire de la plongée dans les Caraïbes)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      english:
        "How/What about ... ? (How about eating pasta? How about a piece of cake?)",
      french:
        "Et pourquoi pas/Que dirais-tu ... ? (Que dirais-tu de manger des pates ? Que dirais-tu d'une part de gateau ?)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      english:
        "It's a kind of (It's a kind of dessert made with fruit and cream)",
      french:
        "C'est un genre de ... (C'est un genre de dessert fait avec des fruits et de la crème)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "It's a type of (It's a type of bird commonly found in this area)",
      french:
        "C'est un type de ... (C'est un type d'oiseau couramment trouvé dans cette région)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english:
        "Neither ... nor ... (Neither John nor Sarah could attend the meeting)",
      french: "Ni ... ni ... (Ni John ni Sarah n'ont pu assister à la réunion)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "None of ... (None of the options were suitable for the project)",
      french: "Aucune de ... (Aucune des options n'était adaptée pour le projet)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "Podunk town (He moved to a Podunk town in the middle of nowhere)",
      french:
        "Ville isolée (Il a déménagé dans une ville isolée au milieu de nulle part)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "So that (I studied hard so that I could pass the exam)",
      french:
        "Pour que, afin que (J'ai étudié dur pour que je puisse réussir l'examen)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english:
        "The hole in the wall (She found herself in a hole in the wall town)",
      french:
        "Un trou perdu (en parlant d'une ville) (Elle se retrouva dans une ville trou perdu)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To airlift somebody (The injured hiker was airlifted to safety)",
      french:
        "Héliporter quelqu'un (Le randonneur blessé a été héliporté en sécurité)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To be into (She's really into photography)",
      french: "Être fan de (Elle est vraiment fan de photographie)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To be hammered (He was too hammered to drive home)",
      french:
        "Être bourré (Il était trop bourré pour rentrer chez lui en voiture)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To betray someone's trust (She felt betrayed when she found out he had lied)",
      french:
        "Trahir la confiance de quelqu'un (Elle se sentit trahie quand elle découvrit qu'il avait menti)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To cope with (She struggled to cope with the loss of her pet)",
      french:
        "Gérer, s'en sortir (Elle a eu du mal à gérer la perte de son animal de compagnie)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To confide in somebody (He confided in his best friend about his troubles)",
      french:
        "Se confier à quelqu'un (Il s'est confié à son meilleur ami à propos de ses problèmes)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      english: "To earn a living (He works hard to earn a living for his family)",
      french:
        "Gagner sa vie (Il travaille dur pour gagner sa vie pour sa famille)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To fall through (Their plans to go on vacation fell through due to bad weather)",
      french:
        "(Un plan) tomber à l'eau (Leurs projets de partir en vacances sont tombés à l'eau à cause du mauvais temps)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To join the workforce (After graduating, she joined the workforce as a software engineer)",
      french:
        "Entrer dans la vie active (Après avoir obtenu son diplôme, elle est entrée dans la vie active en tant qu'ingénieure en logiciel)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To get ill (He got ill after eating spoiled food)",
      french:
        "Tomber malade (Il est tombé malade après avoir mangé de la nourriture avariée)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To get laid off (He got laid off from his job due to budget cuts)",
      french:
        "Être licencié (Il a été licencié de son emploi en raison de coupes budgétaires)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To get something just right (She finally got the recipe just right)",
      french:
        "Exécuter parfaitement quelque chose (Elle a finalement exécuté la recette parfaitement)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To go past (We went past the store on our way to the park)",
      french:
        "Passer devant (Nous sommes passés devant le magasin en allant au parc)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To grab some grub (Let's grab some grub before the movie)",
      french: "Choper de la bouffe (Attrapons de la bouffe avant le film)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To have a blast (We had a blast at the party last night)",
      french: "S'éclater en soirée (On s'est éclatés à la fête hier soir)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      english: "To hit the point. (The beer hit the point!)",
      french:
        "Quelque chose que j'apprécie beaucoup au bon moment au bon endroit. Faire mouche (la bière a fait du bien!)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      english:
        "To kill two birds with one stone (By working out during lunch breaks, she kills two birds with one stone)",
      french:
        "D'une pierre deux coups (En faisant de l'exercice pendant les pauses déjeuner, elle fait d'une pierre deux coups)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To let off steam (He goes for a run to let off steam after a long day at work)",
      french:
        "Décompresser (Il va courir pour décompresser après une longue journée de travail)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To take one's word for it (I'll take his word for it that the project will be completed on time)",
      french:
        "Croire quelqu'un sur parole (Je vais le croire sur parole que le projet sera terminé à temps)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To tell a white lie (She told a white lie to avoid hurting his feelings)",
      french:
        "Dire un petit mensonge (pour protéger quelqu'un) (Elle a dit un petit mensonge pour éviter de blesser ses sentiments)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To throw a party (They're throwing a party to celebrate their anniversary)",
      french:
        "Organiser une fête (Ils organisent une fête pour célébrer leur anniversaire)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To work from home (I work from home twice a week)",
      french:
        "Télétravail. Home Office est français (Je télétravaille deux fois par semaine)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "What do you think of ... ? (What do you think of the new restaurant in town?)",
      french:
        "Qu'est-ce que tu penses de ... ? (Que penses-tu du nouveau restaurant en ville ?)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "It's cheaper than dirt (Buying used books is cheaper than dirt)",
      french:
        "Ça coûte presque rien (Acheter des livres d'occasion, ça coûte presque rien)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To dust the furniture (She dusts the furniture every weekend)",
      french:
        "Dépoussiérer les meubles (Elle dépoussière les meubles chaque week-end)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To mop the floors (He mops the floors twice a week)",
      french: "Laver le sol (Il lave le sol deux fois par semaine)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      english: "To RSVP (Please RSVP by Friday if you're attending the party)",
      french:
        "Répondre aux questionnaires SVP (Merci de répondre aux questionnaires SVP d'ici vendredi si vous participez à la fête)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      english: "How many ...? (How many cookies do you want?)",
      french: "Combien de ... ? Dénombrable (Combien de cookies tu veux ?)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "How much ...? (How much floor do you need?)",
      french:
        "Combien de ... ? indénombrable (Combien de farine as-tu besoin ? )",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      english: "How often ...? (How often does she go hiking?)",
      french: "À quelle fréquence ... ? (À quelle fréquence elle va au ski ?)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      english: "To cope with (She copes with stress by practicing yoga)",
      french:
        "Pour faire face à (Elle fait face au stress en pratiquant le yoga)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To count on (I can count on him to help me with the project)",
      french:
        "Pouvoir compter sur ... (Je peux compter sur lui pour m'aider avec le projet)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To fill out (Please fill out this form with your personal information)",
      french:
        "Compléter (un document) (Veuillez compléter ce formulaire avec vos informations personnelles)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To get along with (She gets along with her coworkers)",
      french: "S'entendre bien avec ... (Elle s'entend bien avec ses collègues)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To go over (Let's go over the details of the plan one more time)",
      french:
        "Passer en revue, revoir (Passons en revue les détails du plan une fois de plus)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To hang out with (He likes to hang out with his friends on the weekends)",
      french: "Traîner avec ... (Il aime traîner avec ses amis le week-end)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To look after (She looks after her younger siblings)",
      french:
        "S'occuper de ... (Elle s'occupe de ses frères et sœurs plus jeunes)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To look for (I'm looking for my keys, have you seen them?)",
      french: "Chercher (Je cherche mes clés, les as-tu vues ?)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To look forward to + ing (I'm looking forward to meeting you)",
      french:
        "Hâte de faire quelque chose (Je suis impatient de vous rencontrer)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To look into (We need to look into this issue further)",
      french: "Examiner (Nous devons examiner cette question plus en détail)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To look up (I need to look up the meaning of this word)",
      french: "Vérifier (Je dois vérifier la signification de ce mot)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To phone up (I'll phone up the restaurant to make a reservation)",
      french:
        "Téléphoner à (Je vais téléphoner au restaurant pour faire une réservation)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To run over (The car ran over the bicycle in the street)",
      french:
        "Écraser (avec un véhicule) (La voiture a écrasé le vélo dans la rue)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To run out of (We've run out of milk, we need to buy more)",
      french:
        "Manquer de qqchose (Nous n'avons plus de lait, nous devons en acheter plus)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To scratch up (He scratched up his car by accident)",
      french: "Égratigner (Il a égratigné sa voiture par accident)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english:
        "To see to (She'll see to it that everything is ready for the meeting)",
      french:
        "S'occuper de / Veiller sur ... (Elle veillera à ce que tout soit prêt pour la réunion)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To watch out for (Watch out for cars when crossing the street)",
      french:
        "Faire attention à ... (Faites attention aux voitures en traversant la rue)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      english: "To be used to (I am used to drink wine)",
      french: "Avoir l'habitude de (J'ai l'habitude de boire du vin)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "To get used to (I am getting to used to drink wine)",
      french: "Prendre l'habitude de (Je prends l'habitude de boire du vin)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      english: "Used to (I used to live in Berlin)",
      french: "Avant je faisais ça (J'habitais à Berlin avant)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      french: "Santé !",
      english: "Cheers !",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "C’était délicieux !",
      english: "It was delicious !",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Qu’est-ce que vous me recommandez?",
      english: "What do you recommend ?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Sans épice !",
      english: "Not spicy !",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "C’est trop chaud !",
      english: "It’s too hot !",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Je suis allergique",
      english: "I’m allergic",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Fruit de mer",
      english: "Sellfish",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Cacahuète",
      english: "Peanut",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Gluten",
      english: "Gluten",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Je voudrais (Je voudrais l’addition s’il vous plait)",
      english: "I would like (I would like the bill please)",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      french: "C’est un très bon prix",
      english: "It’s very cheap",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "C’est trop cher",
      english: "It’s too expensive",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Pouvez-vous baisser le prix ?",
      english: "Could you lower the price ?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Je voudrais acheter … ça, celui-ci !",
      english: "I would like to buy … this, that one !",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Je ne fais que regarder",
      english: "I’m just looking arround",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
  
    {
      french: "Argent liquide",
      english: "Cash",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Avez-vous ma taille ?",
      english: "Do you have my size ?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Avez-vous quelque chose de moins cher ?",
      english: "Do you have something cheaper ?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Carte de credit",
      english: "Credit card",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Carte postale",
      english: "Postcard",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Combien ça coûte",
      english: "How much is it",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      french: "C’est trop grand",
      english: "It’s too big",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "C’est trop petit",
      english: "It’s too small",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Distributeur de billet",
      english: "ATM machine",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Je cherche ...",
      english: "I'm looking for ...",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      french: "Je voudrais acheter",
      english: "I'd like to buy",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french:
        "Où puis-je acheter ...? (Où puis-je acheter des billets de train ?)",
      english: "Where can I buy ...? (Where can I buy train tickets?)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Pouvez vous m'écrire le prix ?",
      english: "Can you write the price?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Puis je avoir un sac SVP ?",
      english: "Can I have a bag please?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Puis je essayer ?",
      english: "Can I try it on?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Puis je passer le prendre plus tard ?",
      english: "Can I pick it up later?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Timbres",
      english: "Stamps",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      french: "Citron pressé",
      english: "Lemonade",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Coca light",
      english: "Diet Coke",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Diabolo menthe",
      english: "Green mint syrup in soda water",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Eau du robinet",
      english: "Tap water",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Eau gazeuse",
      english: "Sparkling water",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Eau minéral",
      english: "Mineral water",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus d'ananas",
      english: "Pineapple juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus d'orange",
      english: "Orange juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus de fruit",
      english: "Fruit juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus de pamplemousse",
      english: "Grapefruit juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus de pomme",
      english: "Apple juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus de raisin",
      english: "Grape juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Jus de tomate",
      english: "Tomato juice",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Branchement électrique",
      english: "Electrical connection",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Charbon de bois",
      english: "Charcoal",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Emplacements libres",
      english: "Pitches available",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Sac à dos",
      english: "Backpack",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Spray contre les insectes",
      english: "Bug repellent",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Toilettes",
      english: "Restrooms",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
  
    {
      french: "A bientôt",
      english: "See you soon",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "A gauche - à droite",
      english: "On the left - On the right",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Bon marché",
      english: "Cheap",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "C'est une urgence",
      english: "It's an emergency",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Cher",
      english: "Expensive",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "De l’autre côté",
      english: "On the other side",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Derrière",
      english: "Behind",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Devant",
      english: "In front",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "En face de",
      english: "In front of the",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Près",
      english: "Near",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      french: "A quelle heure devons nous liberer la chambre ?",
      english: "What time is the checkout ?",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Avez-vous une connexion internet ?",
      english: "Do you have an internet connexion ?",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Complet",
      english: "No vacancies",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Laverie",
      english: "Laundry",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Petit déjeuner compris",
      english: "Breakfast included",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
  
    {
      french: "Carrefour",
      english: "Intersection",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Centre commercial",
      english: "Mall",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Cinéma",
      english: "Movie theater",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Gare",
      english: "Train station",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "La Poste",
      english: "Post office",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Pharmacie",
      english: "Pharmacy, Drugstore",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Poste de police",
      english: "Police station",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
  
    {
      french: "Viande à point (cuisson)",
      english: "Médium-rare meat",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Viande bien cuite (cuisson)",
      english: "Well-done meat",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Viande bleu (cuisson)",
      english: "Very rare meat",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Entre à point et Bien cuit",
      english: "Medium meat",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Saignant",
      english: "Rare meat",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "A quelle distance ... ?",
      english: "How far ...?",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
    {
      french: "Combien de temps ... ?",
      english: "How long ...?",
      category: "word-syntaxe",
      explicitCategory: "Syntaxe/Grammaire/Verbe",
    },
  
    {
      french: "Assaisonnement (au restaurant)",
      english: "Dressing/seasoning (au restaurant)",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Frites",
      english: "French fries",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "L'addition",
      english: "The bill",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Légumes",
      english: "Vegetable",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Napkins",
      english: "Serviettes de table",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Puis je avoir",
      english: "May I have some",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Purée de pommes de terre",
      english: "Mashed potatoes",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Sauce salade",
      english: "Salad dressing",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Une table pour deux",
      english: "A table for two",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Œuf dur",
      english: "Hard boiled egg",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Œuf sur le plat",
      english: "Over-easy egg",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Œuf à la coque",
      english: "Soft boiled egg",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
  
    {
      french: "Accident de voiture",
      english: "Car crash",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Hôpital",
      english: "Hospital",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Mal de tête",
      english: "Headache",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Mal de ventre",
      english: "Stomach ache",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Médecin",
      english: "Doctor",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Panne",
      english: "Breakdown",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Rhume",
      english: "Common cold",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Toux",
      english: "Cough",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Vol (voler quelque chose)",
      english: "Thef (To steal)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  
    {
      french: "Anorak",
      english: "Anorak",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Briefs",
      english: "Slip",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Ceinture",
      english: "Belt",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Chaussettes",
      english: "Socks",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Chemise",
      english: "Shirt",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Chemisier",
      english: "Blouse",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Collant",
      english: "Panty hose",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Gants",
      english: "Gloves",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Imperméable",
      english: "Raincoat",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Jupe",
      english: "Skirt",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Maillot de bains",
      english: "Bathing suit",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Sac à main",
      english: "Handbag",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Centre-ville",
      english: "City Center",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Code Postal",
      english: "Zip code",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Mairie",
      english: "City hall",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Marché",
      english: "Market",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Port",
      english: "Harbor",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Amende doublée (en voiture)",
      english: "Double fine",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Bétail en liberté (donc peut se trouver sur la route !)",
      english: "Open range (panneau sur la route)",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Doubler avec prudence",
      english: "Pass with care",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Essence",
      english: "Gas",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Loueur",
      english: "Car rental",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Ne pas dépasser les 15mi/h si les feux clignotent",
      english: "Speed limit 15 when flashing",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Retour de voiture de location",
      english: "Car return",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Sens unique",
      english: "One way",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Si vous êtes sur la file de droite vous devez tourner à droite",
      english: "Right line must turn",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Stationnement interdit",
      english: "No parking",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Stop si les feux clignotent",
      english: "Stop when flashing",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Vitesse limitée à 50mi/h",
      english: "Speed limit 50",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french:
        "Voie de circulation réservée aux véhicules contenant un nombre de personnes minimum (souvent 2 ou plus), parfois 3 ou plus)",
      english: "Car pool",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french:
        "Vous ne pouvez pas tourner à droite si le feu est rouge (contrairement à l'habitude aux US)",
      english: "No turn on red light",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Est-ce près/loin ?",
      english: "Is it close/far away ?",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Centre-ville",
      english: "Downtown",
      category: "car",
      explicitCategory: "En balade/En voiture",
    },
    {
      french: "Voulez-vous quelque chose à boire ?",
      english: "Anything to drink?/Something to drink?",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "Voulez-vous autre chose ?",
      english: "Anything else?/Something else?",
      category: "hotel-travel-restaurant",
      explicitCategory: "Hôtel/Voyage/Restaurant",
    },
    {
      french: "En vente/En solde/En promotion (Celui-là est en promotion)",
      english: "On sale (That one is on sale)",
      category: "expression",
      explicitCategory: "Expressions/Phrases types",
    },
    {
      french: "Coucher de soleil (Point du coucher du soleil)",
      english: "Sunset (Sunset point)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
    {
      french: "Lever de soleil (Point du lever du soleil)",
      english: "Sunrise (Sunset point)",
      category: "vocabulary",
      explicitCategory: "Vocabulaire de tous les jours",
    },
  ];
  
  export { allQuestions };
  
