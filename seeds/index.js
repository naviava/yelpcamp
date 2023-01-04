const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');
const Review = require('../models/review');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/yelp-camp')
    .then(() => {
        console.log("Database Connected...")
    })
    .catch(err => {
        console.log("Error connecting to database...")
        console.log(err)
    })
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10);
        const camp = new Campground({
            author: '63a969056b3790b34844ea3b',
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408723/YelpCamp/yqsx67axz9mohewhdcto.jpg',
                    filename: 'YelpCamp/yqsx67axz9mohewhdcto'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408724/YelpCamp/gkkfotony1dcnaydaocc.jpg',
                    filename: 'YelpCamp/gkkfotony1dcnaydaocc'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408727/YelpCamp/jfrbwyd3gktk8leubosz.jpg',
                    filename: 'YelpCamp/jfrbwyd3gktk8leubosz'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408728/YelpCamp/dvdrw8565u7ipwpwzo5a.jpg',
                    filename: 'YelpCamp/dvdrw8565u7ipwpwzo5a'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408729/YelpCamp/esyfumn0zaqk4jcoi38a.jpg',
                    filename: 'YelpCamp/esyfumn0zaqk4jcoi38a'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408729/YelpCamp/qmermcjpeyvsriz2atvd.jpg',
                    filename: 'YelpCamp/qmermcjpeyvsriz2atvd'
                },
                {
                    url: 'https://res.cloudinary.com/dlfphf3ai/image/upload/v1672408730/YelpCamp/zxlknljbdujd15dd05zg.jpg',
                    filename: 'YelpCamp/zxlknljbdujd15dd05zg'
                }
            ],
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Accusantium veritatis quidem nostrum obcaecati non! Quod numquam, inventore quasi quo laboriosam iusto, vero est adipisci suscipit expedita unde.Rem, distinctio officia.Ad libero saepe expedita quae.Minima, molestiae, perferendis rem, totam harum et pariatur aliquam aut distinctio numquam tempora fugit praesentium repudiandae dolore eaque obcaecati quod vel id amet soluta quidem!',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})