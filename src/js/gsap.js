

import { gsap } from "gsap";   
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

let mySplit = SplitText.create("#split");

// let mySplitText = new SplitText('#split',{type: "split"});
// let chars = mySplitText.chars;

// gsap.from(chars, {
//     yPercent: 130,
// })

