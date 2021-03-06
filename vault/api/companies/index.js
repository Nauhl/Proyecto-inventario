/*import dbConnect from "../../../utils/dbConnect"
import Company from "../../../models/Company";

dbConnect();

export default async (req, res) => {

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const companies = await Company.find({});
        res.status(200).json({ success: true, data: companies });

      } catch (error) {
        res.status(400).json({ success: false, message: error.message });

      }
      break;

    case "POST":
      try {
        const company = await Company.create(req.body);
        res.status(201).json({ success: true, data: company });

      } catch (error) {
        res.status(400).json({ success: false, message: error.message });

      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed!" });

      break;
  }
}*/