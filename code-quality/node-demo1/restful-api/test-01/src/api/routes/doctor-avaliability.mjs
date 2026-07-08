import express from "express";
import doctorAvaliability from "../model/doctor-avaliability.mjs";

const router = express.Router();

router.post("/create", async (request, response) => {
  const { doctorId, day, startTime, endTime } = request.body;

  try {
    const doctorAvailability = new doctorAvaliability({
      doctorId,
      day,
      startTime,
      endTime,
    });

    await doctorAvailability.save();

    response.status(201).json({
      message: "Doctor availability created successfully",
      doctorAvailability,
      status: "success",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      status: "error",
    });
  }
});

export default router;
