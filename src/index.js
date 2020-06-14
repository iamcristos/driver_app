import app from './server';
// import interestScheduler from './jobs/contribution';

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`app is listening at ${PORT}`));
