import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import locationsRouter from './routes/location.js';
import newLocationRouter from './routes/newlocation.js';
import updateLocationRouter from './routes/updatelocation.js';
import deletelocationsRouter from './routes/deletelocation.js';

config();

// Conexão com MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://prova01:prova011q2w3e@cluster0.koxffh7.mongodb.net/Maps?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/location', locationsRouter);
app.use('/newlocation', newLocationRouter);
app.use('/updatelocation', updateLocationRouter)
app.use('/deletelocation', deletelocationsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error as JSON
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: res.locals.error
  });
});

export default app;
