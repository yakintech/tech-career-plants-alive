const maintenanceDiffs = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
};

const plantConditions = {
    POOR: "Poor",
    FAIR: "Fair",
    GOOD: "Good",
    VERY_GOOD: "Very Good",
    EXCELLENT: "Excellent"
};

const wateringConditions = {
    PER_DAY: 1,
    PER_WEEK: 2,
    PER_MONTH: 3,
};

const siteConditions = {
    INDOOR: 1,
    OUTDOOR: 2,
    INDOOR_OR_OUTDOOR: 3,
};

export default [
    {
        id: 1,
        name: "Chinese Money Plant",
        scientificName: "Pilea peperomioides",
        genus: "Pilea",
        family: "Urticaceae",
        image: "https://cdn.shopify.com/s/files/1/1752/4567/products/pilea_6_01.png?v=1569180578",
        maintenanceDiff: maintenanceDiffs.EASY,
        watering: wateringConditions.PER_WEEK,
        upcomingWateringDay: "May 6",
        siteCondition: siteConditions.INDOOR_OR_OUTDOOR,
        minIndoorTemp: 18,
        maxIndoorTemp: 25,
        condition: plantConditions.GOOD
    },
    {
        id: 2,
        name: "Devil's ivy",
        scientificName: "Epipremnum aureum",
        genus: "Epipremnum",
        family: "Araceae",
        image: "https://cdn.shopify.com/s/files/1/0262/7875/6434/products/PothosGold10in_1024x1024.png?v=1623357474",
        maintenanceDiff: maintenanceDiffs.MEDIUM,
        watering: wateringConditions.PER_DAY,
        upcomingWateringDay: "Apr 5",
        siteCondition: siteConditions.INDOOR_OR_OUTDOOR,
        minIndoorTemp: 19,
        maxIndoorTemp: 24,
        condition: plantConditions.FAIR
    },
    {
        id: 3,
        name: "Swiss Cheese Plant",
        scientificName: "Monstera deliciosa",
        genus: "Monstera",
        family: "Araceae",
        image: "https://www.thegardenstore.sg/image/cache/catalog/products/Plant/Cheese%20Plant%20Monstera%20adansonii-910x1155.png",
        maintenanceDiff: maintenanceDiffs.HARD,
        watering: wateringConditions.PER_WEEK,
        upcomingWateringDay: "12 Oct",
        siteCondition: siteConditions.OUTDOOR,
        minIndoorTemp: 4,
        maxIndoorTemp: 12,
        condition: plantConditions.POOR
    },
    {
        id: 4,
        name: "Nerium",
        scientificName: "Oleander",
        genus: "Nerium",
        family: "Apocynaceae",
        image: "https://www.thaigardendesign.com/wp-content/uploads/2021/09/Nerium-orleander.png",
        maintenanceDiff: maintenanceDiffs.EASY,
        watering: wateringConditions.PER_MONTH,
        upcomingWateringDay: "27 Jan",
        siteCondition: siteConditions.INDOOR,
        minIndoorTemp: 16,
        maxIndoorTemp: 26,
        condition: plantConditions.EXCELLENT
    },
    {
        id: 5,
        name: "Pigmyweeds",
        scientificName: "Crassula Ovata",
        genus: "Crassula",
        family: "Crassulaceae",
        image: "https://st3.depositphotos.com/1513097/15967/i/600/depositphotos_159679028-stock-photo-crassula-ovata-tree-in-flower.jpg",
        maintenanceDiff: maintenanceDiffs.MEDIUM,
        watering: wateringConditions.PER_WEEK,
        upcomingWateringDay: "18 Sep",
        siteCondition: siteConditions.INDOOR_OR_OUTDOOR,
        minIndoorTemp: -10,
        maxIndoorTemp: 20,
        condition: plantConditions.VERY_GOOD
    },
];