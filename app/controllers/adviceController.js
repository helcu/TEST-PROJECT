import { adviceByKeywordService } from '../services/adviceService';
import { insertAdvice } from '../advice/model';
/**
 * Advice controller to get data from the API and also store retrived data on database
 *
 * @param {object} req route request param
 * @param {object} res route response param
 */
const adviceByKeywordController = async (req, res) => {
  const keyword = req.params.keyword;

  try {
    let payload = {};
    //Get API result from the service layer
    const result = await adviceByKeywordService(keyword);

    if (result.message) {
      payload = result.message.text;
    } else {
      // Select one random advice from results retrived
      const adviceSelected =
        result.slips[Math.floor(Math.random() * result.slips.length)];

      // Insert advice in to the databse
      await insertAdvice({
        api_id: adviceSelected.id,
        advice: adviceSelected.advice,
      });

      payload = adviceSelected.advice;
    }

    res.status(200).json({
      status: 'success',
      data: payload,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

module.exports = { adviceByKeywordController };
