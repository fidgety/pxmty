import {
  COFFEE,
  BURGER,
  BAR,
  RESTAURANT,
  HOTEL,
  EVENT,
  GOLF,
  KARTING,
  PUZZLE,
  BOWLING,
} from "constants/poiTypes";

export default [
  {
    name: "Our selection of the best tea and coffee shops in Manchester",
    slug: "our-selection-best-tea-and-cofffee-shops-in-manchester",
    description:
      "There's been an increasing number of independent tea and coffee shops in" +
      " Manchester in recent years. Whether you are looking" +
      " for a place to whip out your laptop and do" +
      " some work, a casual date or just to catch up with friends, we've compiled a" +
      " list of our favourites.",
    keywords: "manchester,tea,coffee",
    img: {
      src: "/images/coffee.jpg",
      alt: "Coffee shop",
    },
    published: {
      date: "2018-05-28",
      by: "Vicin",
    },
    type: COFFEE,
    destination: "MANCHESTER",
    items: [
      {
        name: "Pot Kettle Black",
        gid: "ChIJhcrI9sOxe0gRcOCKdjUec08",
        coords: [53.482707, -2.246252],
        description:
          "Head out of the Northern Quarter and choice of Tea Houses" +
          " diminish considerably, but one worth visiting is Pot Kettle Black." +
          " Located in Barton’s Arcade, this one can be easily missed," +
          " but miss it at your peril.<br/><br>" +
          " It has more than a whiff of a traditional coffee house as" +
          " it’s vibe, but do not let that put you off from trying some" +
          " interesting range of teas. They are highly praised for their" +
          " brunch offering, but there is also a large selection of fresh" +
          " cakes, pastries and smoothies available.",
        img: {
          src: "/images/coffee/PotKettleBlack.png",
          alt: "Pot Kettle Black",
          credit: {
            url: "https://www.instagram.com/pkbcoffee/",
            name: "Pot Kettle Black",
          },
        },
        social: {
          website: "http://www.potkettleblackltd.co.uk/barton-arcade/about/",
          twitter: "pkbcoffee",
          instagram: "pkbcoffee",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Ezra & Gil",
        gid: "ChIJzQLuvL6xe0gRjpAUyXLzWX8",
        coords: [53.48201, -2.2351652],
        description:
          "Describing itself as an 'evolutionary concept in urban" +
          " coffee, cafe culture and general provisions' will give you" +
          " an indication to the vibe that E&G are trying to instill." +
          " It’s a welcome addition to the many independent coffee and" +
          " tea houses in Manchester.<br/><br/>" +
          " The food is plentiful and has a unique and innovative" +
          " approach to flavour combos. The environment is great," +
          " always busy, lively and atmospheric. It even has a mini" +
          " grocer area at the counter.",
        img: {
          src: "/images/coffee/EzraandGil.png",
          alt: "Ezra & Gil",
          credit: {
            url: "https://www.instagram.com/ezraandgil/",
            name: "Ezra & Gil",
          },
        },
        social: {
          website: "http://www.ezraandgil.com/",
          twitter: "ezra_gil",
          instagram: "ezraandgil",
        },
        type: COFFEE,
        tips: ["Great selection of cakes including vegan options"],
      },
      {
        name: "Teacup",
        gid: "ChIJKzvgprixe0gRj9kX6Qry_dc",
        coords: [53.4842614, -2.2406691],
        description:
          "One of Northern Quarter’s power houses and must" +
          " for any tea aficionado. And as such it boasts a full" +
          " range of drinks and food that caters for all tastes." +
          " It has a wide range of teas, and coffees. It’s surroundings" +
          " are downplayed as with most eateries in the Northern" +
          " Quarter.<br/><br/> What sets this apart from the" +
          " rest of the rabble is it’s fantastic food options." +
          " Breakfast served all day, with the large dippy duck" +
          " eggs being a star – creamy, smooth and runny – great" +
          " for dipping your Barbakan soldiers in. But it doesn’t" +
          " stop there, with a decent lunch menu that offers great" +
          " sandwich fillings, stews and soups.<br/><br/>" +
          " And if cakes are your thing, then don’t miss out" +
          " on their Rainbow Cake, which is a firm favourite" +
          " amongst their regulars.",
        img: {
          src: "/images/coffee/TeaCup.png",
          alt: "Teacup",
          credit: {
            url: "https://www.instagram.com/teacupandcakes/",
            name: "Teacup",
          },
        },
        social: {
          website: "http://teacupandcakes.com/",
          twitter: "teacupandcakes",
          instagram: "teacupandcakes",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Fig and Sparrow",
        gid: "ChIJA5X2xL6xe0gRygAiXMiNOdM",
        coords: [53.4823282, -2.2364627],
        description:
          "F&G are quintessentially different to what" +
          " most have come to expect from Manchester’s Tea" +
          " Houses. For F&G, less is more. It’s small, cosy," +
          " cute and very intimate. The menu is also small" +
          " with only five sandwich options but it really" +
          " packs a punch. It is also incredible value for" +
          " money, for a fiver you get the kind of sandwich" +
          " that boasts huge doorstep bread with fresh" +
          " ingredients.<br/><br/> It goes without saying" +
          " that there is a staple of wide range teas and" +
          " some North East sourced Coffee blends. There’s" +
          " also a front of house design shop and you can" +
          " sum this up as one of the quaintest tea" +
          " offerings in Northern Quarter.",
        img: {
          src: "/images/coffee/FigandSparrow.png",
          alt: "Fig and Sparrow",
          credit: {
            url: "https://www.instagram.com/figsparrow/",
            name: "Fig and Sparrow",
          },
        },
        social: {
          website: "https://www.figandsparrow.co.uk/",
          twitter: "figsparrow",
          instagram: "figsparrow",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Takk",
        gid: "ChIJs_pIhb6xe0gRyzFr79xixhM",
        coords: [53.4810822, -2.2346556],
        description:
          "An Icelandic coffee bar that possesses all the" +
          " qualities you have come to expect from a Northern Quarter" +
          " tea bar. Great coffee, free WiFi, homemade cakes, rustic" +
          " interior, and arty scandinavian art on the walls." +
          " Tick, tick, tick, and more ticks for this quirky establishment." +
          " TAKK focuses on softness of surroundings, from the" +
          " decor to the lighting. Everything here is laid back" +
          " and definitely Nordic. Imported coffee beans and" +
          " chocolate accompany the interesting range of teas." +
          " <br/><br/>It has a chilled out vibe where you can get" +
          " your head down to do some work, read a magazine," +
          " or just have a nice cuppa.",
        img: {
          src: "/images/coffee/Takk.png",
          alt: "Takk",
          credit: {
            url: "https://www.instagram.com/takkmcr/",
            name: "Takk",
          },
        },
        social: {
          website: "http://takkmcr.com/",
          twitter: "takkmcr",
          instagram: "takkmcr",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "North Tea Power",
        gid: "ChIJeyH3LL-xe0gRBn_r35KoETs",
        coords: [53.4828807, -2.2382199],
        description:
          "Always a favourite amongst the hipsters of Manchester." +
          " Located in the Northern Quarter, it’s a quirky stripped down" +
          " offering of a traditional tea house. It’s definitely an" +
          " eclectic tea house focussing primarily on its drink" +
          " offerings.<br/><br/> If tea is your thing, then it" +
          " has a wide range of blends. If teas aren’t your thing" +
          " then the coffee menu is stacked with guest espressos." +
          " It also has its own take on a cold brew, a heady mix" +
          " of selected coffee blends for those who prefer their" +
          " caffeine over ice. A diverse selection of craft beers" +
          " is also available. Not too overcrowded but seems to" +
          " be a popular work space for regulars.",
        img: {
          src: "/images/coffee/NorthTeaPower.png",
          alt: "North Tea Power",
          credit: {
            url: "https://www.instagram.com/northteapower/",
            name: "North Tea Power",
          },
        },
        social: {
          website: "https://northteapower.co.uk/",
          twitter: "northteapower",
          instagram: "northteapower",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Sugar Junction",
        gid: "ChIJk3hDLrmxe0gRt9VOGxYzI9E",
        description:
          "If you’re not careful, you will miss out on this gem within" +
          " Manchester’s Northern Quarter, which has its fair share of tea houses" +
          " and cafes. Sugar Junction definitely serves up an alternative to the" +
          " hipster feel to most of the Northern Quarter’s cafeterias" +
          " focussing on it’s hugely" +
          " unique approach which can be seen through their blend of teas," +
          " to the passion of their baking, to the vintageness" +
          " of their surroundings.<br/><br/>" +
          " The team behind Sugar Junction have gone to great lengths to make sure" +
          " every detail is catered for. The look and feel of their tea room is" +
          " very much classic vintage, and their menu accordingly boast the same" +
          " vibe. Indeed, their cake offerings are a speciality, including the" +
          " Chocolate Malteaser Cake, the Hazelnut Hedgerow, mouth-watering vegan" +
          " friendly cheesecakes and gluten and dairy free brownies.",
        coords: [53.483512, -2.2371632],
        img: {
          src: "/images/coffee/SugarJunction.png",
          alt: "Sugar Junction",
          credit: {
            url: "https://www.instagram.com/sugarjunctionnq/",
            name: "Sugar Junction",
          },
        },
        social: {
          website: "http://www.sugarjunction.co.uk/",
          twitter: "sugarjunction",
          instagram: "sugarjunctionnq",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Proper Tea",
        gid: "ChIJAZ5Bmsaxe0gRp-hZalgGrC0",
        description:
          "The little sister to its big brother TeaCup." +
          " It’s situated next to Manchester Cathedral, within the heart" +
          " of Manchester’s shopping district. It’s a chic, contemporary" +
          " offering with shabby chic cabinets and red and white china," +
          " which tries to give the place a rustic homely feel.<br/><br/>" +
          " Although it’s not too homely, with more than a contemporary" +
          " take on the traditional British tearoom, it serves an" +
          " impressive selection of loose leaf teas alongside fresh" +
          " homemade meals and delicious hand crafted cakes. The menu" +
          " likewise is downplayed and also offers hearty stews," +
          " soups and sandwiches.<br/><br/> It’s definitely off" +
          " the beaten track meaning that the ambience is rather" +
          " chilled out within a stone’s throw of burgeoning metropolis.",
        coords: [53.4848, -2.2446],
        img: {
          src: "/images/coffee/ProperTea.png",
          alt: "Proper Tea",
          credit: {
            url: "https://www.instagram.com/propertearooms/",
            name: "Proper Tea",
          },
        },
        social: {
          website: "http://www.properteadeveloper.com/",
          twitter: "propertearooms",
          instagram: "propertearooms",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Home Sweet Home",
        gid: "ChIJp4jY27ixe0gRw2moEdbtD_U",
        description:
          "A little bit of Americana in the middle" +
          " of Manchester adds a different feel and vibe" +
          " to most tea houses found within it’s vicinity." +
          " The surroundings has more than a nod to it’s" +
          " American Diner feel and the menu likewise boasts" +
          " a homage to all things soul food and America." +
          " <br/><br/>Buttermilk fried chicken on waffles," +
          " fish tacos, buxom burgers and BBQ Brisket melts." +
          " Comfort food at it’s most comfort.<br/><br/>" +
          " It is therefore not surprising that the range of" +
          " teas and coffees and cakes somehow take a back" +
          " seat to this but it’s still worth a visit and has" +
          " won awards aplenty.",
        coords: [53.4841, -2.2358],
        img: {
          src: "/images/coffee/HomeSweetHome.png",
          alt: "Home Sweet Home",
          credit: {
            url: "https://www.instagram.com/homesweethomeuk/",
            name: "Home Sweet Home",
          },
        },
        social: {
          website: "http://homesweethomenq.com/",
          twitter: "homesweethomenq",
          instagram: "homesweethomeuk",
        },
        type: COFFEE,
        tips: [],
      },
      {
        name: "Richmond Tea Rooms",
        gid: "ChIJK9VcWZWxe0gRivRXehwoSds",
        description:
          "Richmond Tea Rooms screams Tea at the top" +
          " of its voice and it is not ashamed to do so." +
          " It looks like what you’d expect from Alice in" +
          " Wonderland with its exuberant decor and menu" +
          " offerings. Big, bold and beautifully brash.<br/><br/>" +
          " Situated in the Gay Village of Manchester, its" +
          " sumptuously full of colour and flamboyance." +
          " Afternoon teas, sandwiches, scones, creams" +
          " and jams, Victoria sponges brimming with lashings" +
          " of frothy cream all waiting to be devoured." +
          " Complementing this rich selection is a vast" +
          " array of teas.<br/><br/> Oh and if that wasn’t" +
          " enough, it has an accompanying cocktail bar.",
        coords: [53.4776, -2.2368],
        img: {
          src: "/images/coffee/RichmondTeaRooms.png",
          alt: "Richmond Tea Rooms",
          credit: {
            url: "https://www.instagram.com/richmondtearooms/",
            name: "Richmond Tea Rooms",
          },
        },
        social: {
          website: "http://www.richmondtearooms.com/",
          twitter: "richmondtearoom",
          instagram: "richmondtearooms",
        },
        type: COFFEE,
        tips: [],
      },
    ],
  },
  {
    name: "Best Burger Joints in Manchester",
    slug: "best-burger-joints-in-manchester",
    description: "",
    img: {
      src: "/images/burger.jpg",
      alt: "Coffee shop",
    },
    published: {
      date: "2017-07-06",
      by: "Vicin",
    },
    type: RESTAURANT,
    destination: "MANCHESTER",
    items: [
      {
        name: "Solita NQ",
        gid: "ChIJX6dhtrixe0gRAFqMBm-hGaI",
        coords: [53.4836, -2.237],
        img: {
          src: "https://pbs.twimg.com/media/DD4GuRlXgAQZM0X.jpg",
          alt: "",
          credit: {
            url: "https://twitter.com/solitanq",
            name: "SolitaNQ",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        menu: "http://www.solita.co.uk/menus/",
        type: BURGER,
        tips: [
          '<a href="https://goo.gl/KdJR8w" target="_blank">Solita 25% off summer deal</a>',
        ],
      },
      {
        name: "Almost Famous",
        gid: "ChIJiTIowLixe0gRnUo9Rs1T4wM",
        coords: [53.4845, -2.2369],
        img: {
          src:
            "https://s3-media1.fl.yelpcdn.com/bphoto/ACIWBIRf-VOdw3uCmpSJYg/o.jpg",
          alt: "",
          credit: {
            url:
              "https://www.yelp.com/biz/almost-famous-manchester-5?osq=burger",
            name: "Yelp",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        menu: "http://www.almostfamousburgers.com/index.html#menu",
        type: BURGER,
        tips: [],
      },
      {
        name: "Red's True Barbecue",
        gid: "ChIJ58tZQMKxe0gRonBnEJtHlMg",
        coords: [53.4789, -2.2463],
        img: {
          src:
            "https://s3-media4.fl.yelpcdn.com/bphoto/TknA4fWsyH8wGPri6QSG2Q/o.jpg",
          alt: "Red's True Barbeque - The Pit Burger",
          credit: {
            url: "https://www.yelp.com/biz/reds-true-barbecue-manchester",
            name: "Yelp",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        menu:
          "https://truebarbecue.com/the-good-book/locations/manchester/chapter/full-menu/",
        type: BURGER,
        tips: [],
      },
      {
        name: "Burger & Lobster",
        gid: "ChIJqRRjCcGxe0gRTVx8NNdW0Js",
        coords: [53.4805, -2.2427],
        img: {
          src:
            "https://s3-media3.fl.yelpcdn.com/bphoto/rC_D6-hCy0E5bA4Fam6zdg/o.jpg",
          alt: "Burger & Lobster",
          credit: {
            url: "https://www.yelp.com/biz/burger-and-lobster-manchester",
            name: "Yelp",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        menu: "https://www.burgerandlobster.com/en/location/manchester",
        type: BURGER,
        tips: [],
      },
      {
        name: "Five Guys",
        gid: "ChIJLfo2O8exe0gRr575jJC_J1w",
        coords: [53.484, -2.2411],
        img: {
          src: "https://pbs.twimg.com/media/DCnOImiXgAAgxeX.jpg:large",
          alt: "",
          credit: {
            url: "https://twitter.com/FiveGuysUK",
            name: "FiveGuysUK",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        menu: "https://www.fiveguys.co.uk/our-menu#tab-burgers",
        type: BURGER,
        tips: [],
      },
    ],
  },
  {
    name: "Hotels for events at Manchester Arena",
    slug: "pick-of-best-hotels-for-events-at-manchester-arena",
    description:
      "Whether you're in Manchester to see Ed Sheeran or Disney On Ice at" +
      " the arena there's a great choice of hotels within close proximity that" +
      " won't stretch the pursestrings too much. We've compiled a list of" +
      " our recommendations below (we have thrown in a 5 star for those" +
      " special occasions).",
    keywords: "manchester,arena,hotels",
    img: {
      src: "/images/manchesterarena.jpg",
      alt: "Manchester Arena",
    },
    published: {
      date: "2017-07-08",
      by: "Vicin",
    },
    type: HOTEL,
    destination: "MANCHESTER",
    poi: {
      gid: "ChIJBZFitcexe0gRPciz1w5kgB8",
      coords: [53.4883, -2.244],
      type: EVENT,
    },
    items: [
      {
        name: "Park Inn by Radisson",
        gid: "ChIJs72KQcixe0gRaCkrwEmML0g",
        coords: [53.4899, -2.2413],
        img: {
          src:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/220/22044754.jpg",
          alt: "Park Inn by Radisson",
          credit: {
            url: "https://www.booking.com/",
            name: "Booking.com",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: ["A stone's throw away from the arena"],
      },
      {
        name: "Premier Inn Manchester City Centre Arena",
        gid: "ChIJTykzZuqxe0gRHj1U5asGVPw",
        coords: [53.4766, -2.242],
        img: {
          src:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/370/37004235.jpg",
          alt: "Premier Inn Manchester City Centre Arena",
          credit: {
            url:
              "https://www.booking.com/searchresults.en-gb.html?aid=356983;label=gog235jc-hotel-XX-gb-premierNinnNmanchesterNcityNcentreNmenNarena-unspec-gb-com-L%3Aen-O%3AosSx-B%3Achrome-N%3Ayes-S%3Abo-U%3Asalo-H%3As;sid=756a399964b97d0fbd96367776aee39f;class_interval=1;closed_msg=47228;dest_id=-2602512;dest_type=city;dtdisc=0;hlrd=14;inac=0;index_postcard=0;label_click=undef;offset=0;postcard=0;raw_dest_type=city;room1=A%2CA;sb_price_type=total;ss_all=0;ssb=empty;sshis=0&",
            name: "Booking.com",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: [],
      },
      {
        name: "Travelodge Manchester Central Arena",
        gid: "ChIJe9GMOM-xe0gR3jz9uqaDejk",
        coords: [53.4901, -2.2465],
        img: {
          src:
            "https://www.travelodge.co.uk/sites/default/files/styles/c12/public/RGM-2_LARGE.jpg",
          alt: "Travelodge Manchester Central Arena",
          credit: {
            url:
              "https://www.travelodge.co.uk/hotels/524/Manchester-Central-Arena-hotel",
            name: "Travelodge",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: [],
      },
      {
        name: "The Lowry",
        gid: "ChIJp62KfcOxe0gRVkORslKC7iU",
        coords: [53.4831, -2.2506],
        img: {
          src:
            "https://www.thelowryhotel.com/assets/lowry_hotel/content/images/1200x559_exterior%20night.jpg",
          alt: "The Lowry Hotel",
          credit: {
            url: "https://www.thelowryhotel.com/",
            name: "Lowry",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: [
          "Close to Deansgate and Spinningfields nightlife",
          "Popular hotel for celebrities",
        ],
      },
      {
        name: "Crowne Plaza Manchester City Centre",
        gid: "ChIJ4cHFQ7mxe0gRQSFLf0-8D14",
        coords: [53.4858, -2.2366],
        img: {
          src:
            "https://static.laterooms.com/hotelphotos/laterooms/151920/gallery/crowne-plaza-manchester-city-centre-manchester_301020151411072066.jpg",
          alt: "Crowne Plaza Manchester City Centre",
          credit: {
            url:
              "https://www.laterooms.com/en/hotel-reservations/151920_crowne-plaza-manchester-city-centre-manchester.aspx",
            name: "LateRooms",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: ["Very short walk from Arndale shopping centre"],
      },
      {
        name: "Holiday Inn Express Manchester Arena",
        gid: "ChIJ6YrK_7ixe0gR8xlV569laSo",
        coords: [53.4854, -2.2356],
        img: {
          src:
            "https://static.laterooms.com/hotelphotos/laterooms/237715/gallery/holiday-inn-express-manchester-city-ctre-men-arena_120520151358509351.jpg",
          alt: "Holiday Inn Express Manchester Arena",
          credit: {
            url:
              "https://www.laterooms.com/en/hotel-reservations/237715_holiday-inn-express-manchester-city-ctre-men-arena.aspx",
            name: "LateRooms",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: ["In the heart of the trendy Northern Quarter district"],
      },
      {
        name: "Travelodge Manchester Ancoats",
        gid: "ChIJWRceWLmxe0gRQpJ3tlTg2To",
        coords: [53.4842, -2.2321],
        img: {
          src:
            "https://static.laterooms.com/hotelphotos/laterooms/281012/gallery/travelodge-manchester-ancoats-manchester_060620161500384142.jpg",
          alt: "Travelodge Manchester Ancoats Hotel",
          credit: {
            url:
              "https://www.laterooms.com/en/hotel-reservations/281012_travelodge-manchester-ancoats-manchester.aspx",
            name: "LateRooms",
          },
        },
        social: {
          website: "",
          twitter: "",
          instagram: "",
        },
        type: HOTEL,
        tips: [
          "Furthest of the list from the arena",
          "Close to Piccadilly train station",
        ],
      },
    ],
  },
  {
    name: "Manchester activites at night",
    slug: "manchester-activities-at-night",
    description:
      "Whether it's for a hen night, stag do or just an" +
      " activity with friends Manchester has wide offering of things" +
      " to do on an evening. Check out our Manchester city favourites" +
      " below",
    keywords: "manchester,things to do, events, night",
    img: {
      src: "/images/mcrthingstodoatnight.jpg",
      alt: "Things to do at night in Manchester",
    },
    published: {
      date: "2017-08-12",
      by: "Vicin",
    },
    type: EVENT,
    destination: "MANCHESTER",
    items: [
      {
        name: "Crystal Maze",
        gid: "ChIJEb_zit2xe0gRZZFC32pv1Kw",
        description:
          "The classic 90's TV show comes to life and" +
          " now you can enter the dome too. A maximum of team size" +
          " of 8 with prices starting from £30 per person.",
        coords: [53.4773, -2.2567],
        img: {
          src: "/images/crystalmazemcr.jpg",
          alt: "Crystal Maze Manchester",
          credit: {
            url: "",
            name: "",
          },
        },
        social: {
          website: "https://the-crystal-maze.com/",
          twitter: "CrystalMazeHQ",
          instagram: "thecrystalmaze",
        },
        type: PUZZLE,
        tips: ["Come prepared with a team name and captain"],
      },
      {
        name: "Teamsport Karting",
        gid: "ChIJK4bqIcaxe0gRVPRrwANBMvY",
        description:
          "The unused basement of the Manchester" +
          " arena has been transformed into an underground" +
          " karting circuit. It's almost like something out" +
          " out of Fast & The Furious: Tokyo Drift.",
        coords: [53.48739, -2.2432],
        img: {
          src: "/images/teamsportmcr.jpg",
          alt: "Teamsport Karting Manchester",
          credit: {
            url: "https://www.dayoutwiththekids.co.uk/",
            name: "Day Out With The Kids",
          },
        },
        social: {
          website: "https://www.team-sport.co.uk/",
          twitter: "karting",
          instagram: "teamsportkarting",
        },
        type: KARTING,
        tips: [],
      },
      {
        name: "Escape Room",
        gid: "ChIJGYZS08Wxe0gRbjopcyMJm7A",
        description: "",
        coords: [53.4856, -2.2457],
        img: {
          src: "/images/escaperoommcr.jpg",
          alt: "Escape Room Manchester",
          credit: {
            url: "",
            name: "",
          },
        },
        social: {
          website: "http://www.theescaperoom.co.uk/",
          twitter: "EscapeRoomUK",
          instagram: "ukescaperoom",
        },
        type: PUZZLE,
        tips: [],
      },
      {
        name: "17 Below",
        gid: "ChIJBU7um8Gxe0gRi5OtNZpFH00",
        description:
          "Situated within (and below) Dogs n Dough, this retro themed bar" +
          " offers five retro arcade machines with free play. Also available are two" +
          " pool tables (hourly rate) and a great selection of cocktails.",
        coords: [53.4803, -2.245],
        img: {
          src: "/images/17below.jpg",
          alt: "17 Below Manchester",
          credit: {
            url: "http://17below.com/",
            name: "17 below",
          },
        },
        social: {
          website: "http://17below.com/",
          twitter: "17belowmcr",
          instagram: "17belowmcr",
        },
        type: BAR,
        tips: ["Six free retro arcade machines", "Pool tables aren't free"],
      },
      {
        name: "Junkyard Golf",
        gid: "ChIJA3o_Iuixe0gRpd1zwUKatvY",
        description:
          "Crazy golf has been taken to whole new level" +
          " and Junkyard Golf now has a permanent fixture. Junkyard offers two" +
          " eight-hole courses and three bars. Find out whether you're a Tiger" +
          " Woods of the past or present.",
        coords: [53.4793, -2.2336],
        img: {
          src: "/images/junkyardgolfmcr.jpg",
          alt: "Junkyard Golf Manchester",
          credit: {
            url:
              "http://confidentials.com/manchester/junkyard-golf-club-moves-to-first-street-manchester",
            name: "Confidentials",
          },
        },
        social: {
          website: "http://junkyardgolf.eventgenius.co.uk/",
          twitter: "junkyardgolf",
          instagram: "junkyardgolfclubmcr",
        },
        type: GOLF,
        tips: [],
      },
      {
        name: "All Star Lanes",
        gid: "ChIJv5CmJuixe0gRsyMqHjAENts",
        description: "",
        coords: [53.4776, -2.249],
        img: {
          src: "/images/allstarlanesmcr.jpg",
          alt: "All Star Lanes Manchester",
          credit: {
            url:
              "https://hirespace.com/Spaces/Manchester/42629/All-Star-Lanes-Manchester/The-Jungle-Room/Weddings",
            name: "Hire Space",
          },
        },
        social: {
          website: "https://www.allstarlanes.co.uk/",
          twitter: "AllStarLanesMCR",
          instagram: "allstarlanes",
        },
        type: BOWLING,
        tips: [],
      },
      /* {
                name: "Breakout",
                gid: "ChIJf-zKMMKxe0gRoORFvEWYzAM",
                description: "",
                coords: [53.4798, -2.2459],
                img: {
                    src: "/images/crystalmaze.jpg",
                    alt: "Breakout Manchester",
                    credit: {
                        url: "",
                        name: "'
                    }
                },
                social: {
                    website: "https://breakoutmanchester.com/",
                    twitter: "breakoutmcr",
                    instagram: "breakoutmanchester'
                },
                type: PUZZLE,
                tips: []
            } */
      {
        name: "Dog Bowl",
        gid: "ChIJsx-nxuuxe0gRlYOaWea1TQM",
        description: "",
        coords: [53.4741, -2.2429],
        img: {
          src: "/images/dogbowl.jpg",
          alt: "Dog Bowl Manchester",
          credit: {
            url: "http://www.manchesterbars.com/dogbowl.htm",
            name: "Manchester Bars",
          },
        },
        social: {
          website: "https://blackdogballroom.co.uk/",
          twitter: "BlackDogBowl",
          instagram: "blackdogbowl",
        },
        type: BOWLING,
        tips: [],
      },
    ],
  },
];
