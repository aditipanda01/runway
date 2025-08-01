import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";

// Load env
dotenv.config();

// Routes
import loginRoute from "./api/auth/login.js";
import registerRoute from "./api/auth/register.js";
import userRoutes from "./api/users/profile.js";
import designHandler from "./api/designs/index.js";
import collaborationRoutes from "./api/collaborations/index.js";
import notificationsRoutes from "./api/notifications/index.js";

// Init
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Auth routes
app.use("/api/auth/login", loginRoute);
app.use("/api/auth/register", registerRoute);

// Other routes
app.use("/api/users", userRoutes);

// Wrap the design handler in a router to support Express routing
const designRouter = express.Router();
designRouter.all("/", designHandler);
app.use("/api/designs", designRouter);

app.use("/api/collaborations", collaborationRoutes);
app.use("/api/notifications", notificationsRoutes);

// DB Connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error("DB connection error:", err));