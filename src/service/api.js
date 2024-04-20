import { portfolioUrl } from "../helpers/constants"

export const fetchPortfolio = async () => {

    const response = await fetch(portfolioUrl);
    // console.log(" resp : ", response);
    const data = await response.json()
    // console.log(" data : ", data);
    return data
}