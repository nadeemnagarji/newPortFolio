navbar 
landingpage / homepage /intro
projects
skills
contactMe
Footer










Project learnings
1} applying smooth scroll using locomotive  and manipulating scroll speed of each div

    
step 1} npm i locomotive-scroll

step 2} const locomotiveScroll = new LocomotiveScroll() - writing this in app.jsx  will apply smooth scrolling on entire app

to manipulate the scrolling speed of each div i.e. increasing the scroll speed of one div and decreasing the scroll div of another we write this in that div

{data-scroll data-scroll-section data-scroll-speed="-.5"}

data-scroll: This attribute is likely used to specify an element as a scroll container or to trigger scrolling effects when an element comes into view during scrolling.

data-scroll-section: This attribute might define a section within the scroll container. It could be used to designate specific areas of the page where scrolling behavior or effects are applied.

data-scroll-speed="-.5": This attribute sets the scrolling speed for the element. A value of -0.5 indicates that the element will scroll at half the speed of the normal scrolling rate. The negative sign could imply a reverse scrolling direction.

Here's how it might work:

When the page is scrolled, the library would detect elements with the data-scroll attribute and apply specified scrolling effects or behaviors to them.
Elements marked with data-scroll-section could represent distinct sections of the page that trigger certain actions or effects when scrolled into view.
The data-scroll-speed attribute allows you to control the scrolling speed of individual elements, providing options for creating dynamic and engaging scrolling experiences.
Overall, these attributes likely serve to enhance the user experience by adding custom scrolling effects, such as parallax scrolling or animations triggered by scrolling, to the webpage.



2} Navbar clicking to  move to certain section of the page 

for this we first install the react-scroll library as npm i react-scroll
then we create the section references such as if i want to go to skills section when i click on skill. i need to 
FIRST add a attribute  in the div i want to go to 

Skill DIV ==>> <div name="skill" ></div>

SECOND i will have to add this name in the link div on which i want to click and move to this section to do this we need to import following things from react-scroll

import { Element, Link, animateScroll as scroll, scroller } from 'react-scroll'

<Link 
    to="skill"   // path of the section which will match with name attribute of  skill div and scroll down to that skill section
    spy={true}
    smooth={true}
    offset={0} // Adjust this offset if you have a fixed navbar
    duration={500}>  // time it takes to scroll to that section      
    <a>skill</a> 
</Link>

 


to={sections[i].title}  


3} Framer Motions animation technique of starting animation only when the user scrolls to that section i.e. when that section is in view of the user
 
1] to do this we have to import a look from framer motion called as useInView
import { motion, useInView } from "framer-motion";

2] We have to make a reference and pass to that div which we want to animate when in view 

 const ref = useRef()
 const isInView = useInView(ref)


 first we add this ref on the div such as <div ref={ref} ></div>
and then in  whichever sub part of that main div we want to add animations on we do conditional rendering using the isInView 
for e.g
<div ref={ref} >

<motion.h1
        initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
        animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
        transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
>
    Hello
</motion.h1>

</div>

so in above the hello will animate from opacity 0 to 100 nad move from 20 to 0  only when its inView of user  