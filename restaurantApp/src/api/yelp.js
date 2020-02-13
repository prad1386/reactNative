import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer N9Wmypf0m2HNb2WFgCwQRDPXbsLW9InDlXM_VA49o_vYXVBciQsEdSJgXFZcuOfLlKV6RklOs0qSss6za06LZLOJgpFjygpr8PcBw5khcoVy1P5OmwEyPjmMVSw9XnYx"
  }
});
