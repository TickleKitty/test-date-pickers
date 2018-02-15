import React from "react";

const samplePropertiesForWalton = [
  {
    guid: "129f66e9-52db-4a90-b0fe-fe077955df5d",
    propertyName: "Walton Example 153SL"
  },
  {
    guid: "1546695e-bbec-4245-ac69-32e51f681050",
    propertyName: "Walton Example 153"
  },
  {
    guid: "4882820d-9e71-4c11-855c-58824bdd79ef",
    propertyName: "Walton Example 1906"
  },
  {
    guid: "f475ad6a-536c-4967-86fb-157fb91f416e",
    propertyName: "Walton Example 3231"
  },
  {
    guid: "6d989fb4-1a1c-4c49-9eee-8b0f90287aa8",
    propertyName: "Walton Example Bonanza"
  },
  {
    guid: "65beb382-ec07-4eb2-94b9-7e069ad6e34c",
    propertyName: "Walton Example 2092"
  },
  {
    guid: "0fb125c4-6924-41b1-828c-590aee3713cd",
    propertyName: "Walton Example 3923"
  },
  {
    guid: "0aee0b35-fcaf-4595-b978-c81ac69c720b",
    propertyName: "Walton Example Roost"
  },
  {
    guid: "87e0bf40-fccb-4dc8-bc78-28840ba83369",
    propertyName: "Walton Example 2912"
  },
  {
    guid: "081ce337-c093-45ef-9628-8b6b5b80fc38",
    propertyName: "Walton Example 2992"
  },
  {
    guid: "dc927c82-2df2-4e44-8167-4291a5647366",
    propertyName: "Walton Example Fisherman"
  },
  {
    guid: "daf7d13f-d3d6-4530-bd46-28a7e2b6971e",
    propertyName: "Walton Example 3002"
  },
  {
    guid: "fee70fa5-48ed-4ef6-8698-1dc468b0b3a5",
    propertyName: "Walton Example 2921"
  },
  {
    guid: "6798bfd5-73c1-4830-a54e-8db00f17d83f",
    propertyName: "Walton Example 2219"
  },
  {
    guid: "1a51b480-8f8b-4b0d-b87e-a62e18014b9d",
    propertyName: "Walton Example 1991",
    searchMatches: ['w1991', 'we1991']
  }
];

const samplePropertiesForOrlando = [
  {
    guid: "129f66e9-52db-4a90-b0fe-fe077955df5d",
    propertyName: "Orlando Example 153SL"
  },
  {
    guid: "1546695e-bbec-4245-ac69-32e51f681050",
    propertyName: "Orlando Example 153"
  },
  {
    guid: "4882820d-9e71-4c11-855c-58824bdd79ef",
    propertyName: "Orlando Example 1906"
  },
  {
    guid: "f475ad6a-536c-4967-86fb-157fb91f416e",
    propertyName: "Orlando Example 3231"
  },
  {
    guid: "6d989fb4-1a1c-4c49-9eee-8b0f90287aa8",
    propertyName: "Orlando Example Bonanza"
  },
  {
    guid: "65beb382-ec07-4eb2-94b9-7e069ad6e34c",
    propertyName: "Orlando Example 2092"
  },
  {
    guid: "0fb125c4-6924-41b1-828c-590aee3713cd",
    propertyName: "Orlando Example 3923"
  },
  {
    guid: "0aee0b35-fcaf-4595-b978-c81ac69c720b",
    propertyName: "Orlando Example Roost"
  },
  {
    guid: "87e0bf40-fccb-4dc8-bc78-28840ba83369",
    propertyName: "Orlando Example 2912"
  },
  {
    guid: "081ce337-c093-45ef-9628-8b6b5b80fc38",
    propertyName: "Orlando Example 2992"
  },
  {
    guid: "dc927c82-2df2-4e44-8167-4291a5647366",
    propertyName: "Orlando Example Fisherman"
  },
  {
    guid: "daf7d13f-d3d6-4530-bd46-28a7e2b6971e",
    propertyName: "Orlando Example 3002"
  },
  {
    guid: "fee70fa5-48ed-4ef6-8698-1dc468b0b3a5",
    propertyName: "Orlando Example 2921"
  },
  {
    guid: "6798bfd5-73c1-4830-a54e-8db00f17d83f",
    propertyName: "Orlando Example 2219"
  },
  {
    guid: "1a51b480-8f8b-4b0d-b87e-a62e18014b9d",
    propertyName: "Orlando Example 1991"
  }
];

const marketsWithPropertyExamples = [
  {
    marketGuid: "walton-guid",
    marketName: "Walton",
    properties: samplePropertiesForWalton
  },
  {
    marketGuid: "orlando-guid",
    marketName: "Orlando",
    properties: samplePropertiesForOrlando
  },
  {
    marketGuid: "jacksonville-guid",
    marketName: "Jacksonville",
    properties: []
  }
];

const getMarket = marketGuid => {
  return marketsWithPropertyExamples.find(m => m.marketGuid === marketGuid);
};

const prepareTransferBoxData = (market, activeProperties) => {

  const marketProperties = [];

  for (var marketProperty of market.properties) {
    marketProperties.push({
      key: marketProperty.guid,
      title: marketProperty.propertyName,
      searchMatches: marketProperty.searchMatches
    });
  }

  return {
    marketProperties: marketProperties,
    activeProperties: activeProperties
  };
};

const getPropertyByMarket = (marketGuid, propertyGuid) => {
  const market = getMarket(marketGuid);

  if (market) {
    const property = market.properties.find(p => p.guid === propertyGuid);
    return property;
  }

  return null;
};

export {
  marketsWithPropertyExamples,
  getMarket,
  getPropertyByMarket,
  prepareTransferBoxData
};
