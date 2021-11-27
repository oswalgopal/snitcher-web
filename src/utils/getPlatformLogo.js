import {platformName} from './platformNames';
import {logo} from '../images/logo';
export const getPlatformLogoUrl = platform => {
    let url;
    if (platform === platformName.codeChef) {
        url = logo.codeChefSmallLogo;
    } else if (platform === platformName.leetCode) {
        url = logo.leetCodeSmallLogo;
    } else if (platform === platformName.codeForces) {
        url = logo.codeForcesSmallLogo;
    } else if (platform === platformName.atCoder) {
        url = logo.atCoderSmallLogo;
    } else if (platform === platformName.hackerRank) {
        url = logo.hackerRankSmallLogo;
    } else if (platform === platformName.hackerEarth) {
        url = logo.hackerEarthSmallLogo;
    } else {
        url = logo.hackerRankSmallLogo;
    }
    return url;
}
