import MobileDetect from 'mobile-detect';
import {withUserAgent,userAgent } from 'react-useragent/lib/'
export default class MobileDetection{
    
    static getInitialProps() {
        let userAgent;
        let deviceType;



        // const md = new MobileDetect(withUserAgent);
        // if (md.tablet()) {
        //   deviceType = "tablet";
        // } else if (md.mobile()) {
        //   deviceType = "mobile";
        // } else {
        //   deviceType = "desktop";
        // }
        return { deviceType };
      }
}