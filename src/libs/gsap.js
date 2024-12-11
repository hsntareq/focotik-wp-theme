/* 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


*/

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { SplitBurrowing } from "gsap/SplitBurrowing";

gsap.registerPlugin(ScrollTrigger,SplitText);

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
    const textElement = document.querySelector(".text-typing");
    
    gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
tl.to("h1 span", {duration: 4, text:" is so much fun you should try it some time!"})
  .to(".green", {x:100})
  .set(".green",  {text:"I am done"})

  
    if (textElement) {
        
        // Wrap text nodes in span elements
        function wrapTextNodes(element) {
            Array.from(element.childNodes).forEach(node => {
                if (node.nodeType === 3) {  // Text node
                    const span = document.createElement('span');
                    span.textContent = node.textContent;
                    span.style.display = 'inline';  // Make sure spans are inline
                    node.parentNode.replaceChild(span, node);
                } else if (node.nodeType === 1) {  // Element node
                    wrapTextNodes(node);  // Recursively process child elements
                }
            });

        }

        // Wrap text nodes in span elements
        // wrapTextNodes(textElement);

        // ScrollTrigger to detect when the element enters the viewport
        ScrollTrigger.create({
            trigger: textElement,
            start: "top 80%",  // Animation starts when the element is 80% into the viewport
            onEnter: () => {
                // Animate each span element's opacity to reveal them like typing
                gsap.fromTo(textElement.querySelectorAll("span"), {
                    opacity: 0,
                    y: 10,
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,  // Duration for each character
                    stagger: 0.05,  // Delay between each character reveal
                    ease: "power1.out",
                });
            },
            once: true  // Ensures the animation runs only once when it enters the viewport
        });
    }
});


window.addEventListener("load", () => {
    gsap.utils.toArray(".gsap-scroll").forEach((element) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.out"
        });
    });
});

gsap.utils.toArray(".gsap-hover").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        gsap.to(element, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    element.addEventListener("mouseleave", () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
});

gsap.utils.toArray(".gsap-click").forEach((element) => {
    element.addEventListener("click", () => {
        console.log("click");

        gsap.to(element, { x: -10, duration: 0.05, ease: "power1.inOut", yoyo: true, repeat: 5 });
    });
});
