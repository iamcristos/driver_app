import app from './server';

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`app is listening at ${PORT}`));
