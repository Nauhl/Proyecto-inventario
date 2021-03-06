/*import dbConnect from "../../../../utils/dbConnect";
import Company from "../../../models/Company";

dbConnect();

export default async (req, res) => {

  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const company = await Company.findById(id);

        if (!company) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: company });

      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "PUT":
      try {
        const company = await Company.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!company) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: company });

      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedCompany = await Company.deleteOne({ _id: id });

        if (!deletedCompany) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: deletedCompany });

      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed!" });
      break;
  }
}*/