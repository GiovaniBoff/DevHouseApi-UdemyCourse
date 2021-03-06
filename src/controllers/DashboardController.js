import House from "../models/House";

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers;

    const houses = await House.find({ user_id });

    return res.json({ ok: true });
  }
}

export default new DashboardController();
