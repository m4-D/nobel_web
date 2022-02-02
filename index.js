"use strict";

// Data
const Data = {
  prizes: [
    {
      year: "2018",
      category: "physics",
      overallMotivation:
        "\u201cfor groundbreaking inventions in the field of laser physics\u201d",
      laureates: [
        {
          id: "960",
          firstname: "Arthur",
          surname: "Ashkin",
          motivation:
            '"for the optical tweezers and their application to biological systems"',
          share: "2",
        },
        {
          id: "961",
          firstname: "G\u00e9rard",
          surname: "Mourou",
          motivation:
            '"for their method of generating high-intensity, ultra-short optical pulses"',
          share: "4",
        },
        {
          id: "962",
          firstname: "Donna",
          surname: "Strickland",
          motivation:
            '"for their method of generating high-intensity, ultra-short optical pulses"',
          share: "4",
        },
      ],
    },
    {
      year: "2018",
      category: "chemistry",
      laureates: [
        {
          id: "963",
          firstname: "Frances H.",
          surname: "Arnold",
          motivation: '"for the directed evolution of enzymes"',
          share: "2",
        },
        {
          id: "964",
          firstname: "George P.",
          surname: "Smith",
          motivation: '"for the phage display of peptides and antibodies"',
          share: "4",
        },
        {
          id: "965",
          firstname: "Sir Gregory P.",
          surname: "Winter",
          motivation: '"for the phage display of peptides and antibodies"',
          share: "4",
        },
      ],
    },
    {
      year: "2018",
      category: "medicine",
      laureates: [
        {
          id: "958",
          firstname: "James P.",
          surname: "Allison",
          motivation:
            '"for their discovery of cancer therapy by inhibition of negative immune regulation"',
          share: "2",
        },
        {
          id: "959",
          firstname: "Tasuku",
          surname: "Honjo",
          motivation:
            '"for their discovery of cancer therapy by inhibition of negative immune regulation"',
          share: "2",
        },
      ],
    },
    {
      year: "2018",
      category: "peace",
      laureates: [
        {
          id: "966",
          firstname: "Denis",
          surname: "Mukwege",
          motivation:
            '"for their efforts to end the use of sexual violence as a weapon of war and armed conflict"',
          share: "2",
        },
        {
          id: "967",
          firstname: "Nadia",
          surname: "Murad",
          motivation:
            '"for their efforts to end the use of sexual violence as a weapon of war and armed conflict"',
          share: "2",
        },
      ],
    },
    {
      year: "2018",
      category: "economics",
      laureates: [
        {
          id: "968",
          firstname: "William D.",
          surname: "Nordhaus",
          motivation:
            '"for integrating climate change into long-run macroeconomic analysis"',
          share: "2",
        },
        {
          id: "969",
          firstname: "Paul M.",
          surname: "Romer",
          motivation:
            '"for integrating technological innovations into long-run macroeconomic analysis"',
          share: "2",
        },
      ],
    },
    {
      year: "2017",
      category: "physics",
      laureates: [
        {
          id: "941",
          firstname: "Rainer",
          surname: "Weiss",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "2",
        },
        {
          id: "942",
          firstname: "Barry C.",
          surname: "Barish",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
        {
          id: "943",
          firstname: "Kip S.",
          surname: "Thorne",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
      ],
    },
    {
      year: "2017",
      category: "chemistry",
      laureates: [
        {
          id: "944",
          firstname: "Jacques",
          surname: "Dubochet",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "945",
          firstname: "Joachim",
          surname: "Frank",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "946",
          firstname: "Richard",
          surname: "Henderson",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "medicine",
      laureates: [
        {
          id: "938",
          firstname: "Jeffrey C.",
          surname: "Hall",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "939",
          firstname: "Michael",
          surname: "Rosbash",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "940",
          firstname: "Michael W.",
          surname: "Young",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "literature",
      laureates: [
        {
          id: "947",
          firstname: "Kazuo",
          surname: "Ishiguro",
          motivation:
            '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
          share: "1",
        },
      ],
    },
    {
      year: "2017",
      category: "peace",
      laureates: [
        {
          id: "948",
          firstname: "International Campaign to Abolish Nuclear Weapons (ICAN)",
          motivation:
            '"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons"',
          share: "1",
          surname: "",
        },
      ],
    },
    {
      year: "2017",
      category: "economics",
      laureates: [
        {
          id: "949",
          firstname: "Richard H.",
          surname: "Thaler",
          motivation: '"for his contributions to behavioural economics"',
          share: "1",
        },
      ],
    },
    {
      year: "2016",
      category: "physics",
      laureates: [
        {
          id: "928",
          firstname: "David J.",
          surname: "Thouless",
          motivation:
            '"for theoretical discoveries of topological phase transitions and topological phases of matter"',
          share: "2",
        },
        {
          id: "929",
          firstname: "F. Duncan M.",
          surname: "Haldane",
          motivation:
            '"for theoretical discoveries of topological phase transitions and topological phases of matter"',
          share: "4",
        },
        {
          id: "930",
          firstname: "J. Michael",
          surname: "Kosterlitz",
          motivation:
            '"for theoretical discoveries of topological phase transitions and topological phases of matter"',
          share: "4",
        },
      ],
    },
    {
      year: "2016",
      category: "chemistry",
      laureates: [
        {
          id: "931",
          firstname: "Jean-Pierre",
          surname: "Sauvage",
          motivation: '"for the design and synthesis of molecular machines"',
          share: "3",
        },
        {
          id: "932",
          firstname: "Sir J. Fraser",
          surname: "Stoddart",
          motivation: '"for the design and synthesis of molecular machines"',
          share: "3",
        },
        {
          id: "933",
          firstname: "Bernard L.",
          surname: "Feringa",
          motivation: '"for the design and synthesis of molecular machines"',
          share: "3",
        },
      ],
    },
    {
      year: "2016",
      category: "medicine",
      laureates: [
        {
          id: "927",
          firstname: "Yoshinori",
          surname: "Ohsumi",
          motivation: '"for his discoveries of mechanisms for autophagy"',
          share: "1",
        },
      ],
    },
    {
      year: "2016",
      category: "literature",
      laureates: [
        {
          id: "937",
          firstname: "Bob",
          surname: "Dylan",
          motivation:
            '"for having created new poetic expressions within the great American song tradition"',
          share: "1",
        },
      ],
    },
    {
      year: "2016",
      category: "peace",
      laureates: [
        {
          id: "934",
          firstname: "Juan Manuel",
          surname: "Santos",
          motivation:
            '"for his resolute efforts to bring the country\'s more than 50-year-long civil war to an end"',
          share: "1",
        },
      ],
    },
    {
      year: "2016",
      category: "economics",
      laureates: [
        {
          id: "935",
          firstname: "Oliver",
          surname: "Hart",
          motivation: '"for their contributions to contract theory"',
          share: "2",
        },
        {
          id: "936",
          firstname: "Bengt",
          surname: "Holmstr\u00f6m",
          motivation: '"for their contributions to contract theory"',
          share: "2",
        },
      ],
    },
    {
      year: "2015",
      category: "physics",
      laureates: [
        {
          id: "919",
          firstname: "Takaaki",
          surname: "Kajita",
          motivation:
            '"for the discovery of neutrino oscillations, which shows that neutrinos have mass"',
          share: "2",
        },
        {
          id: "920",
          firstname: "Arthur B.",
          surname: "McDonald",
          motivation:
            '"for the discovery of neutrino oscillations, which shows that neutrinos have mass"',
          share: "2",
        },
      ],
    },
    {
      year: "2015",
      category: "chemistry",
      laureates: [
        {
          id: "921",
          firstname: "Tomas",
          surname: "Lindahl",
          motivation: '"for mechanistic studies of DNA repair"',
          share: "3",
        },
        {
          id: "922",
          firstname: "Paul",
          surname: "Modrich",
          motivation: '"for mechanistic studies of DNA repair"',
          share: "3",
        },
        {
          id: "923",
          firstname: "Aziz",
          surname: "Sancar",
          motivation: '"for mechanistic studies of DNA repair"',
          share: "3",
        },
      ],
    },
    {
      year: "2015",
      category: "medicine",
      laureates: [
        {
          id: "916",
          firstname: "William C.",
          surname: "Campbell",
          motivation:
            '"for their discoveries concerning a novel therapy against infections caused by roundworm parasites"',
          share: "4",
        },
        {
          id: "917",
          firstname: "Satoshi",
          surname: "\u014cmura",
          motivation:
            '"for their discoveries concerning a novel therapy against infections caused by roundworm parasites"',
          share: "4",
        },
        {
          id: "918",
          firstname: "Youyou",
          surname: "Tu",
          motivation:
            '"for her discoveries concerning a novel therapy against Malaria"',
          share: "2",
        },
      ],
    },
    {
      year: "2015",
      category: "literature",
      laureates: [
        {
          id: "924",
          firstname: "Svetlana",
          surname: "Alexievich",
          motivation:
            '"for her polyphonic writings, a monument to suffering and courage in our time"',
          share: "1",
        },
      ],
    },
    {
      year: "2015",
      category: "peace",
      laureates: [
        {
          id: "925",
          firstname: "National Dialogue Quartet",
          motivation:
            '"for its decisive contribution to the building of a pluralistic democracy in Tunisia in the wake of the Jasmine Revolution of 2011"',
          share: "1",
          surname: "",
        },
      ],
    },
    {
      year: "2015",
      category: "economics",
      laureates: [
        {
          id: "926",
          firstname: "Angus",
          surname: "Deaton",
          motivation: '"for his analysis of consumption, poverty, and welfare"',
          share: "1",
        },
      ],
    },
    {
      year: "2014",
      category: "physics",
      laureates: [
        {
          id: "906",
          firstname: "Isamu",
          surname: "Akasaki",
          motivation:
            '"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources"',
          share: "3",
        },
        {
          id: "907",
          firstname: "Hiroshi",
          surname: "Amano",
          motivation:
            '"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources"',
          share: "3",
        },
        {
          id: "908",
          firstname: "Shuji",
          surname: "Nakamura",
          motivation:
            '"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources"',
          share: "3",
        },
      ],
    },
    {
      year: "2014",
      category: "chemistry",
      laureates: [
        {
          id: "909",
          firstname: "Eric",
          surname: "Betzig",
          motivation:
            '"for the development of super-resolved fluorescence microscopy"',
          share: "3",
        },
        {
          id: "910",
          firstname: "Stefan W.",
          surname: "Hell",
          motivation:
            '"for the development of super-resolved fluorescence microscopy"',
          share: "3",
        },
        {
          id: "911",
          firstname: "William E.",
          surname: "Moerner",
          motivation:
            '"for the development of super-resolved fluorescence microscopy"',
          share: "3",
        },
      ],
    },
    {
      year: "2014",
      category: "medicine",
      laureates: [
        {
          id: "903",
          firstname: "John",
          surname: "O'Keefe",
          motivation:
            '"for their discoveries of cells that constitute a positioning system in the brain"',
          share: "2",
        },
        {
          id: "904",
          firstname: "May-Britt",
          surname: "Moser",
          motivation:
            '"for their discoveries of cells that constitute a positioning system in the brain"',
          share: "4",
        },
        {
          id: "905",
          firstname: "Edvard I.",
          surname: "Moser",
          motivation:
            '"for their discoveries of cells that constitute a positioning system in the brain"',
          share: "4",
        },
      ],
    },
  ],
};

// DOM selectors
const searchBox = document.querySelector(".searchBox");
const submitBtn = document.querySelector(".btn");
const resultList = document.querySelector(".result-list");

const allLaureates = Data.prizes.flatMap((item) => item.laureates);

const loadResults = (keyword) => {
  if (!keyword) {
    const allResult = Data.prizes
      .map((item) => {
        return `
            <li class="person">
                <span class="names">
                    ${item.laureates
                      .map(
                        (subitem) => `<h2>Name: ${subitem.firstname}</h2>
                    <h3>Category: ${item.category}</h3><h4>Year: ${item.year}<h4>`
                      )
                      .sort()
                      .join("")}
                </span>

            </li>
        `;
      })
      .join("");
    resultList.innerHTML = allResult;
  } else {
    const htmlString = keyword
      .map((item) => {
        return `
            <li class="person">
                <h2>${item.firstname}</h2>
            </li>
            `;
      })
      .join("");
    resultList.innerHTML = htmlString;
  }
};

//  Search Operation

/////////////////////////////////////////////////////
// 1. Search A noble prize winner by their name  ////
/////////////////////////////////////////////////////

function handleSearchOperation(e) {
  let searchString = e.target.value;

  const filteredResult = allLaureates.filter((item) => {
    return item.firstname.includes(searchString);
  });
  loadResults(filteredResult);
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 2. Search noble prize winner according to year  ////
///////////////////////////////////////////////////////

/*
function handleSearchOperation(e) {
  let searchString = e.target.value;

  const filteredDates = [];
  for (let i = 0; i < Data.prizes.length; i++) {
    if (Data.prizes[i].year === searchString) {
      filteredDates.push(...Data.prizes[i].laureates);
    }
  }
  loadResults(filteredDates);
}
*/
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

///////////////////////////////////////////////
//   3. Search based on year and category  ////
///////////////////////////////////////////////
/*
function handleSearchOperation(e) {
    let searchString = e.target.value;
  
    const filteredWithYearandCategory = [];
    for (let i = 0; i < Data.prizes.length; i++) {
        if (
            searchString === Data.prizes[i].year ||
            searchString === Data.prizes[i].category
            ) {
                filteredWithYearandCategory.push(...Data.prizes[i].laureates);
            }
        }
    }
    loadResults(filteredWithYearandCategory);   
}
*/
///////////////////////////////////////////////
///////////////////////////////////////////////

////////////////////////////////////////////////////////
// 4. loads all result from the api alphabetically  ////
////////////////////////////////////////////////////////
loadResults();

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

searchBox.addEventListener("keyup", handleSearchOperation);
